/**
 * Date helpers shared by layouts and pages.
 */

const LONG_DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

/**
 * "Friday, 25 September 2026"
 * Used as the subtitle of the dashboard header.
 */
export function formatLongDate(date = new Date()) {
  return LONG_DATE_FORMATTER.format(date)
}

/**
 * Time of day part used by the dashboard greeting.
 */
export function getGreeting(date = new Date()) {
  const hour = date.getHours()

  if (hour < 12) return 'Good Morning'
  if (hour < 17) return 'Good Afternoon'
  return 'Good Evening'
}

export default formatLongDate