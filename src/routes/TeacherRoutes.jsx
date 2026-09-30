import { Navigate, Route, Routes } from 'react-router-dom'
import TeacherLayout from '../layouts/TeacherLayout.jsx'

import Dashboard from '../pages/teacher/Dashboard/index.jsx'
import MyClasses from '../pages/teacher/MyClasses/index.jsx'
import Students from '../pages/teacher/Students/index.jsx'
import Timetable from '../pages/teacher/Timetable/index.jsx'
import Attendance from '../pages/teacher/Attendance/index.jsx'
import Assignments from '../pages/teacher/Assignments/index.jsx'
import Exams from '../pages/teacher/Exams/index.jsx'
import Announcements from '../pages/teacher/Announcements/index.jsx'
import StudyMaterial from '../pages/teacher/StudyMaterial/index.jsx'
import Profile from '../pages/teacher/Profile/index.jsx'
import Settings from '../pages/teacher/Settings/index.jsx'

import NotFound from '../pages/common/NotFound/index.jsx'

/**
 * Teacher portal route tree - mounted at /teacher/*.
 *
 * Every page renders inside <TeacherLayout /> through <Outlet />.
 * Keep this list in sync with `teacherNavItems` in src/config/navigation.js.
 */
export default function TeacherRoutes() {
  return (
    <Routes>
      <Route element={<TeacherLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-classes" element={<MyClasses />} />
        <Route path="students" element={<Students />} />
        <Route path="timetable" element={<Timetable />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="exams" element={<Exams />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="study-material" element={<StudyMaterial />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

        <Route
          path="*"
          element={
            <NotFound
              title="Teacher page not found"
              description="This teacher module does not exist."
              backTo="/teacher/dashboard"
              backLabel="Back to teacher dashboard"
            />
          }
        />
      </Route>
    </Routes>
  )
}