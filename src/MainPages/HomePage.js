import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="homepage">
        <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-headline">Africa's Execution Engine for Asset-as-a-Service</h1>
          <p className="hero-subtext">
            BK-AX transforms how Africa's heavy industries finance and operate critical assets.
            We connect capital, equipment, and operator performance through a secure, data-driven platform — creating growth without ownership barriers.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Discover How It Works</button>
            <button className="btn btn-secondary">Partner With BK-AX</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image">
            <div className="telemetry-overlay">
              <div className="telemetry-item">Equipment Utilization: 92%</div>
              <div className="telemetry-item">Fuel Efficiency: +15%</div>
              <div className="telemetry-item">Uptime: 98.7%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Challenge */}
      <section className="section challenge-section">
        <div className="container">
          <h2 className="section-heading">Africa's $1 Trillion Asset Financing Gap</h2>
          <p className="section-copy">
            Across the continent, industrial operators are held back by high equipment costs, idle OEM inventory, and inaccessible capital.
            At the same time, investors sit on undeployed funds, waiting for de-risked exposure to real-economy returns.
            BK-AX bridges this divide — unlocking growth for operators, liquidity for OEMs, and yield for investors.
          </p>
          <div className="key-insights">
            <div className="insight-item">
              <div className="insight-percentage">60%</div>
              <div className="insight-text">of Africa's operators can't scale due to equipment shortages.</div>
            </div>
            <div className="insight-item">
              <div className="insight-percentage">$100B+</div>
              <div className="insight-text">in infrastructure projects need reliable asset access.</div>
            </div>
            <div className="insight-item">
              <div className="insight-percentage">$1.4T</div>
              <div className="insight-text">global heavy-equipment finance market by 2030.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The BK-AX Advantage */}
      <section className="section advantage-section">
        <div className="container">
          <h2 className="section-heading">Turning Capital, Equipment & Intelligence into Growth</h2>
          <p className="section-copy">
            BK-AX integrates financial innovation, operational excellence, and real-time data into one seamless ecosystem.
            Our approach replaces ownership friction with access, and turns every deployed asset into a transparent, performance-linked opportunity.
          </p>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar-icon">💰</div>
              <h3 className="pillar-title">Capital Efficiency</h3>
              <p className="pillar-description">Transform CapEx into predictable OpEx.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">📊</div>
              <h3 className="pillar-title">Operational Intelligence</h3>
              <p className="pillar-description">Monitor, insure, and optimise every deployed asset.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon">📈</div>
              <h3 className="pillar-title">Shared Growth</h3>
              <p className="pillar-description">Align returns for investors, uptime for operators, and scale for OEMs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why It Works */}
      <section className="section why-works-section">
        <div className="container">
          <h2 className="section-heading">A Proven Model for Africa's Industrial Scale-Up</h2>
          <p className="section-copy">
            Built on years of operational experience and institutional governance, BK-AX has demonstrated success through live deployments in mining and infrastructure.
            Each asset we enable is productive, monitored, and measurable.
          </p>
          <div className="performance-highlights">
            <div className="highlight">
              <div className="highlight-value">90%+</div>
              <div className="highlight-label">fleet utilisation</div>
            </div>
            <div className="highlight">
              <div className="highlight-value">15-25%</div>
              <div className="highlight-label">yield potential (asset-backed)</div>
            </div>
            <div className="highlight">
              <div className="highlight-value">40%</div>
              <div className="highlight-label">lower default incidence</div>
            </div>
            <div className="highlight">
              <div className="highlight-value">R1B+</div>
              <div className="highlight-label">capital pipeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Built for Scale */}
      <section className="section scale-section">
        <div className="container">
          <h2 className="section-heading">Designed for Institutions. Rooted in Africa.</h2>
          <p className="section-copy">
            BK-AX combines the governance discipline of an institutional platform with the agility of local execution.
            Our ecosystem spans OEM partnerships, IoT coverage across 90% of mining regions, and fully localised ownership and compliance structures.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">Connect With Us</button>
            <button className="btn btn-secondary learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// CSS styles embedded in the component
const styles = `
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Montserrat:wght@500&display=swap');
  
  /* Color variables */
  :root {
    --primary-dark: #223040;
    --accent-yellow: #FFB92D;
    --dark-gray: #272524;
    --light-gray: #ACB9C0;
    --white: #FFFFFF;
    --blue-accent: #2563eb;
  }
  
  /* Base styles */
  .homepage {
    font-family: 'Montserrat', sans-serif;
    color: var(--dark-gray);
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .section-heading {
    font-family: 'Manrope', sans-serif;
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    color: var(--primary-dark);
  }
  
  .section-copy {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 800px;
  }
  
  /* Hero Section */
  .hero-section {
    background-color: var(--primary-dark);
    color: var(--white);
    display: flex;
    align-items: center;
    min-height: 80vh;
    padding: 0 20px;
  }
  
  .hero-content {
    flex: 1;
    max-width: 600px;
  }
  
  .logo-container {
    margin-bottom: 1.5rem;
  }
  
  .logo {
    height: 50px;
  }
  
  .hero-headline {
    font-family: 'Manrope', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    line-height: 1.2;
  }
  
  .hero-subtext {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: var(--light-gray);
  }
  
  .hero-buttons {
    display: flex;
    gap: 15px;
  }
  
  .hero-visual {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hero-image {
    width: 100%;
    height: 400px;
    background-image: url('/image2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .telemetry-overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10;
  }
  
  .telemetry-item {
    background-color: rgba(34, 48, 64, 0.85);
    backdrop-filter: blur(10px);
    padding: 12px 18px;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    color: var(--white);
  }
  
  .telemetry-item:hover {
    background-color: rgba(255, 185, 45, 0.3);
    transform: translateX(5px);
    border-color: var(--accent-yellow);
  }
  
  /* Buttons */
  .btn {
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    font-family: 'Manrope', sans-serif;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }
  
  .btn-primary {
    background-color: var(--accent-yellow);
    color: var(--primary-dark);
  }
  
  .btn-primary:hover {
    background-color: #e6a526;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 185, 45, 0.3);
  }
  
  .btn-secondary {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--accent-yellow);
  }
  
  .btn-secondary:hover {
    background-color: rgba(255, 185, 45, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 185, 45, 0.2);
  }
  
  .learn-more-btn {
    color: var(--blue-accent) !important;
    border-color: var(--blue-accent) !important;
  }
  
  .learn-more-btn:hover {
    background-color: rgba(37, 99, 235, 0.1) !important;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2) !important;
  }
  
  /* Challenge Section */
  .challenge-section {
    background-color: var(--white);
  }
  
  .key-insights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
  }
  
  .insight-item {
    text-align: center;
    padding: 25px 20px;
    border-radius: 10px;
    background-color: #f8f9fa;
    transition: transform 0.3s ease;
  }
  
  .insight-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .insight-percentage {
    font-family: 'Manrope', sans-serif;
    font-size: 2.5rem;
    color: var(--accent-yellow);
    margin-bottom: 10px;
  }
  
  .insight-text {
    font-size: 1rem;
  }
  
  /* Advantage Section */
  .advantage-section {
    background-color: #f8f9fa;
  }
  
  .pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
  }
  
  .pillar {
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    background-color: var(--white);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  
  .pillar:hover {
    transform: translateY(-5px);
  }
  
  .pillar-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .pillar-title {
    font-family: 'Manrope', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: var(--primary-dark);
  }
  
  .pillar-description {
    color: var(--dark-gray);
    font-size: 0.95rem;
  }
  
  /* Why It Works Section */
  .why-works-section {
    background-color: var(--primary-dark);
    color: var(--white);
  }
  
  .why-works-section .section-heading {
    color: var(--white);
  }
  
  .performance-highlights {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 40px;
  }
  
  .highlight {
    text-align: center;
    padding: 25px 15px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease;
  }
  
  .highlight:hover {
    transform: translateY(-5px);
  }
  
  .highlight-value {
    font-family: 'Manrope', sans-serif;
    font-size: 2rem;
    color: var(--accent-yellow);
    margin-bottom: 8px;
  }
  
  .highlight-label {
    font-size: 0.9rem;
  }
  
  /* Scale Section */
  .scale-section {
    background-color: var(--white);
    text-align: center;
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
  }
  
  /* Responsive Design */
  @media (max-width: 992px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 60px 20px;
      min-height: auto;
    }
    
    .hero-content {
      margin-bottom: 40px;
    }
    
    .hero-buttons {
      justify-content: center;
    }
    
    .key-insights,
    .pillars,
    .performance-highlights {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .section {
      padding: 50px 0;
    }
  }
  
  @media (max-width: 768px) {
    .section-heading {
      font-size: 1.8rem;
    }
    
    .hero-headline {
      font-size: 2rem;
    }
    
    .key-insights,
    .pillars,
    .performance-highlights {
      grid-template-columns: 1fr;
    }
    
    .hero-buttons,
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn {
      width: 100%;
      max-width: 280px;
    }
    
    .section {
      padding: 40px 0;
    }
    
    .hero-image {
      height: 300px;
    }
  }
  
  @media (max-width: 480px) {
    .section-heading {
      font-size: 1.6rem;
    }
    
    .hero-headline {
      font-size: 1.8rem;
    }
    
    .section-copy {
      font-size: 1rem;
    }
    
    .hero-image {
      height: 250px;
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default HomePage;