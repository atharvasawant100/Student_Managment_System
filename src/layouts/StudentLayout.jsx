import { Outlet } from 'react-router-dom'
import PortalShell from './PortalShell.jsx'
import RoleGuard from '../routes/RoleGuard.jsx'
import StudentSidebar from '../components/student/StudentSidebar.jsx'
import { PORTALS, ROLES } from '../utils/constants.js'

/**
 * Layout for the whole /student/* portal.
 *
 * The sidebar stays mounted while <Outlet /> swaps the page content, so every
 * student page renders inside the same shell without repeating markup.
 */
export default function StudentLayout() {
  return (
    <RoleGuard role={ROLES.STUDENT}>
      <PortalShell portalLabel={PORTALS[ROLES.STUDENT].label} sidebar={<StudentSidebar />}>
        <Outlet />
      </PortalShell>
    </RoleGuard>
  )
}