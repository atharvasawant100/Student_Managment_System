import cn from '../../../utils/cn.js'
import './ListRow.css'

/**
 * Row used inside dashboard panels: leading tile, bold title, small subtitle and
 * an optional trailing element (chevron, status pill, ...).
 */
export default function ListRow({ leading, title, subtitle, trailing, divider = true, className }) {
  return (
    <div className={cn('list-row', divider && 'list-row--divided', className)}>
      {leading}

      <div className="list-row__text">
        <p className="list-row__title">{title}</p>
        {subtitle && <p className="list-row__subtitle">{subtitle}</p>}
      </div>

      {trailing && <div className="list-row__trailing">{trailing}</div>}
    </div>
  )
}