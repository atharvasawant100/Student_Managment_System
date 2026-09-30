import { Outlet } from 'react-router-dom'
import PortalShell from './PortalShell.jsx'
import RoleGuard from '../routes/RoleGuard.jsx'
import TeacherSidebar from '../components/teacher/TeacherSidebar.jsx'
import { PORTALS, ROLES } from '../utils/constants.js'

/**
 * Layout for the whole /teacher/* portal.
 *
 * Completely independent from StudentLayout: different sidebar, different
 * navigation config, different role guard.
 */
export default function TeacherLayout() {
  return (
    <RoleGuard role={ROLES.TEACHER}>
      <PortalShell portalLabel={PORTALS[ROLES.TEACHER].label} sidebar={<TeacherSidebar />}>
        <Outlet />
      </PortalShell>
    </RoleGuard>
  )
}