import Card from '../Card/index.jsx'
import IconTile from '../IconTile/index.jsx'
import './StatCard.css'

/**
 * KPI card: label + icon on top, big value with an optional delta/hint below.
 * tone:    icon tint (see IconTile)
 * hintTone: success | neutral | warning | danger
 */
export default function StatCard({ label, value, hint, hintTone = 'neutral', icon, tone = 'blue' }) {
  return (
    <Card className="stat-card" compact>
      <div className="stat-card__head">
        <p className="stat-card__label">{label}</p>
        <IconTile icon={icon} tone={tone} size="sm" />
      </div>

      <div className="stat-card__figures">
        <span className="stat-card__value">{value}</span>
        {hint && <span className={`stat-card__hint stat-card__hint--${hintTone}`}>{hint}</span>}
      </div>
    </Card>
  )
}