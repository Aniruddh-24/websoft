import { useState } from 'react'

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'WHO WE ARE', href: '#why-us' },
  { label: 'SERVICES', href: '#services' },
  { label: 'WORK PORTFOLIO', href: '#portfolio' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT US', href: '#contact' },
]

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" className="navbar-logo">
          <div className="logo-text-wrap">
            <span className="logo-spg">
              <span style={{ color: '#1a2472' }}>S</span>
              <span style={{ color: '#1565c0' }}>P</span>
              <span style={{ color: '#f48c06' }}>G</span>
            </span>
            <span className="logo-techsoft">techsoft</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="navbar-nav">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`nav-link ${link.label === 'HOME' ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <div className="navbar-phone">
            <div className="phone-icon-wrap">
              <PhoneIcon />
            </div>
            <div className="phone-details">
              <span className="phone-label">Have Any Questions?</span>
              <span className="phone-number">+ 91 9594763453</span>
            </div>
          </div>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-nav-link"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-phone">
          <div className="phone-icon-wrap">
            <PhoneIcon />
          </div>
          <div className="phone-details">
            <span className="phone-label">Have Any Questions?</span>
            <span className="phone-number">+ 91 9594763453</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
