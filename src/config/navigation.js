/**
 * Navigation configuration.
 *
 * Each portal owns its own list. The sidebars render `label` / `to`, while the
 * portal headers resolve `title` + `subtitle` from the same entry through
 * `usePageMeta` - so a new module only has to be declared once.
 *
 * `label`    - sidebar text
 * `title`    - header title (optional, defaults to `label`)
 * `subtitle` - header sub-line: literal text, 'today' token or a function
 */

const studentNavItems = [
  {
    to: '/student/dashboard',
    label: 'Dashboard',
    title: 'Dashboard',
    subtitle: 'today',
    icon: 'dashboard',
    end: true,
  },
  {
    to: '/student/timetable',
    label: 'Timetable',
    title: 'Timetable',
    subtitle: 'Your weekly class schedule',
    icon: 'calendar',
  },
  {
    to: '/student/attendance',
    label: 'Attendance',
    title: 'Attendance',
    subtitle: 'Your attendance record and percentage',
    icon: 'check',
  },
  {
    to: '/student/assignments',
    label: 'Assignments',
    title: 'Assignments',
    subtitle: 'Tasks, due dates and submissions',
    icon: 'assignment',
  },
  {
    to: '/student/exams',
    label: 'Exams',
    title: 'Exams & Marks',
    subtitle: 'Schedule, syllabus and results',
    icon: 'exam',
  },
  {
    to: '/student/announcements',
    label: 'Announcements',
    title: 'Announcements',
    subtitle: 'Notices from teachers and the institute',
    icon: 'announcement',
  },
  {
    to: '/student/study-material',
    label: 'Study Material',
    title: 'Study Material',
    subtitle: 'Notes, documents and downloads',
    icon: 'material',
  },
  {
    to: '/student/fees',
    label: 'Fees',
    title: 'Fees',
    subtitle: 'Breakdown, due dates and payment status',
    icon: 'fees',
  },
  {
    to: '/student/receipts',
    label: 'Receipts',
    title: 'Receipts',
    subtitle: 'Payment history and downloads',
    icon: 'receipt',
  },
  {
    to: '/student/profile',
    label: 'Profile',
    title: 'My Profile',
    subtitle: 'Personal and academic details',
    icon: 'profile',
  },
  {
    to: '/student/settings',
    label: 'Settings',
    title: 'Settings',
    subtitle: 'Preferences and notifications',
    icon: 'settings',
  },
]

const teacherNavItems = [
  {
    to: '/teacher/dashboard',
    label: 'Dashboard',
    title: 'Dashboard',
    subtitle: 'today',
    icon: 'dashboard',
    end: true,
  },
  {
    to: '/teacher/my-classes',
    label: 'My Classes',
    title: 'My Classes',
    subtitle: 'Classes assigned to you',
    icon: 'classes',
  },
  {
    to: '/teacher/students',
    label: 'Students',
    title: 'Students',
    subtitle: 'Your students and their progress',
    icon: 'users',
  },
  {
    to: '/teacher/timetable',
    label: 'Timetable',
    title: 'Timetable',
    subtitle: 'Your weekly teaching timetable',
    icon: 'calendar',
  },
  {
    to: '/teacher/attendance',
    label: 'Attendance',
    title: 'Attendance',
    subtitle: 'Mark and review attendance',
    icon: 'check',
  },
  {
    to: '/teacher/assignments',
    label: 'Assignments',
    title: 'Assignments',
    subtitle: 'Create, review and grade work',
    icon: 'assignment',
  },
  {
    to: '/teacher/exams',
    label: 'Exams',
    title: 'Exams & Marks',
    subtitle: 'Schedule exams and publish results',
    icon: 'exam',
  },
  {
    to: '/teacher/announcements',
    label: 'Announcements',
    title: 'Announcements',
    subtitle: 'Publish notices for your classes',
    icon: 'announcement',
  },
  {
    to: '/teacher/study-material',
    label: 'Study Material',
    title: 'Study Material',
    subtitle: 'Upload and manage class material',
    icon: 'material',
  },
  {
    to: '/teacher/profile',
    label: 'Profile',
    title: 'My Profile',
    subtitle: 'Your details and institute info',
    icon: 'profile',
  },
  {
    to: '/teacher/settings',
    label: 'Settings',
    title: 'Settings',
    subtitle: 'Preferences and notifications',
    icon: 'settings',
  },
]

export { studentNavItems, teacherNavItems }

export default { studentNavItems, teacherNavItems }