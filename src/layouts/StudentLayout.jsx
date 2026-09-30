import { Outlet } from 'react-router-dom'
import PortalShell from './PortalShell.jsx'
import RoleGuard from '../routes/RoleGuard.jsx'
import StudentSidebar from '../components/student/StudentSidebar.jsx'
import StudentHeader from '../components/student/StudentHeader.jsx'
import { PORTALS, ROLES } from '../utils/constants.js'

/**
 * Main layout of the Student Portal (/student/*).
 *
 *   StudentLayout
 *   ├── StudentSidebar   (left column, all student links)
 *   └── main area
 *       ├── StudentHeader (page title + notifications + student profile)
 *       └── <Outlet />    (module page content)
 *
 * Contains navigation and chrome only - no module specific UI.
 */
export default function StudentLayout() {
  return (
    <RoleGuard role={ROLES.STUDENT}>
      <PortalShell
        portalLabel={PORTALS[ROLES.STUDENT].label}
        sidebar={<StudentSidebar />}
        header={<StudentHeader />}
      >
        <Outlet />
      </PortalShell>
    </RoleGuard>
  )
}