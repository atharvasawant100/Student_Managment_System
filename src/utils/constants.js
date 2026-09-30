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
    basePath: '/student',
  },
  [ROLES.TEACHER]: {
    role: ROLES.TEACHER,
    label: 'Teacher Portal',
    basePath: '/teacher',
  },
}

export const STORAGE_KEYS = {
  TOKEN: 'sms.auth.token',
  USER: 'sms.auth.user',
}