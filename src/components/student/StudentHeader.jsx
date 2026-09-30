import NotificationBell from '../common/NotificationBell/index.jsx'
import UserMenu from '../common/UserMenu/index.jsx'
import { studentNavItems } from '../../config/navigation.js'
import { NOTIFICATIONS, PORTALS, ROLES } from '../../utils/constants.js'
import { useAuth } from '../../hooks/useAuth.js'
import { usePageMeta } from '../../hooks/usePageMeta.js'
import './StudentHeader.css'

/**
 * Top header of the Student Portal.
 *
 * Layout only: page title (resolved from the current route), notifications and
 * the signed-in student area. No module specific UI lives here.
 */
export default function StudentHeader() {
  const { user, signOut } = useAuth()
  const { title, subtitle } = usePageMeta(studentNavItems)

  const menuItems = [
    { label: 'My Profile', icon: 'profile', to: '/student/profile' },
    { label: 'Settings', icon: 'settings', to: '/student/settings' },
    { label: 'Sign out', icon: 'logout', variant: 'danger', onClick: signOut },
  ]

  return (
    <div className="student-header">
      <div className="student-header__heading">
        <h1 className="student-header__title">{title}</h1>
        {subtitle && <p className="student-header__subtitle">{subtitle}</p>}
      </div>

      <div className="student-header__actions">
        <NotificationBell count={NOTIFICATIONS.unreadCount} />
        <UserMenu user={user} roleLabel={PORTALS[ROLES.STUDENT].roleLabel} items={menuItems} />
      </div>
    </div>
  )
}