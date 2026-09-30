import { Route, Routes } from 'react-router-dom'

import PortalSelection from './pages/common/PortalSelection/index.jsx'
import NotFound from './pages/common/NotFound/index.jsx'
import ViteStarter from './pages/common/ViteStarter/index.jsx'
import StudentRoutes from './routes/StudentRoutes.jsx'
import TeacherRoutes from './routes/TeacherRoutes.jsx'

/**
 * Root router.
 *
 * The two portals are mounted as isolated sub-trees so a change inside
 * /student/* can never affect /teacher/* (and vice versa):
 *
 *   /                 -> portal chooser
 *   /student/*        -> StudentRoutes  -> StudentLayout  -> StudentSidebar
 *   /teacher/*        -> TeacherRoutes  -> TeacherLayout  -> TeacherSidebar
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PortalSelection />} />

      <Route path="/student/*" element={<StudentRoutes />} />
      <Route path="/teacher/*" element={<TeacherRoutes />} />

      {/* Temporary: original Vite starter screen, preserved during restructuring. */}
      <Route path="/vite-starter" element={<ViteStarter />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}