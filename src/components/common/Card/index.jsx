import cn from '../../../utils/cn.js'
import './Card.css'

/**
 * Surface container used by every module (stats, tables, forms, ...).
 */
export default function Card({ title, description, actions, footer, padded = true, className, children }) {
  return (
    <section className={cn('card', padded && 'card--padded', className)}>
      {(title || actions) && (
        <header className="card__header">
          <div>
            {title && <h2 className="card__title">{title}</h2>}
            {description && <p className="card__description">{description}</p>}
          </div>
          {actions && <div className="card__actions">{actions}</div>}
        </header>
      )}

      <div className="card__body">{children}</div>

      {footer && <footer className="card__footer">{footer}</footer>}
    </section>
  )
}