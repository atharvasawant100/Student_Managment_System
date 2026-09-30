/**
 * Single HTTP entry point for the whole frontend.
 *
 * Both portals talk to the backend through this module, so auth headers,
 * base URL handling and error normalisation live in exactly one place.
 * Domain specific calls (attendance, timetable, ...) should be added as small
 * services next to this file, e.g. `attendanceService.js`.
 */

import { STORAGE_KEYS } from '../utils/constants.js'

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '/api'
const TIMEOUT_MS = Number(import.meta.env.VITE_API_TIMEOUT ?? 20000)

export class ApiError extends Error {
  constructor(message, { status = 0, data = null, cause } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
    this.cause = cause
  }
}

function getToken() {
  try {
    return localStorage.getItem(STORAGE_KEYS.TOKEN) ?? null
  } catch {
    return null
  }
}

function buildUrl(path, query) {
  const base = path.startsWith('http') ? path : `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
  if (!query) return base

  const params = new URLSearchParams()
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, value)
    }
  })

  const search = params.toString()
  return search ? `${base}${base.includes('?') ? '&' : '?'}${search}` : base
}

async function request(path, { method = 'GET', body, query, headers, signal } = {}) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)

  if (signal) {
    signal.addEventListener('abort', () => controller.abort(), { once: true })
  }

  const token = getToken()

  try {
    const response = await fetch(buildUrl(path, query), {
      method,
      headers: {
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    })

    const isJson = response.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json().catch(() => null) : null

    if (!response.ok) {
      throw new ApiError(data?.message ?? `Request failed with status ${response.status}`, {
        status: response.status,
        data,
      })
    }

    return data
  } catch (error) {
    if (error instanceof ApiError) throw error
    if (error.name === 'AbortError') {
      throw new ApiError('Request timed out. Please try again.', { cause: error })
    }
    throw new ApiError('Network error. Please check your connection.', { cause: error })
  } finally {
    clearTimeout(timeoutId)
  }
}

export const api = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
  put: (path, body, options) => request(path, { ...options, method: 'PUT', body }),
  patch: (path, body, options) => request(path, { ...options, method: 'PATCH', body }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
}

export default api