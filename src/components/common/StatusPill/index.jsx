import cn from '../../../utils/cn.js'
import './StatusPill.css'

/**
 * Small status label (Completed / Current / Upcoming / Due ...).
 * tone: success | info | warning | danger | neutral
 */
export default function StatusPill({ tone = 'neutral', children, className }) {
  return <span className={cn('status-pill', `status-pill--${tone}`, className)}>{children}</span>
}