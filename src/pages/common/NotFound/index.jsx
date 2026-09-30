import { Link } from 'react-router-dom'
import './NotFound.css'

/**
 * Shared 404 screen. Rendered both inside a portal route tree (keeps the
 * sidebar) and at the root of the app.
 */
export default function NotFound({
  title = 'Page not found',
  description = 'The page you are looking for does not exist or has been moved.',
  backTo = '/',
  backLabel = 'Back to portal chooser',
}) {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">{title}</h1>
      <p className="not-found__text">{description}</p>
      <Link className="not-found__link" to={backTo}>
        {backLabel}
      </Link>
    </div>
  )
}