import React from 'react';
import './App.css';

// --- SVG Icons for a clean, modern look ---

const SunIcon = () => (
  <svg
    className="feature-icon"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FFD700"
    strokeWidth="0.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="5" fill="#ffffffff" stroke="#FFD700" strokeWidth="0.7"/>
    <g stroke="#FFD700" strokeWidth="0.7">
      <line x1="12" y1="1.5" x2="12" y2="4"/>
      <line x1="12" y1="20" x2="12" y2="22.5"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1.5" y1="12" x2="4" y2="12"/>
      <line x1="20" y1="12" x2="22.5" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </g>
  </svg>
);
const ShirtIcon = () => (
    <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
);

const SparkleIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none">
    <path d="M197.00781,132.74023l-52.16015-19.21777a3.99186,3.99186,0,0,1-2.3711-2.37012L123.25977,58.99219a11.99948,11.99948,0,0,0-22.51954,0L81.52246,111.15234a3.99186,3.99186,0,0,1-2.37012,2.3711L26.99219,132.74023a11.99948,11.99948,0,0,0,0,22.51954l52.16015,19.21777a3.99186,3.99186,0,0,1,2.3711,2.37012l19.21679,52.16015a11.99948,11.99948,0,0,0,22.51954,0l19.21679-52.16015h.001a3.99186,3.99186,0,0,1,2.37012-2.3711l52.16015-19.21679a11.99948,11.99948,0,0,0,0-22.51954Zm-2.76562,15.01368L142.082,166.96973a11.98076,11.98076,0,0,0-7.11133,7.1123l-19.21679,52.16016a4.00076,4.00076,0,0,1-7.50782,0L89.03027,174.082a11.98076,11.98076,0,0,0-7.1123-7.11133L29.75781,147.75391a4.00076,4.00076,0,0,1,0-7.50782L81.918,121.03027a11.98076,11.98076,0,0,0,7.11133-7.1123l19.21679-52.16016a4.00076,4.00076,0,0,1,7.50782,0L134.96973,113.918a11.98076,11.98076,0,0,0,7.1123,7.11133l52.16016,19.21679a4.00076,4.00076,0,0,1,0,7.50782ZM148,40a4.0002,4.0002,0,0,1,4-4h20V16a4,4,0,0,1,8,0V36h20a4,4,0,0,1,0,8H180V64a4,4,0,0,1-8,0V44H152A4.0002,4.0002,0,0,1,148,40Zm96,48a4.0002,4.0002,0,0,1-4,4H228v12a4,4,0,0,1-8,0V92H208a4,4,0,0,1,0-8h12V72a4,4,0,0,1,8,0V84h12A4.0002,4.0002,0,0,1,244,88Z" fill="#FFD700"/>
  </svg>
);


function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">Sunshine & Suds</div>
        <nav className="app-nav">
          <a href="#how-it-works">How It Works</a>
          <a href="#schedule">Schedule Service</a>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-logo-container">
                {/* Replace '/logo.png' with your actual logo file path */}
                <img
                  src="/Pastel Lo.png"
                  alt="Sunshine & Suds Logo"
                  className="hero-logo"
                  style={{
                    maxWidth: "40vw",
                    width: "100%",
                    margin: "-10vhb auto 0 auto",
                    display: "block"
                  }}
                />
              </div>
              <h1 className="hero-title">A little sunshine for your week.</h1>
              <p className="hero-subtitle">
                Life gets overwhelming. Let us handle the laundry, so you can catch your breath and focus on what truly matters.
              </p>
              <a href="#schedule" className="hero-button">Book a Restful Week</a>
            </div>
          </div>
        </section>

        {/* --- How It Works Section --- */}
        <section id="how-it-works" className="content-section features-section">
            <div className="feature">
                <SunIcon />
                <h3>1. Schedule a Pickup</h3>
                <p>Choose a time that works for you. We'll come to your door to pick up your laundry.</p>
            </div>
            <div className="feature">
                <ShirtIcon />
                <h3>2. We Wash With Care</h3>
                <p>We'll wash, dry, and fold your clothes using the detergent of your choice.</p>
            </div>
            <div className="feature">
                <SparkleIcon />
                <h3>3. Delivered Fresh</h3>
                <p>We deliver your fresh, clean laundry back to you, ready to be put away.</p>
            </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="content-section">
          <div className="section-header">
            <h2>Our Mission: A Community That Cares</h2>
          </div>
          <div className="about-content">
            <img 
              src="/about_image.jpg" 
              alt="Sunshine & Suds Team" 
              className="about-image"
            />
            <div className="about-text">
              <p>
                Sunshine & Suds was born from a simple idea: everyone deserves a break. In our fast-paced world, it's easy to feel like you're drowning in chores. We're here to be your sunshine.
              </p>
              <p>
                This isn't just about laundry; it's about giving you back your time and energy when life gets hectic. It's a small act of service from a neighbor who cares. We're a local, community-focused business dedicated to bringing a little more sunshine into people's lives, one clean load at a time.
              </p>
            </div>
          </div>
        </section>

         {/* --- Schedule Section --- */}
        <section id="schedule" className="content-section">
           <div className="section-header">
            <h2>Let Us Brighten Your Week</h2>
          </div>
          <p>Ready for a break? Fill out the form below to schedule your laundry service. It only takes a minute. You can either schedule a one time service or ask us to keep coming back!</p>
          
          {/* --- Pricing Section --- */}
          <div className="pricing-section" style={{ margin: "40px 0 30px 0", textAlign: "center" }}>
            <h3 style={{ color: "#58b9df", marginBottom: "10px" }}>Simple, Transparent Pricing</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: "1.1rem" }}>
              <li><strong>Standard Wash & Fold:</strong> $20 per load</li>
              <li><strong>Pickup & Delivery:</strong> Free within College Station</li>
              <li><strong>Next-Day Service:</strong> +$10 flat fee</li>
              <li><strong>Recurring Service Discount:</strong> 10% off weekly plans</li>
            </ul>
            <div style={{ fontSize: "0.95rem", color: "#888", marginTop: "8px" }}>
              Special requests? Let us know in the form!
            </div>
          </div>
          
          <div className="google-form-container">
            {/* IMPORTANT: Replace the 'src' URL below with the embed link from your own Google Form. */}
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd_sNrHwxSgU8MSrYhND-ZxODC3f_mJ_oQPaFwiL4XSIseTqQ/viewform?embedded=true"
              width="100%"
              height="100%"
              style={{ minHeight: "700px", border: "none" }}
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Sunshine & Suds &copy; 2024</p>
        <p>Proudly serving our neighbors in College Station, TX.</p>
      </footer>
    </div>
  );
}

export default App;
