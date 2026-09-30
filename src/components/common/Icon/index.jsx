import { ICON_PATHS } from '../../../config/icons.js'

/**
 * Shared icon renderer for every portal.
 *
 * Path data lives in `src/config/icons.js`; new icons are registered there and
 * can then be used anywhere without adding a dependency.
 */
export default function Icon({ name, size = 18, className, ...rest }) {
  const path = ICON_PATHS[name]

  if (!path) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <path d={path} />
    </svg>
  )
}