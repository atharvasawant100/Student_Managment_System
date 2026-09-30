/**
 * Tiny classnames helper.
 * Joins truthy values so components can build conditional class lists
 * without pulling in an external dependency.
 *
 * cn('btn', isActive && 'btn--active', { 'btn--wide': wide })
 */
export function cn(...values) {
  return values
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
}

export default cn