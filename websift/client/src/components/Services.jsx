// Service-specific SVG icons matching the Figma design
const WebDesignIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="26" height="20" rx="2" stroke="#1a2472" strokeWidth="2.2" fill="none"/>
    <rect x="16" y="30" width="8" height="5" fill="#1a2472" opacity="0.3"/>
    <rect x="11" y="35" width="18" height="2.5" rx="1" fill="#1a2472"/>
    <rect x="30" y="20" width="14" height="18" rx="2" stroke="#f48c06" strokeWidth="2.2" fill="none"/>
    <rect x="33" y="24" width="8" height="1.5" rx="0.75" fill="#f48c06"/>
    <rect x="33" y="27" width="6" height="1.5" rx="0.75" fill="#f48c06"/>
  </svg>
)
const WebDevIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="28" rx="3" stroke="#1a2472" strokeWidth="2.2" fill="none"/>
    <rect x="4" y="8" width="40" height="8" rx="3" fill="#1a2472" opacity="0.15"/>
    <circle cx="10" cy="12" r="1.5" fill="#1a2472"/>
    <circle cx="15" cy="12" r="1.5" fill="#1a2472"/>
    <circle cx="20" cy="12" r="1.5" fill="#1a2472"/>
    <path d="M14 22l-4 4 4 4" stroke="#f48c06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 20l4 6-4 6" stroke="#1a2472" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 22l4 4-4 4" stroke="#f48c06" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const DigitalMarketingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="#1a2472" strokeWidth="2.2" fill="none"/>
    <path d="M8 24h32M24 8c-4 4-6 10-6 16s2 12 6 16M24 8c4 4 6 10 6 16s-2 12-6 16" stroke="#1a2472" strokeWidth="1.8" fill="none"/>
    <path d="M30 16l6-4-2 7-5 1 1-4z" fill="#f48c06"/>
  </svg>
)
const MobileAppIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="4" width="20" height="36" rx="4" stroke="#1a2472" strokeWidth="2.2" fill="none"/>
    <circle cx="24" cy="36" r="2" fill="#1a2472" opacity="0.4"/>
    <rect x="20" y="7" width="8" height="1.5" rx="0.75" fill="#1a2472" opacity="0.4"/>
    <rect x="18" y="13" width="12" height="8" rx="2" fill="#1a2472" opacity="0.12"/>
    <path d="M31 6h5a3 3 0 0 1 3 3v8" stroke="#f48c06" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="36" cy="6" r="3" fill="#f48c06"/>
  </svg>
)
const UIUXIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="10" width="40" height="28" rx="3" stroke="#1a2472" strokeWidth="2.2" fill="none"/>
    <rect x="4" y="10" width="40" height="6" rx="3" fill="#1a2472" opacity="0.15"/>
    <rect x="8" y="22" width="14" height="10" rx="2" fill="#1a2472" opacity="0.12" stroke="#1a2472" strokeWidth="1.5"/>
    <rect x="26" y="22" width="14" height="4" rx="2" fill="#f48c06" opacity="0.25"/>
    <rect x="26" y="28" width="10" height="4" rx="2" fill="#1a2472" opacity="0.12"/>
  </svg>
)
const BrandingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 36l10-20 8 15 5-8 9 13H8z" stroke="#1a2472" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <circle cx="35" cy="13" r="6" stroke="#f48c06" strokeWidth="2.2" fill="none"/>
    <path d="M32 13h6M35 10v6" stroke="#f48c06" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const services = [
  {
    Icon: WebDesignIcon,
    name: 'Web Design Services',
    items: [
      'Custom Website Design',
      'Corporate Website Design',
      'E-Commerce Website Design',
      'Landing Page Design',
      'Website Redesign Services',
      'CMS-Based Website Design',
    ],
  },
  {
    Icon: WebDevIcon,
    name: 'Web Development Services',
    items: [
      'Custom Website Development',
      'E-Commerce Web Development',
      'Web Application Development',
      'CMS Development',
      'Frontend Development',
      'Backend Development',
    ],
  },
  {
    Icon: DigitalMarketingIcon,
    name: 'Digital Marketing Services',
    items: [
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Marketing',
      'Performance Marketing',
      'Content Marketing',
    ],
  },
  {
    Icon: MobileAppIcon,
    name: 'Mobile App Development',
    items: [
      'Custom Mobile App Development',
      'Android & IOS App Development',
      'UI/UX Mobile App Design',
      'Cross-Platform App Development',
      'Enterprise Mobile App Development',
      'E-commerce & On-Demand App Development',
    ],
  },
  {
    Icon: UIUXIcon,
    name: 'UI/UX Design Services',
    items: [
      'UX Research & Strategy',
      'Wireframing & Information Architecture',
      'UI Design (Visual Design)',
      'Mobile App UI/UX Design',
      'Website & SaaS Platform Design',
      'UI/UX Redesign Services',
    ],
  },
  {
    Icon: BrandingIcon,
    name: 'Branding and Logo Design',
    items: [
      'Logo Design (Custom & Unique)',
      'Complete Brand Identity Design',
      'Brand Strategy & Positioning',
      'Rebranding Services',
      'Corporate Branding Solutions',
      'Marketing & Brand Collateral Design',
    ],
  },
]

import { useEffect, useRef } from 'react'

export default function Services() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = gridRef.current.querySelectorAll('.service-card')
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            We empower brands to lead their industries through cutting-edge technology and
            user-centric design. Our comprehensive suite of services—ranging from custom
            software development to data-driven marketing—is built on a foundation of
            scalability and security, ensuring your digital infrastructure grows as fast
            as your vision.
          </p>
        </div>
        <div className="services-grid" ref={gridRef}>
          {services.map((svc) => (
            <div className="service-card" key={svc.name}>
              <div className="service-icon">
                <svc.Icon />
              </div>
              <h3 className="service-name">{svc.name}</h3>
              <ul className="service-list">
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className="service-btn">
                Explore
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
