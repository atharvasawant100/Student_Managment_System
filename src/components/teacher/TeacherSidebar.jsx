import Sidebar from '../common/Sidebar/index.jsx'
import { teacherNavItems } from '../../config/navigation.js'
import { PORTALS, ROLES } from '../../utils/constants.js'
import { useAuth } from '../../hooks/useAuth.js'

/**
 * Teacher portal navigation.
 * Only ever rendered inside <TeacherLayout /> at /teacher/*.
 */
export default function TeacherSidebar({ onNavigate }) {
  const { user } = useAuth()

  return (
    <Sidebar
      navItems={teacherNavItems}
      portalLabel={PORTALS[ROLES.TEACHER].label}
      user={user}
      onNavigate={onNavigate}
    />
  )
}