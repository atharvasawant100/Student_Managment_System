import Card from '../Card/index.jsx'
import PageHeader from '../PageHeader/index.jsx'
import './ModulePlaceholder.css'

/**
 * Temporary body for modules that are not built yet.
 *
 * Every page folder (student *and* teacher) renders this so navigation,
 * routing and layouts are complete and testable from day one.
 *
 * `title` / `subtitle` are optional and only needed by portals whose header
 * does not show the current page title yet (the student header does, so its
 * pages omit them to avoid a duplicated heading).
 *
 * Replace the body of a page with the real UI when the module is implemented.
 */
export default function ModulePlaceholder({ portal, title, subtitle, planned }) {
  return (
    <div className="page">
      {title && <PageHeader title={title} subtitle={subtitle} />}

      <Card compact>
        <p className="module-placeholder__badge">{portal}</p>
        <h2 className="module-placeholder__title">Not implemented yet</h2>
        <p className="module-placeholder__text">
          This module is wired into the portal (route + layout + sidebar) but has no business
          logic yet.
          {planned && <> Planned scope: {planned}.</>}
        </p>
      </Card>
    </div>
  )
}