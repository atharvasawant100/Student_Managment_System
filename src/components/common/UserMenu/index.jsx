import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon/index.jsx'
import { getInitials } from '../../../utils/string.js'
import cn from '../../../utils/cn.js'
import './UserMenu.css'

/**
 * Profile area of the portal header: avatar, name, role text and a small
 * dropdown. Items are passed in by the portal header so the same component
 * serves both the student and the teacher portal.
 *
 * items: [{ label, icon?, to? } | { label, icon?, onClick }]
 */
export default function UserMenu({ user, roleLabel = '', items = [] }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function handleItemClick(item) {
    setOpen(false)
    item.onClick?.()
  }

  return (
    <div className="user-menu" ref={containerRef}>
      <button
        type="button"
        className={cn('user-menu__trigger', open && 'user-menu__trigger--open')}
        onClick={() => setOpen((current) => !current)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="user-menu__avatar">
          {user?.avatarUrl ? (
            <img src={user.avatarUrl} alt="" className="user-menu__avatar-image" />
          ) : (
            getInitials(user?.name)
          )}
        </span>

        <span className="user-menu__identity">
          <span className="user-menu__name">{user?.name ?? 'Guest'}</span>
          <span className="user-menu__role">{roleLabel}</span>
        </span>

        <Icon name="chevron-down" size={16} className="user-menu__chevron" />
      </button>

      {open && (
        <div className="user-menu__dropdown" role="menu">
          {items.map((item) => {
            const content = (
              <>
                {item.icon && <Icon name={item.icon} size={16} />}
                <span>{item.label}</span>
              </>
            )

            const itemClassName = cn(
              'user-menu__item',
              item.variant === 'danger' && 'user-menu__item--danger',
            )

            return item.to ? (
              <Link
                key={item.label}
                role="menuitem"
                to={item.to}
                className={itemClassName}
                onClick={() => handleItemClick(item)}
              >
                {content}
              </Link>
            ) : (
              <button
                key={item.label}
                type="button"
                role="menuitem"
                className={itemClassName}
                onClick={() => handleItemClick(item)}
              >
                {content}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}