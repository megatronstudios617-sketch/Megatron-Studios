import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { studio } from '../data.js'

const links = [
  { to: '/', label: 'الرئيسية' },
  { to: '/gallery', label: 'معرض الأعمال' },
  { to: '/packages', label: 'الباقات' },
  { to: '/contact', label: 'تواصل معنا' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo__mark">◉</span> {studio.name}
        </Link>

        <button
          className="navbar__toggle"
          aria-label="القائمة"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={close}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn btn--small" onClick={close}>
            احجز الآن
          </Link>
        </nav>
      </div>
    </header>
  )
}
