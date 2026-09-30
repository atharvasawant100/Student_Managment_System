/**
 * Navigation configuration.
 *
 * Each portal owns its own list. The sidebars render these arrays, so adding a
 * module means: create the page folder -> add the route -> add one entry here.
 */

const studentNavItems = [
  { to: '/student/dashboard', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/student/timetable', label: 'Timetable', icon: 'calendar' },
  { to: '/student/attendance', label: 'Attendance', icon: 'check' },
  { to: '/student/assignments', label: 'Assignments', icon: 'assignment' },
  { to: '/student/exams', label: 'Exams', icon: 'exam' },
  { to: '/student/announcements', label: 'Announcements', icon: 'announcement' },
  { to: '/student/study-material', label: 'Study Material', icon: 'material' },
  { to: '/student/fees', label: 'Fees', icon: 'fees' },
  { to: '/student/receipts', label: 'Receipts', icon: 'receipt' },
  { to: '/student/profile', label: 'Profile', icon: 'profile' },
  { to: '/student/settings', label: 'Settings', icon: 'settings' },
]

const teacherNavItems = [
  { to: '/teacher/dashboard', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/teacher/my-classes', label: 'My Classes', icon: 'classes' },
  { to: '/teacher/students', label: 'Students', icon: 'users' },
  { to: '/teacher/timetable', label: 'Timetable', icon: 'calendar' },
  { to: '/teacher/attendance', label: 'Attendance', icon: 'check' },
  { to: '/teacher/assignments', label: 'Assignments', icon: 'assignment' },
  { to: '/teacher/exams', label: 'Exams', icon: 'exam' },
  { to: '/teacher/announcements', label: 'Announcements', icon: 'announcement' },
  { to: '/teacher/study-material', label: 'Study Material', icon: 'material' },
  { to: '/teacher/profile', label: 'Profile', icon: 'profile' },
  { to: '/teacher/settings', label: 'Settings', icon: 'settings' },
]

export { studentNavItems, teacherNavItems }

export default { studentNavItems, teacherNavItems }