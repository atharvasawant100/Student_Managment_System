import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { formatLongDate } from '../utils/date.js'

/**
 * Resolves the current page title / subtitle from a portal's navigation config,
 * so headers never hard-code route names.
 *
 * Each nav item may define:
 *   title   - header title (defaults to `label`)
 *   subtitle- string, a token ('today') or a function returning a string
 */
const SUBTITLE_TOKENS = {
  today: () => formatLongDate(new Date()),
}

function resolveSubtitle(subtitle) {
  if (!subtitle) return null
  if (typeof subtitle === 'function') return subtitle()
  return SUBTITLE_TOKENS[subtitle]?.() ?? subtitle
}

export function usePageMeta(navItems) {
  const { pathname } = useLocation()

  return useMemo(() => {
    // Longest match first so `/student/study-material` never resolves to `/student`.
    const match = [...navItems]
      .sort((a, b) => b.to.length - a.to.length)
      .find((item) => pathname === item.to || pathname.startsWith(`${item.to}/`))

    if (!match) {
      return { title: 'Page not found', subtitle: null }
    }

    return {
      title: match.title ?? match.label,
      subtitle: resolveSubtitle(match.subtitle),
    }
  }, [pathname, navItems])
}

export default usePageMeta