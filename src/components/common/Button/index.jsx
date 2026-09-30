import cn from '../../../utils/cn.js'
import './Button.css'

/**
 * The only button in the app. Both portals use it, so new actions never
 * introduce a second implementation.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      className={cn(
        'button',
        `button--${variant}`,
        size !== 'md' && `button--${size}`,
        fullWidth && 'button--full',
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading && <span className="button__spinner" />}
      {children}
    </button>
  )
}