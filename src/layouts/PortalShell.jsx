import { cloneElement, isValidElement } from 'react'
import Button from '../components/common/Button/index.jsx'
import Icon from '../components/common/Icon/index.jsx'
import { useToggle } from '../hooks/useToggle.js'
import { useAuth } from '../hooks/useAuth.js'
import cn from '../utils/cn.js'
import './PortalShell.css'

/**
 * Default header used by a portal that does not supply its own yet.
 * (The teacher portal still renders this until <TeacherHeader /> exists.)
 */
function PortalTopbar({ portalLabel }) {
  const { user, signOut } = useAuth()

  return (
    <>
      <p className="portal-topbar__label">{portalLabel}</p>

      <div className="portal-topbar__user">
        <span className="portal-topbar__name">{user?.name ?? 'Guest'}</span>
        {user && (
          <Button size="sm" variant="ghost" onClick={signOut}>
            Sign out
          </Button>
        )}
      </div>
    </>
  )
}

/**
 * Shared application chrome for both portals: sidebar column, top header and
 * the content region that renders `<Outlet />`.
 *
 * It contains no student/teacher specific logic - `StudentLayout` and
 * `TeacherLayout` pass their own sidebar and header in, so the shell persists
 * while only the page content changes.
 */
export default function PortalShell({ portalLabel, sidebar, header, children }) {
  const [sidebarOpen, { toggle: toggleSidebar, setFalse: closeSidebar }] = useToggle(false)

  // The portal-specific sidebar receives the close handler automatically, so
  // tapping a link collapses the off-canvas menu on small screens.
  const sidebarElement = isValidElement(sidebar)
    ? cloneElement(sidebar, { onNavigate: closeSidebar })
    : sidebar

  return (
    <div className={cn('portal-shell', sidebarOpen && 'portal-shell--sidebar-open')}>
      <aside className="portal-sidebar">{sidebarElement}</aside>

      {sidebarOpen && (
        <button
          type="button"
          className="portal-backdrop"
          aria-label="Close navigation"
          onClick={closeSidebar}
        />
      )}

      <div className="portal-content">
        <header className="portal-topbar">
          <button
            type="button"
            className="portal-topbar__menu"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
            aria-expanded={sidebarOpen}
          >
            <Icon name={sidebarOpen ? 'close' : 'menu'} size={20} />
          </button>

          {header ?? <PortalTopbar portalLabel={portalLabel} />}
        </header>

        <main className="portal-main">{children}</main>
      </div>
    </div>
  )
}