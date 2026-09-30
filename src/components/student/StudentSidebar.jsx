import Sidebar from '../common/Sidebar/index.jsx'
import { studentNavItems } from '../../config/navigation.js'
import { PORTALS, ROLES } from '../../utils/constants.js'
import { useAuth } from '../../hooks/useAuth.js'

/**
 * Student portal navigation.
 * Only ever rendered inside <StudentLayout /> at /student/*.
 */
export default function StudentSidebar({ onNavigate }) {
  const { user } = useAuth()

  return (
    <Sidebar
      navItems={studentNavItems}
      portalLabel={PORTALS[ROLES.STUDENT].label}
      user={user}
      onNavigate={onNavigate}
    />
  )
}