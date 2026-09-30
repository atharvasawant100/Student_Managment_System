import { Navigate, Route, Routes } from 'react-router-dom'
import StudentLayout from '../layouts/StudentLayout.jsx'

import Dashboard from '../pages/student/Dashboard/index.jsx'
import Timetable from '../pages/student/Timetable/index.jsx'
import Attendance from '../pages/student/Attendance/index.jsx'
import Assignments from '../pages/student/Assignments/index.jsx'
import Exams from '../pages/student/Exams/index.jsx'
import Announcements from '../pages/student/Announcements/index.jsx'
import StudyMaterial from '../pages/student/StudyMaterial/index.jsx'
import Fees from '../pages/student/Fees/index.jsx'
import Receipts from '../pages/student/Receipts/index.jsx'
import Profile from '../pages/student/Profile/index.jsx'
import Settings from '../pages/student/Settings/index.jsx'

import NotFound from '../pages/common/NotFound/index.jsx'

/**
 * Student portal route tree - mounted at /student/*.
 *
 * Every page renders inside <StudentLayout /> through <Outlet />, so the
 * sidebar and topbar persist across navigation.
 * Keep this list in sync with `studentNavItems` in src/config/navigation.js.
 */
export default function StudentRoutes() {
  return (
    <Routes>
      <Route element={<StudentLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="exams" element={<Exams />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="study-material" element={<StudyMaterial />} />
        <Route path="fees" element={<Fees />} />
        <Route path="receipts" element={<Receipts />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

        <Route
          path="*"
          element={
            <NotFound
              title="Student page not found"
              description="This student module does not exist."
              backTo="/student/dashboard"
              backLabel="Back to student dashboard"
            />
          }
        />
      </Route>
    </Routes>
  )
}