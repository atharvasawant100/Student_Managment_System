/**
 * Application-wide constants.
 * Keep framework-agnostic values here (no React imports) so they can be
 * consumed by services, routes and components alike.
 */

export const APP_NAME = 'Student Management System'

/**
 * The two completely separate portals of the product.
 * Never mix pages from both portals in a single folder or route tree.
 */
export const ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher',
}

export const PORTALS = {
  [ROLES.STUDENT]: {
    role: ROLES.STUDENT,
    label: 'Student Portal',
    roleLabel: 'Student',
    basePath: '/student',
  },
  [ROLES.TEACHER]: {
    role: ROLES.TEACHER,
    label: 'Teacher Portal',
    roleLabel: 'Teacher',
    basePath: '/teacher',
  },
}

/**
 * Placeholder session used until the login endpoint exists.
 * Replaced by the real API response (tokens in src/services/api.js).
 */
export const DEMO_USERS = {
  [ROLES.STUDENT]: {
    id: 'STU-2026-014',
    name: 'Atharva Sawant',
    role: ROLES.STUDENT,
  },
  [ROLES.TEACHER]: {
    id: 'FAC-2026-007',
    name: 'Demo Teacher',
    role: ROLES.TEACHER,
  },
}

/** Placeholder counters - the notifications API is not implemented yet. */
export const NOTIFICATIONS = {
  unreadCount: 3,
}

export const STORAGE_KEYS = {
  TOKEN: 'sms.auth.token',
  USER: 'sms.auth.user',
}