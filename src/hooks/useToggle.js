import { useCallback, useState } from 'react'

/**
 * Boolean state helper with stable togglers.
 * Used by the portal shell for the collapsible mobile sidebar.
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => setValue((current) => !current), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return [value, { toggle, setTrue, setFalse, set: setValue }]
}

export default useToggle