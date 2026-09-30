/**
 * Mock dashboard data.
 *
 * Temporary: replaced by `services/dashboardService.js` (or per-module
 * services) once the backend exposes these endpoints. The shape below is what
 * the components expect, so swapping in API responses needs no JSX changes.
 */

export const greeting = {
  emoji: '👋',
  subtitle: "Keep going! You're doing great.",
}

export const currentCourse = {
  label: 'Current Course',
  title: 'Full Stack Development',
  meta: 'Batch FS-01 | Teacher: Amit Sharma',
  icon: 'monitor',
}

export const stats = [
  {
    key: 'attendance',
    label: 'Attendance',
    value: '92%',
    hint: '↑ 2% from last month',
    hintTone: 'success',
    icon: 'check-circle',
    tone: 'blue',
  },
  {
    key: 'classes',
    label: 'Total Classes',
    value: '24',
    hint: 'This Month',
    icon: 'calendar',
    tone: 'indigo',
  },
  {
    key: 'assignments',
    label: 'Pending Assignments',
    value: '3',
    hint: '2 due this week',
    icon: 'clipboard',
    tone: 'amber',
  },
  {
    key: 'marks',
    label: 'Average Marks',
    value: '78%',
    hint: '↑ 5% from last month',
    hintTone: 'success',
    icon: 'trend-up',
    tone: 'green',
  },
]

export const upcomingClasses = [
  { id: 1, initials: 'JS', tone: 'amber', title: 'JavaScript', time: '10:00 - 11:00' },
  { id: 2, initials: 'RE', tone: 'blue', title: 'React', time: '11:15 - 12:15' },
  { id: 3, initials: 'SQ', tone: 'green', title: 'SQL', time: '02:00 - 03:00' },
  { id: 4, initials: 'JV', tone: 'red', title: 'Java', time: '04:00 - 05:00' },
]

export const pendingAssignments = [
  { id: 1, title: 'React Project', due: 'Due 28 Sep', tone: 'blue', icon: 'clipboard' },
  { id: 2, title: 'JavaScript Exercises', due: 'Due 25 Sep', tone: 'blue', icon: 'clipboard' },
  { id: 3, title: 'SQL Assignment', due: 'Due 30 Sep', tone: 'blue', icon: 'clipboard' },
]

export const weeklyTimetable = [
  { id: 1, day: 'Mon', title: 'JavaScript', time: '10:00 AM', status: 'completed' },
  { id: 2, day: 'Tue', title: 'React', time: '11:15 AM', status: 'completed' },
  { id: 3, day: 'Wed', title: 'SQL', time: '02:00 PM', status: 'current' },
  { id: 4, day: 'Thu', title: 'Java', time: '04:00 PM', status: 'upcoming' },
  { id: 5, day: 'Fri', title: 'React Lab', time: '12:00 PM', status: 'upcoming' },
]

export const announcements = [
  { id: 1, title: 'Exam schedule published', time: '2 hours ago', tone: 'blue' },
  { id: 2, title: 'Holiday notice: 2 October', time: 'Yesterday', tone: 'indigo' },
  { id: 3, title: 'React workshop registrations open', time: '24 Sep', tone: 'blue' },
]

export const quickLinks = [
  { to: '/student/study-material', label: 'Study Material', icon: 'material' },
  { to: '/student/study-material', label: 'Notes', icon: 'book' },
  { to: '/student/fees', label: 'Pay Fees', icon: 'fees' },
  { to: '/student/announcements', label: 'Contact Teacher', icon: 'message' },
]