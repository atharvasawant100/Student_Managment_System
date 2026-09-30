import Icon from '../Icon/index.jsx'
import cn from '../../../utils/cn.js'
import './IconTile.css'

/**
 * Small tinted rounded square used for subject initials, module icons and
 * announcement icons.
 *
 * tone:    blue | indigo | green | amber | red | slate
 * content: `icon` (name from the icon registry) or `initials` text
 */
export default function IconTile({ icon, initials, tone = 'blue', size = 'md', className }) {
  return (
    <span className={cn('icon-tile', `icon-tile--${tone}`, `icon-tile--${size}`, className)}>
      {initials || <Icon name={icon} size={size === 'sm' ? 15 : 17} />}
    </span>
  )
}