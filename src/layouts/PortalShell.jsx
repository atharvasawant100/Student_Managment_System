import { cloneElement, isValidElement } from 'react'
import Button from '../components/common/Button/index.jsx'
import Icon from '../components/common/Icon/index.jsx'
import { useToggle } from '../hooks/useToggle.js'
import { useAuth } from '../hooks/useAuth.js'
import cn from '../utils/cn.js'
import './PortalShell.css'

/**
 * Shared application chrome for both portals: sidebar column, topbar and the
 * scrollable content region.
 *
 * It contains no student/teacher specific logic - `StudentLayout` and
 * `TeacherLayout` pass their own sidebar in and render their `<Outlet />` as
 * children, so the shell persists while the page content changes.
 */
export default function PortalShell({ portalLabel, sidebar, children }) {
  const [sidebarOpen, { toggle: toggleSidebar, setFalse: closeSidebar }] = useToggle(false)
  const { user, signOut } = useAuth()

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

          <p className="portal-topbar__label">{portalLabel}</p>

          <div className="portal-topbar__user">
            <span className="portal-topbar__name">{user?.name ?? 'Guest'}</span>
            {user && (
              <Button size="sm" variant="ghost" onClick={signOut}>
                Sign out
              </Button>
            )}
          </div>
        </header>

        <main className="portal-main">{children}</main>
      </div>
    </div>
  )
}