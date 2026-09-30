import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

/**
 * Keeps the two portals separate.
 *
 * A signed-in student cannot render teacher routes (and vice versa) - they are
 * sent back to the portal chooser. When nobody is signed in yet (no login
 * screen / backend), both portals stay open so the layouts can be developed
 * independently.
 */
export default function RoleGuard({ role, children }) {
  const { role: activeRole } = useAuth()
  const location = useLocation()

  if (activeRole && activeRole !== role) {
    return <Navigate to="/" replace state={{ blockedPath: location.pathname }} />
  }

  return children
}