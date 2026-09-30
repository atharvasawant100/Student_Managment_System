/**
 * String helpers shared by layouts and components.
 */

/**
 * Initials for avatars: "Atharva Sawant" -> "AS", "Ada" -> "A".
 */
export function getInitials(name) {
  if (!name) return '?'

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

export default getInitials