import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import { ROLES, STORAGE_KEYS } from '../utils/constants.js'

/**
 * Temporary authentication provider.
 *
 * There is no backend yet, so the "session" is simulated in memory. This is the
 * single place to swap in real tokens / a session endpoint later - both portals
 * read their role from here.
 *
 * While `role` is `null` nobody is signed in and both portals stay open, which
 * keeps the two route trees testable before a login screen exists.
 */
export function AuthProvider({ children, initialUser = null }) {
  const [user, setUser] = useState(initialUser)

  const signInAs = useCallback((role) => {
    if (!role) {
      setUser(null)
      return null
    }

    const nextUser = {
      id: `dev-${role}`,
      name: role === ROLES.TEACHER ? 'Demo Teacher' : 'Demo Student',
      role,
    }

    setUser(nextUser)
    return nextUser
  }, [])

  const signOut = useCallback(() => setUser(null), [])

  const value = useMemo(
    () => ({
      user,
      role: user?.role ?? null,
      isAuthenticated: Boolean(user),
      storageKeys: STORAGE_KEYS,
      signInAs,
      signOut,
    }),
    [user, signInAs, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider