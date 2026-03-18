// Feature icons
const ExpertiseIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="15" r="8" stroke="#1a2472" strokeWidth="2" fill="none"/>
    <path d="M10 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#1a2472" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M16 14l4 4 8-8" stroke="#f48c06" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="35" cy="10" r="3.5" fill="#f48c06" opacity="0.3" stroke="#f48c06" strokeWidth="1.5"/>
    <circle cx="9" cy="10" r="3.5" fill="#1a2472" opacity="0.2" stroke="#1a2472" strokeWidth="1.5"/>
  </svg>
)
const SolutionsIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="22" r="10" stroke="#1a2472" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="22" r="10" stroke="#f48c06" strokeWidth="2" fill="none" opacity="0.7"/>
    <path d="M22 14v16M18 18h8M18 26h8" stroke="#1a2472" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)
const EndToEndIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="16" height="20" rx="3" stroke="#1a2472" strokeWidth="2" fill="none"/>
    <rect x="24" y="12" width="16" height="20" rx="3" stroke="#f48c06" strokeWidth="2" fill="none"/>
    <path d="M20 22h4" stroke="#1a2472" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="12" cy="22" r="3" fill="#1a2472" opacity="0.25"/>
    <circle cx="32" cy="22" r="3" fill="#f48c06" opacity="0.25"/>
  </svg>
)
const OpenBookIcon = () => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10v26M22 10C18 8 10 8 6 10v26c4-2 12-2 16 0M22 10c4-2 12-2 16 0v26c-4-2-12-2-16 0" stroke="#1a2472" strokeWidth="2" strokeLinejoin="round" fill="none"/>
    <path d="M10 16h8M10 20h8M10 24h6" stroke="#f48c06" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const features = [
  {
    Icon: ExpertiseIcon,
    title: 'Proven Expertise',
    text: 'Our team combines decades of industry experience with cutting-edge methodologies to deliver results that matter.',
  },
  {
    Icon: SolutionsIcon,
    title: 'Custom Solutions',
    text: "We don't believe in one-size-fits-all. Every strategy is drafted from scratch to align perfectly with your unique business goals.",
  },
  {
    Icon: EndToEndIcon,
    title: 'End-to-End Service',
    text: 'From initial concept and design through to final build and market launch, we handle the entire lifecycle seamlessly.',
  },
  {
    Icon: OpenBookIcon,
    title: 'Open-Book Partnership',
    text: 'Our "open-book" philosophy means you have 100% clarity on our workflows, decision-making, and resource management.',
  },
]

// Photo grid
function PhotoCell({ src, alt, placeholder }) {
  if (src) {
    return (
      <div className="why-photo-cell">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    )
  }
  return (
    <div className="why-photo-cell">
      <div className="why-photo-placeholder">{placeholder}</div>
    </div>
  )
}

import { useEffect, useRef } from 'react'

export default function WhyUs() {
  const gridRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
        }
      },
      { threshold: 0.2 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="why-us" id="why-us">
      <div className="why-us-inner">
        {/* Left: Text */}
        <div>
          <h2 className="why-us-heading">
            <span className="navy">Why We&apos;re<br /></span>
            <span className="orange">the Right Choice</span>
          </h2>
          <div className="why-features">
            {features.map((f) => (
              <div className="why-feature" key={f.title}>
                <div className="why-feature-icon"><f.Icon /></div>
                <div>
                  <div className="why-feature-title">{f.title}</div>
                  <div className="why-feature-text">{f.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Photo Grid */}
        <div style={{ position: 'relative' }}>
          <div className="why-photo-grid" ref={gridRef}>
            <PhotoCell
              src="/images/why-lightbulb.jpg"
              alt="Lightbulb idea"
              placeholder="📁 why-lightbulb.jpg"
            />
            <PhotoCell
              src="/images/why-help.jpg"
              alt="Help board"
              placeholder="📁 why-help.jpg"
            />
            <PhotoCell
              src="/images/why-meeting.jpg"
              alt="Team meeting"
              placeholder="📁 why-meeting.jpg"
            />
            <PhotoCell
              src="/images/why-handshake.jpg"
              alt="Handshake"
              placeholder="📁 why-handshake.jpg"
            />
          </div>
          {/* Stat Overlay Card */}
          <div className="why-stat-overlay">
            <div className="why-stat-number">42%</div>
            <div className="why-stat-text">
              Increase in conversion rate through user-behavior modeling
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
