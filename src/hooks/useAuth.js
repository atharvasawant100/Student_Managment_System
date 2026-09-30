import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext.js'

/**
 * Access the current authentication context.
 * Kept in its own file so AuthProvider stays a pure component module.
 */
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside an <AuthProvider>.')
  }

  return context
}

export default useAuth