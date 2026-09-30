import { Link } from 'react-router-dom'

import Card from '../../../components/common/Card/index.jsx'
import GreetingBanner from '../../../components/common/GreetingBanner/index.jsx'
import Icon from '../../../components/common/Icon/index.jsx'
import IconTile from '../../../components/common/IconTile/index.jsx'
import ListRow from '../../../components/common/ListRow/index.jsx'
import QuickLinks from '../../../components/common/QuickLinks/index.jsx'
import StatCard from '../../../components/common/StatCard/index.jsx'
import StatusPill from '../../../components/common/StatusPill/index.jsx'
import { useAuth } from '../../../hooks/useAuth.js'
import { getGreeting } from '../../../utils/date.js'

import {
  announcements,
  currentCourse,
  greeting,
  pendingAssignments,
  quickLinks,
  stats,
  upcomingClasses,
  weeklyTimetable,
} from './dashboardData.js'
import './Dashboard.css'

const TIMETABLE_TONES = {
  completed: { tone: 'success', label: 'Completed' },
  current: { tone: 'info', label: 'Current' },
  upcoming: { tone: 'warning', label: 'Upcoming' },
}

function ViewAll({ to }) {
  return (
    <Link className="card__action-link" to={to}>
      View all
    </Link>
  )
}

/**
 * Student dashboard - rendered inside <StudentLayout /> through <Outlet />.
 * Data currently comes from ./dashboardData.js (mock), swap for the API later.
 */
export default function Dashboard() {
  const { user } = useAuth()
  const firstName = user?.name?.split(' ')[0] ?? 'there'

  return (
    <div className="page dashboard">
      <GreetingBanner
        title={`${getGreeting()}, ${firstName} ${greeting.emoji}`}
        subtitle={greeting.subtitle}
        course={currentCourse}
      />

      <section className="dashboard__stats">
        {stats.map(({ key, ...stat }) => (
          <StatCard key={key} {...stat} />
        ))}
      </section>

      <section className="dashboard__grid dashboard__grid--three">
        <Card compact title="Upcoming Classes" actions={<ViewAll to="/student/timetable" />}>
          {upcomingClasses.map((item) => (
            <ListRow
              key={item.id}
              leading={<IconTile initials={item.initials} tone={item.tone} size="sm" />}
              title={item.title}
              subtitle={item.time}
              trailing={<Icon name="chevron-right" size={15} className="list-row__chevron" />}
            />
          ))}
        </Card>

        <Card compact title="Pending Assignments" actions={<ViewAll to="/student/assignments" />}>
          {pendingAssignments.map((item) => (
            <ListRow
              key={item.id}
              leading={<IconTile icon={item.icon} tone={item.tone} size="sm" />}
              title={item.title}
              subtitle={<span className="dashboard__due">{item.due}</span>}
            />
          ))}
        </Card>

        <Card compact title="Weekly Timetable" actions={<ViewAll to="/student/timetable" />}>
          {weeklyTimetable.map((item) => {
            const status = TIMETABLE_TONES[item.status]

            return (
              <ListRow
                key={item.id}
                title={
                  <span className="dashboard__slot">
                    <span className="dashboard__slot-day">{item.day}</span>
                    <span>
                      <span className="dashboard__slot-title">{item.title}</span>
                      <span className="dashboard__slot-time">{item.time}</span>
                    </span>
                  </span>
                }
                trailing={<StatusPill tone={status.tone}>{status.label}</StatusPill>}
              />
            )
          })}
        </Card>
      </section>

      <section className="dashboard__grid dashboard__grid--two">
        <Card compact title="Recent Announcements" actions={<ViewAll to="/student/announcements" />}>
          {announcements.map((item) => (
            <ListRow
              key={item.id}
              leading={<IconTile icon="announcement" tone={item.tone} size="sm" />}
              title={item.title}
              subtitle={item.time}
            />
          ))}
        </Card>

        <Card compact title="Quick Links">
          <QuickLinks items={quickLinks} columns={3} />
        </Card>
      </section>
    </div>
  )
}