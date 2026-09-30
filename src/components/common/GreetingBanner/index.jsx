import Icon from '../Icon/index.jsx'
import './GreetingBanner.css'

/**
 * Dark hero banner of a portal dashboard: greeting on the left, the current
 * course / context card on the right.
 */
export default function GreetingBanner({ title, subtitle, course }) {
  return (
    <section className="greeting-banner">
      <div className="greeting-banner__text">
        <h2 className="greeting-banner__title">{title}</h2>
        {subtitle && <p className="greeting-banner__subtitle">{subtitle}</p>}
      </div>

      {course && (
        <div className="greeting-banner__course">
          <div className="greeting-banner__course-text">
            <p className="greeting-banner__course-label">{course.label}</p>
            <p className="greeting-banner__course-title">{course.title}</p>
            {course.meta && <p className="greeting-banner__course-meta">{course.meta}</p>}
          </div>

          <span className="greeting-banner__course-icon">
            <Icon name={course.icon ?? 'monitor'} size={22} />
          </span>
        </div>
      )}
    </section>
  )
}