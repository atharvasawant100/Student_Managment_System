import Icon from '../Icon/index.jsx'
import cn from '../../../utils/cn.js'
import './NotificationBell.css'

/**
 * Notification trigger for the portal header.
 *
 * variant='dot'   -> small red dot (reference design)
 * variant='count' -> numeric badge
 *
 * The count is a placeholder until the notifications API exists.
 */
export default function NotificationBell({
  count = 0,
  variant = 'dot',
  label = 'Notifications',
  onClick,
  className,
}) {
  const hasUnread = count > 0

  return (
    <button
      type="button"
      className={cn('notification-bell', className)}
      onClick={onClick}
      aria-label={hasUnread ? `${label} (${count} unread)` : label}
    >
      <Icon name="bell" size={18} />
      {hasUnread && (
        <span
          className={cn(
            'notification-bell__indicator',
            variant === 'count' && 'notification-bell__indicator--count',
          )}
        >
          {variant === 'count' && (count > 9 ? '9+' : count)}
        </span>
      )}
    </button>
  )
}