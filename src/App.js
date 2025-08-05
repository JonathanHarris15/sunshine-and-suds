import React from 'react';
import './App.css';

// --- NEW SVG Icons for your features ---

const CalendarIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);

const PriceIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
);

const SparkleIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    {/* Main star */}
    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2z"></path>
    {/* Symmetric rays */}
    <line x1="12" y1="0.5" x2="12" y2="4"></line>
    <line x1="12" y1="20" x2="12" y2="23.5"></line>
    <line x1="0.5" y1="12" x2="4" y2="12"></line>
    <line x1="20" y1="12" x2="23.5" y2="12"></line>
    <line x1="4.2" y1="4.2" x2="6.7" y2="6.7"></line>
    <line x1="17.3" y1="17.3" x2="19.8" y2="19.8"></line>
    <line x1="17.3" y1="6.7" x2="19.8" y2="4.2"></line>
    <line x1="4.2" y1="19.8" x2="6.7" y2="17.3"></line>
  </svg>
);

const DropletIcon = () => (
  <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
);

const CheckIcon = () => (
    <svg className="feature-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const iconBgStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/button.png'})`
};



function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="logo">Sunshine & Suds</div>
        <nav className="app-nav">
          <a href="#details">Details</a>
          <a href="#about">About</a>
          <a href="#schedule">Schedule Service</a>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="hero-logo-container">
                <img
                  src={process.env.PUBLIC_URL + '/Pastel Lo.png'} // Your existing logo
                  alt="Sunshine & Suds Logo"
                  className="hero-logo"
                />
              </div>
              <p className="hero-subtitle" style={{fontWeight: 500, fontSize: '1.5rem'}}>
                When the skies are cloudy and you’re feeling overwhelmed, call a friend! We are here to help. Laundry washed and folded, then returned to you within two days. Let the Sunshine in!
              </p>
              <a href="#schedule" className="hero-button">Book a Restful Week</a>
            </div>
          </div>
        </section>

        {/* --- Details Section --- */}
        <section id="details" className="content-section">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-bg" style={iconBgStyle}>
                <CalendarIcon />
              </div>
              <h3>When</h3>
              <p>Pick up on Sunday, Return by Tuesday. Sign up for a one-time service or for weekly recurring orders!</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-bg" style={iconBgStyle}>
                <DropletIcon />
              </div>
              <h3>Detergent</h3>
              <p>We use Tide with Downy, or Free and Clear. Pick your favorite! If you have your own, please specify on our form and provide it with the laundry pickup.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-bg" style={iconBgStyle}>
                <SparkleIcon />
              </div>
              <h3>Stains</h3>
              <p>We aren’t magicians, but we will do our best to treat simple stains!</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon-bg" style={iconBgStyle}>
                <CheckIcon />
              </div>
              <h3>How To Prepare</h3>
              <p>Set laundry on your porch by 7:30am on Sunday. Please include hangers for any items you want returned on them. We suggest using a tall kitchen bag for transport.</p>
            </div>
            
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section id="pricing" className="content-section">
          <div className="section-header">
            <h2>Simple & Clear Pricing</h2>
          </div>
          <div className="pricing-content">
            <div className="price-main">
              <h3>Standard Laundry</h3>
              <div className="price-amount"><span className="numbers">$1.85</span> per pound</div>
              <p><span className="numbers">$35</span> minimum order (approx. <span className="numbers">19</span> lbs)</p>
              <p>Pay by Venmo @molly-crites</p>
              <small>*invoice processed and due on day of pickup*</small>
            </div>
            <div className="price-large-items">
              <h3>Larger Items</h3>
              <ul>
                <li><strong>Comforters (King/Queen):</strong> <span className="numbers">$35</span></li>
                <li><strong>Duvet Inserts (King/Queen):</strong> <span className="numbers">$35</span></li>
                <li><strong>Duvet Inserts (Full/Twin):</strong> <span className="numbers">$20</span></li>
                <li><strong>Duvet Covers:</strong> <span className="numbers">$12 - $15</span></li>
                <li><strong>Heavy Duty Blankets:</strong> <span className="numbers">$20</span></li>
                <li><strong>Blankets/Twin Comforters:</strong> <span className="numbers">$15</span></li>
                <li><strong>Large Throw Blankets:</strong> <span className="numbers">$8</span></li>
                <li><strong>Throw Pillows:</strong> <span className="numbers">$10</span></li>
                <li><strong>Large Bathmats:</strong> <span className="numbers">$8</span></li>
                <li><strong>Small Bathmats:</strong> <span className="numbers">$5</span></li>
              </ul>
            </div>
          </div>
           <div className="disclaimer">
              <p><strong>Please Note:</strong> There is a <span className="numbers">$10</span> no-show fee. We are not liable for items given to us in damaged condition, stains that are set in, or lost pocket prizes. We will do our best, but cannot guarantee that those Lego treasures stored in small pockets make it back in one piece!</p>
            </div>
        </section>
        
        {/* --- About Section --- */}
        <section id="about" className="content-section">
          <div className="about-content">
            <div className="about-image-container">
              <img 
                src={process.env.PUBLIC_URL + '/about_image.jpg'} 
                alt="Molly Crites, founder of Sunshine & Suds" 
                className="about-image"
              />
            </div>
            <div className="about-text">
              <div className="section-header" style={{textAlign: 'left', marginBottom: '1rem'}}>
                 <h2>A Little Bit About Me</h2>
              </div>
              <p>
                Howdy! My name is Molly, and for my day job I am a florist, which is a gig that I absolutely love! But, more importantly, I am a mom to five wonderful kids! I understand the overwhelming feeling a mountain of laundry can cause and I would love to brighten your day, and lighten your load! I am praying that Sunshine and Suds can be a blessing to many families in College Station.
              </p>
              <p>
                A couple of years ago, there was a season in our lives that was very difficult. We had sick kiddos, my husband traveled frequently, and we had lots of outside stressors. My sweet Mother-in-Law booked a laundry service for me as a gift because she was states away and couldn't help. It was one of the best gifts for me as a mom of many, and the relief that it brought meant that I could keep up better, sit with sick kiddos guilt free, and feel sane!
              </p>
              <p>
                Use Sunshine and Suds for yourself to relieve some of the to-do list, or book for a friend in need! It might seem like a small gesture, but really you are lifting loads!
              </p>
              <div className="verse">
                <p>"I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life."</p>
                <strong>John <span className="numbers">8:12</span></strong>
              </div>
            </div>
          </div>
        </section>

         {/* --- Schedule Section --- */}
        <section id="schedule" className="content-section">
           <div className="section-header">
            <h2>Let Us Brighten Your Week</h2>
          </div>
          <p>Ready for a break? Fill out the order form, bag up your laundry, and enjoy the sunshine! We will sort lights and darks, treat for simple stains, wash, fold and return to you by Tuesday!</p>
          
          <div className="google-form-container">
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