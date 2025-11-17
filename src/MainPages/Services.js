import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Services = () => {
  return (
    <div className="services">
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">
              One Platform. Three Stakeholders. Continuous Value.
            </h1>
            <div className="hero-intro">
              <p>
                BK-AX creates shared value for Operators, Investors, and OEMs through a unified model that aligns access, yield, and performance — building Africa's industrial strength from the ground up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: For Operators */}
      <section className="stakeholder-section operator-section">
        <div className="container">
          <div className="stakeholder-content">
            <div className="stakeholder-text">
              <div className="stakeholder-header">
                <h2>Access the Equipment You Need — Without the Burden of Ownership.</h2>
              </div>
              <p className="stakeholder-copy">
                BK-AX empowers high-potential operators with affordable access to premium equipment, enabling them to scale rapidly, execute contracts efficiently, and grow sustainably.
              </p>
              <div className="benefits-list">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Fast access to verified OEM fleets.</li>
                  <li>No collateral or long-term debt.</li>
                  <li>Predictable operating costs.</li>
                  <li>Built-in insurance, maintenance, and uptime tracking.</li>
                  <li>Telematics-based transparency and performance assurance.</li>
                </ul>
              </div>
              <button className="cta-btn operator-cta">Request Access</button>
            </div>
            <div className="stakeholder-visual">
              <div className="visual-card">
                <div className="card-icon">⚡</div>
                <h4>Rapid Deployment</h4>
                <p>Get equipment on-site within days, not months</p>
              </div>
              <div className="visual-card">
                <div className="card-icon">📊</div>
                <h4>Performance Insights</h4>
                <p>Real-time data to optimize your operations</p>
              </div>
              <div className="visual-card">
                <div className="card-icon">🛡️</div>
                <h4>Risk Management</h4>
                <p>Comprehensive coverage and support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: For Investors */}
      <section className="stakeholder-section investor-section">
        <div className="container">
          <div className="stakeholder-content reverse">
            <div className="stakeholder-text">
              <div className="stakeholder-header">
                <h2>Institutional Yield from Real-World Assets.</h2>
              </div>
              <p className="stakeholder-copy">
                BK-AX delivers de-risked exposure to Africa's real economy — connecting investors to productive, asset-backed opportunities managed under world-class governance.
              </p>
              <div className="benefits-list">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Attractive, risk-adjusted returns (historically 15–25%).</li>
                  <li>Asset-secured participation in industrial productivity.</li>
                  <li>Full transparency via utilisation and performance analytics.</li>
                  <li>ESG-aligned outcomes with measurable developmental impact.</li>
                </ul>
              </div>
              <button className="cta-btn investor-cta">Explore Opportunities</button>
            </div>
            <div className="stakeholder-visual">
              <div className="metrics-grid">
                <div className="metric-item">
                  <div className="metric-value">15-25%</div>
                  <div className="metric-label">Historical Returns</div>
                </div>
                <div className="metric-item">
                  <div className="metric-value">90%+</div>
                  <div className="metric-label">Asset Utilization</div>
                </div>
                <div className="metric-item">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Asset-Backed</div>
                </div>
                <div className="metric-item">
                  <div className="metric-value">ESG</div>
                  <div className="metric-label">Aligned Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: For OEMs */}
      <section className="stakeholder-section oem-section">
        <div className="container">
          <div className="stakeholder-content">
            <div className="stakeholder-text">
              <div className="stakeholder-header">
                <h2>Move Inventory. Expand Service. Grow Market Share.</h2>
              </div>
              <p className="stakeholder-copy">
                BK-AX works with OEMs to unlock revenue from idle or slow-moving inventory, turning unsold machinery into recurring income through structured deployment.
              </p>
              <div className="benefits-list">
                <h4>Key Benefits:</h4>
                <ul>
                  <li>Immediate sales through structured capital access.</li>
                  <li>Residual value assurance and flexible buy-back terms.</li>
                  <li>Maintenance and service revenue continuity.</li>
                  <li>Real-time performance data to inform product innovation.</li>
                </ul>
              </div>
              <button className="cta-btn oem-cta">Partner With BK-AX</button>
            </div>
            <div className="stakeholder-visual">
              <div className="partnership-features">
                <div className="feature-item">
                  <div className="feature-icon">📈</div>
                  <div className="feature-content">
                    <h5>Revenue Growth</h5>
                    <p>Convert inventory into recurring revenue streams</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔄</div>
                  <div className="feature-content">
                    <h5>Value Protection</h5>
                    <p>Structured agreements to protect asset value</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🔧</div>
                  <div className="feature-content">
                    <h5>Service Expansion</h5>
                    <p>Maintenance and support revenue opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology & Intelligence */}
      <section className="technology-section">
        <div className="container">
          <div className="tech-content">
            <div className="tech-header">
              <h2>Data at the Heart of Every Asset.</h2>
              <p className="tech-subtitle">
                Our digital backbone turns each asset into a smart data node.
                Telematics, AI-driven analytics, and predictive maintenance converge to ensure reliability, visibility, and confidence for all stakeholders.
              </p>
            </div>
            
            <div className="tech-highlights">
              <div className="tech-grid">
                <div className="tech-card">
                  <div className="tech-icon">📱</div>
                  <h4>Live Dashboards</h4>
                  <p>Tracking utilisation, location, and uptime in real-time across all deployed assets.</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🔔</div>
                  <h4>Predictive Maintenance</h4>
                  <p>AI-powered alerts reducing downtime and optimizing maintenance schedules.</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🤖</div>
                  <h4>AI-Based Scoring</h4>
                  <p>Advanced scoring for operator performance and asset health monitoring.</p>
                </div>
                <div className="tech-card">
                  <div className="tech-icon">🔒</div>
                  <h4>Secure Data Environment</h4>
                  <p>Compliant, secure data infrastructure integrated with partner systems.</p>
                </div>
              </div>
            </div>

            <div className="tech-demo">
              <div className="demo-visual">
                <div className="dashboard-preview">
                  <div className="dashboard-header">
                    <div className="dashboard-title">BK-AX Asset Intelligence</div>
                    <div className="dashboard-status">Live</div>
                  </div>
                  <div className="dashboard-metrics">
                    <div className="metric-widget">
                      <div className="widget-title">Active Assets</div>
                      <div className="widget-value">247</div>
                    </div>
                    <div className="metric-widget">
                      <div className="widget-title">Utilization Rate</div>
                      <div className="widget-value">92.7%</div>
                    </div>
                    <div className="metric-widget">
                      <div className="widget-title">Uptime</div>
                      <div className="widget-value">98.3%</div>
                    </div>
                  </div>
                  <div className="dashboard-map">
                    <div className="map-placeholder">Live Asset Tracking Map</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// CSS Styles for Services Page
const servicesStyles = `
  /* Services Page Styles */
  .services {
    font-family: 'Montserrat', sans-serif;
    color: #272524;
    line-height: 1.6;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Hero Section */
  .services-hero {
    background-image: url('/image3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #FFFFFF;
    padding: 60px 0 40px;
    position: relative;
    min-height: 400px;
    display: flex;
    align-items: flex-start;
    padding-top: 100px;
  }

  .services-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, rgba(34, 48, 64, 0.2) 0%, rgba(34, 48, 64, 0.7) 50%, rgba(34, 48, 64, 0.9) 100%);
    z-index: 1;
  }

  .services-hero .container {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .hero-content {
    max-width: 700px;
    text-align: center;
    margin: 0 auto;
  }

  .hero-headline {
    font-family: 'Manrope', sans-serif;
    font-size: 2.5rem;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    color: #FFFFFF;
  }

  .hero-intro {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #ACB9C0;
  }

  /* Stakeholder Sections */
  .stakeholder-section {
    padding: 50px 0;
  }

  .operator-section {
    background-color: #FFFFFF;
  }

  .investor-section {
    background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  }

  .oem-section {
    background-color: #FFFFFF;
  }

  .stakeholder-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: center;
  }

  .stakeholder-content.reverse {
    direction: rtl;
  }

  .stakeholder-content.reverse > * {
    direction: ltr;
  }

  .stakeholder-header {
    margin-bottom: 1.2rem;
  }

  .stakeholder-text h2 {
    font-family: 'Manrope', sans-serif;
    font-size: 2rem;
    color: #223040;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .stakeholder-copy {
    font-size: 1rem;
    line-height: 1.6;
    color: #272524;
    margin-bottom: 1.5rem;
  }

  .benefits-list {
    margin: 1.5rem 0;
  }

  .benefits-list h4 {
    font-family: 'Manrope', sans-serif;
    font-size: 1.1rem;
    color: #223040;
    margin-bottom: 1rem;
  }

  .benefits-list ul {
    list-style: none;
    padding: 0;
  }

  .benefits-list li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.95rem;
    color: #272524;
  }

  .benefits-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #FFB92D;
    font-weight: bold;
    font-size: 1rem;
  }

  .cta-btn {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.95rem;
    margin-top: 0.5rem;
  }

  .operator-cta {
    background: linear-gradient(135deg, #FFB92D, #FFD166);
    color: #223040;
  }

  .operator-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 185, 45, 0.4);
  }

  .investor-cta {
    background: linear-gradient(135deg, #223040, #2C3E50);
    color: #FFFFFF;
  }

  .investor-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(34, 48, 64, 0.4);
  }

  .oem-cta {
    background: linear-gradient(135deg, #272524, #3A3A3A);
    color: #FFFFFF;
  }

  .oem-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(39, 37, 36, 0.4);
  }

  /* Stakeholder Visuals */
  .stakeholder-visual {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .visual-card {
    background: #F8F9FA;
    padding: 1.2rem;
    border-radius: 10px;
    border-left: 4px solid #FFB92D;
    transition: transform 0.3s ease;
  }

  .visual-card:hover {
    transform: translateX(8px);
  }

  .card-icon {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
  }

  .visual-card h4 {
    font-family: 'Manrope', sans-serif;
    font-size: 1.1rem;
    color: #223040;
    margin-bottom: 0.4rem;
  }

  .visual-card p {
    color: #272524;
    margin: 0;
    font-size: 0.9rem;
  }

  .metrics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .metric-item {
    background: #223040;
    color: #FFFFFF;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .metric-item:hover {
    transform: scale(1.03);
  }

  .metric-value {
    font-family: 'Manrope', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
    color: #FFB92D;
    margin-bottom: 0.4rem;
  }

  .metric-label {
    font-size: 0.8rem;
    opacity: 0.9;
  }

  .partnership-features {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 1rem;
    background: #F8F9FA;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }

  .feature-item:hover {
    transform: translateX(8px);
  }

  .feature-icon {
    font-size: 1.6rem;
    flex-shrink: 0;
  }

  .feature-content h5 {
    font-family: 'Manrope', sans-serif;
    font-size: 1rem;
    color: #223040;
    margin: 0 0 0.3rem 0;
  }

  .feature-content p {
    color: #272524;
    margin: 0;
    font-size: 0.85rem;
  }

  /* Technology Section */
  .technology-section {
    padding: 50px 0;
    background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
    color: #FFFFFF;
  }

  .tech-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .tech-header h2 {
    font-family: 'Manrope', sans-serif;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #FFFFFF;
  }

  .tech-subtitle {
    font-size: 1rem;
    line-height: 1.6;
    color: #ACB9C0;
    max-width: 700px;
    margin: 0 auto;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .tech-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem 1.2rem;
    border-radius: 10px;
    text-align: center;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
  }

  .tech-card:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.15);
  }

  .tech-icon {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .tech-card h4 {
    font-family: 'Manrope', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    color: #FFFFFF;
  }

  .tech-card p {
    color: #ACB9C0;
    line-height: 1.5;
    margin: 0;
    font-size: 0.9rem;
  }

  .tech-demo {
    margin-top: 2.5rem;
  }

  .dashboard-preview {
    background: #1A2530;
    border-radius: 10px;
    padding: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 700px;
    margin: 0 auto;
  }

  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dashboard-title {
    font-family: 'Manrope', sans-serif;
    font-size: 1.1rem;
    color: #FFFFFF;
  }

  .dashboard-status {
    background: #00C853;
    color: #FFFFFF;
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
  }

  .dashboard-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-bottom: 1.2rem;
  }

  .metric-widget {
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    border-radius: 6px;
    text-align: center;
  }

  .widget-title {
    font-size: 0.8rem;
    color: #ACB9C0;
    margin-bottom: 0.3rem;
  }

  .widget-value {
    font-family: 'Manrope', sans-serif;
    font-size: 1.4rem;
    font-weight: bold;
    color: #FFB92D;
  }

  .dashboard-map {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ACB9C0;
    font-size: 0.85rem;
  }

  .map-placeholder {
    font-style: italic;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .stakeholder-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .stakeholder-content.reverse {
      direction: ltr;
    }

    .metrics-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .services-hero {
      align-items: center;
      padding-top: 60px;
    }
  }

  @media (max-width: 768px) {
    .hero-headline {
      font-size: 2rem;
    }

    .stakeholder-text h2 {
      font-size: 1.6rem;
    }

    .dashboard-metrics {
      grid-template-columns: 1fr;
    }

    .tech-grid {
      grid-template-columns: 1fr;
    }

    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .stakeholder-section {
      padding: 40px 0;
    }

    .technology-section {
      padding: 40px 0;
    }

    .services-hero {
      min-height: 350px;
      padding-top: 80px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 15px;
    }

    .services-hero {
      padding: 70px 0 30px;
      min-height: 320px;
    }

    .hero-headline {
      font-size: 1.6rem;
    }

    .hero-intro {
      font-size: 1rem;
    }

    .stakeholder-section {
      padding: 30px 0;
    }

    .visual-card,
    .tech-card,
    .metric-item {
      padding: 1rem 0.8rem;
    }

    .feature-item {
      flex-direction: column;
      text-align: center;
      gap: 0.6rem;
    }

    .card-icon {
      font-size: 1.6rem;
    }
  }
`;

// Inject styles
const servicesStyleSheet = document.createElement('style');
servicesStyleSheet.textContent = servicesStyles;
document.head.appendChild(servicesStyleSheet);

export default Services;