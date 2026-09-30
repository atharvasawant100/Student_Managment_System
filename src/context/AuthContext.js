import { createContext } from 'react'

/**
 * Context object only.
 *
 * It lives in its own file (instead of next to the provider component) so
 * `src/hooks/useAuth.js` can consume it without breaking React Fast Refresh.
 *
 * Shape:
 *   { user, role, isAuthenticated, storageKeys, signInAs, signOut }
 */
export const AuthContext = createContext(null)

export default AuthContext