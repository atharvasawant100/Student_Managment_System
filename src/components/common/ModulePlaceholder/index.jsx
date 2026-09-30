import Card from '../Card/index.jsx'
import PageHeader from '../PageHeader/index.jsx'
import './ModulePlaceholder.css'

/**
 * Temporary body for modules that are not built yet.
 *
 * Every page folder (student *and* teacher) renders this so navigation,
 * routing and layouts are complete and testable from day one. Replace the
 * body of a page with the real UI when the module is implemented.
 */
export default function ModulePlaceholder({ title, subtitle, portal, planned }) {
  return (
    <div className="page">
      <PageHeader title={title} subtitle={subtitle} />

      <Card>
        <p className="module-placeholder__badge">{portal}</p>
        <h3 className="module-placeholder__title">Not implemented yet</h3>
        <p className="module-placeholder__text">
          This module is wired into the portal (route + layout + sidebar) but has no business
          logic yet.
          {planned && <> Planned scope: {planned}.</>}
        </p>
      </Card>
    </div>
  )
}