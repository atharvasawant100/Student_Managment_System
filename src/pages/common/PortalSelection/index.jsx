import { Link } from 'react-router-dom'
import Card from '../../../components/common/Card/index.jsx'
import Icon from '../../../components/common/Icon/index.jsx'
import { APP_NAME, ROLES } from '../../../utils/constants.js'
import { useAuth } from '../../../hooks/useAuth.js'
import './PortalSelection.css'

/**
 * Entry screen of the application.
 *
 * A real login page will replace this later (it will read the role from the
 * backend and redirect to the matching portal). For now it simply starts a
 * temporary session for one of the two portals.
 */
const PORTALS = [
  {
    role: ROLES.STUDENT,
    title: 'Student Portal',
    description: 'Timetable, attendance, assignments, exams, study material and fees.',
    icon: 'profile',
    to: '/student/dashboard',
  },
  {
    role: ROLES.TEACHER,
    title: 'Teacher Portal',
    description: 'My classes, students, attendance marking, assignments, exams and material.',
    icon: 'users',
    to: '/teacher/dashboard',
  },
]

export default function PortalSelection() {
  const { user, signInAs, signOut } = useAuth()

  return (
    <div className="portal-selection">
      <header className="portal-selection__header">
        <h1 className="portal-selection__title">{APP_NAME}</h1>
        <p className="portal-selection__subtitle">
          Choose a portal to continue. Students and teachers use completely separate areas of the
          application.
        </p>
      </header>

      <div className="portal-selection__grid">
        {PORTALS.map((portal) => (
          <Link
            key={portal.role}
            to={portal.to}
            onClick={() => signInAs(portal.role)}
            className="portal-selection__link"
          >
            <Card className="portal-selection__card">
              <span className="portal-selection__icon">
                <Icon name={portal.icon} size={22} />
              </span>
              <h2 className="portal-selection__portal-title">{portal.title}</h2>
              <p className="portal-selection__portal-text">{portal.description}</p>
              <span className="portal-selection__cta">Open {portal.title}</span>
            </Card>
          </Link>
        ))}
      </div>

      <footer className="portal-selection__footer">
        {user ? (
          <button type="button" className="portal-selection__reset" onClick={signOut}>
            Signed in as {user.name} &mdash; reset demo session
          </button>
        ) : (
          <p className="portal-selection__note">
            No login screen yet. Picking a portal creates a temporary demo session that only affects
            the sidebar label and role guard.
          </p>
        )}
      </footer>
    </div>
  )
}