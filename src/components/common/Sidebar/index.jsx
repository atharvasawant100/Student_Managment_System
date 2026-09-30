import { NavLink } from 'react-router-dom'
import Icon from '../Icon/index.jsx'
import { APP_NAME } from '../../../utils/constants.js'
import { getInitials } from '../../../utils/string.js'
import cn from '../../../utils/cn.js'
import './Sidebar.css'

/**
 * Shared sidebar chrome (brand, nav list, active state).
 *
 * `StudentSidebar` and `TeacherSidebar` both delegate here and only supply
 * their own navigation items, so the look and behaviour stay identical while
 * the two portals remain fully independent.
 */
export default function Sidebar({ navItems, portalLabel, user, onNavigate }) {
  return (
    <div className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">{APP_NAME.charAt(0)}</span>
        <div>
          <p className="sidebar__brand-name">{APP_NAME}</p>
          <p className="sidebar__brand-portal">{portalLabel}</p>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label={`${portalLabel} navigation`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) => cn('sidebar__link', isActive && 'sidebar__link--active')}
          >
            <Icon name={item.icon} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__avatar" aria-hidden="true">
          {getInitials(user?.name ?? portalLabel)}
        </span>
        <div className="sidebar__footer-text">
          <p className="sidebar__footer-name">{user?.name ?? 'Not signed in'}</p>
          <p className="sidebar__footer-role">{portalLabel}</p>
        </div>
      </div>
    </div>
  )
}