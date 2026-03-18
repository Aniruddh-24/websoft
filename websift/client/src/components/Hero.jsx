export default function Hero() {
  // Update with your actual image path: /images/hero-team.jpg
  const hasImage = true  // set to true after adding hero-team.jpg

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* Left Column */}
        <div className="hero-content">
          <div className="hero-tag">
            <div className="hero-tag-line" />
            <span className="hero-tag-text">Hi, we are SPGtechsoft.</span>
          </div>
          <h1 className="hero-heading">
            <span className="line-blue">Innovate.</span>
            <br />
            <span className="line-orange">Build.</span>
            <br />
            <span className="line-scale">Scale.</span>
          </h1>
          <p className="hero-sub">
            Custom web and mobile app development solutions designed to
            transform ideas into scalable digital products.
          </p>
          <a href="#services" className="hero-btn">
            Let&apos;s Build Something Great
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M5 12h14M12 5l7 7-7 7" />
              <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 6l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right Column – Image */}
        <div className="hero-image-col">
          <div className="hero-img-wrap">
            {hasImage ? (
              <img src="/images/hero-team.jpg" alt="SPGtechsoft team working" />
            ) : (
              <div className="hero-img-placeholder">
                📁 Place <strong style={{ margin: '0 4px' }}>hero-team.jpg</strong> in
                <br />
                <code style={{ fontSize: '0.78rem', marginTop: 4 }}>client/public/images/</code>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
