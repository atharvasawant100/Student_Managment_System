import { Link } from 'react-router-dom'
import Icon from '../Icon/index.jsx'
import './QuickLinks.css'

/**
 * Grid of shortcut tiles (study material, fees, contact teacher, ...).
 * items: [{ to, label, icon }]
 */
export default function QuickLinks({ items = [], columns = 3 }) {
  return (
    <div className="quick-links" style={{ '--quick-link-columns': columns }}>
      {items.map((item) => (
        <Link key={item.label} className="quick-link" to={item.to}>
          <span className="quick-link__icon">
            <Icon name={item.icon} size={17} />
          </span>
          <span className="quick-link__label">{item.label}</span>
        </Link>
      ))}
    </div>
  )
}