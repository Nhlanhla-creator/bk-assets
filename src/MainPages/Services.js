import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Services = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleRequestAccess = () => {
    navigate('/signup');
  };

  const handleExploreOpportunities = () => {
    navigate('/signup');
  };

  const handlePartnerWithUs = () => {
    navigate('/contact');
  };

  return (
    <div className="services">
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background-overlay">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr4mYywX3_VQPxTpYRLHi004gUCF7ZAgpvA&s" 
            alt="Mining equipment at work"
            className="hero-bg-image"
          />
        </div>
        <div className="container-full">
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
        <div className="container-full">
          <div className="section-content">
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
                <button className="cta-btn operator-cta" onClick={handleRequestAccess}>
                  Request Access
                </button>
              </div>
              <div className="stakeholder-visual">
                <div className="visual-card">
                  <div className="card-image">
                    <img src="https://sitechrockymtn.com/wp-content/uploads/2020/12/Intext-2.jpg" alt="Rapid Deployment" />
                  </div>
                  <h4>Rapid Deployment</h4>
                  <p>Get equipment on-site within days, not months</p>
                </div>
                <div className="visual-card">
                  <div className="card-image">
                    <img src="https://new.abb.com/images/librariesprovider119/crushing-and-conveying/mining-conveyor-systems-are-getting-larger-more-durable-and-going-underground.jpg?sfvrsn=a4cc440c_1" alt="Performance Insights" />
                  </div>
                  <h4>Performance Insights</h4>
                  <p>Real-time data to optimize your operations</p>
                </div>
                <div className="visual-card">
                  <div className="card-image">
                    <img src="https://content.app-sources.com/s/39721457513420822/uploads/Images/Sandvik_DS311_Roof_Bolter-8267075.jpg?format=webp" alt="Risk Management" />
                  </div>
                  <h4>Risk Management</h4>
                  <p>Comprehensive coverage and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: For Investors */}
      <section className="stakeholder-section investor-section">
        <div className="container-full">
          <div className="section-content">
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
                <button className="cta-btn investor-cta" onClick={handleExploreOpportunities}>
                  Explore Opportunities
                </button>
              </div>
              <div className="stakeholder-visual">
                <div className="metrics-grid">
                  <div className="metric-item">
                    <div className="metric-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPXDkmXJszyOlhjNTMYKSmiT0eLmWFrKTpw&s" alt="Historical Returns" />
                    </div>
                    <div className="metric-value">15-25%</div>
                    <div className="metric-label">Historical Returns</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8Pfh3MHMeJz8dV2VjStZ_h2iToyJTQoOmg&s" alt="Asset Utilization" />
                    </div>
                    <div className="metric-value">90%+</div>
                    <div className="metric-label">Asset Utilization</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRigEfLX5klSP_CvgvRC9aJzp8GHwq824gEA&s" alt="Asset-Backed" />
                    </div>
                    <div className="metric-value">100%</div>
                    <div className="metric-label">Asset-Backed</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-image">
                      <img src="https://19lesterg.weebly.com/uploads/2/3/4/3/23430510/1494862.gif" alt="ESG Impact" />
                    </div>
                    <div className="metric-value">ESG</div>
                    <div className="metric-label">Aligned Impact</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: For OEMs */}
      <section className="stakeholder-section oem-section">
        <div className="container-full">
          <div className="section-content">
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
                <button className="cta-btn oem-cta" onClick={handlePartnerWithUs}>
                  Partner With BK-AX
                </button>
              </div>
              <div className="stakeholder-visual">
                <div className="partnership-features">
                  <div className="feature-item">
                    <div className="feature-image">
                      <img src="https://cdn.prod.website-files.com/5e7fdf360c4ef47490fa4124/6920b692f73e204123b92c89_62618cbf4c344c89dd0ba8b2_0002822.jpeg" alt="Revenue Growth" />
                    </div>
                    <div className="feature-content">
                      <h5>Revenue Growth</h5>
                      <p>Convert inventory into recurring revenue streams</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-pa4heD23Jsy9wlwiK0YV9FqXe_1gcaQ1g&s" alt="Value Protection" />
                    </div>
                    <div className="feature-content">
                      <h5>Value Protection</h5>
                      <p>Structured agreements to protect asset value</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP-9Vizp_0DkasNFdLF0jm9OwSBOT5I2nlg&s" alt="Service Expansion" />
                    </div>
                    <div className="feature-content">
                      <h5>Service Expansion</h5>
                      <p>Maintenance and support revenue opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology & Intelligence */}
      <section className="technology-section">
        <div className="container-full">
          <div className="section-content">
            <div className="tech-content">
              <div className="tech-header">
                <h2>Data at the Heart of Every Asset.</h2>
                <p className="tech-subtitle">
                  Our digital backbone turns each asset into a smart data node.
                  Telematics, AI-driven analytics, and predictive maintenance converge to ensure reliability, visibility, and confidence for all stakeholders.
                </p>
              </div>
              
              <div className="tech-highlights">
                <div className="tech-grid-container">
                  <div className="tech-grid">
                    <div className="tech-card">
                      <div className="tech-image">
                        <img src="https://sitechrockymtn.com/wp-content/uploads/2020/12/Intext-2.jpg" alt="Live Dashboards" />
                      </div>
                      <h4>Live Dashboards</h4>
                      <p>Tracking utilisation, location, and uptime in real-time across all deployed assets.</p>
                    </div>
                    <div className="tech-card">
                      <div className="tech-image">
                        <img src="https://new.abb.com/images/librariesprovider119/crushing-and-conveying/mining-conveyor-systems-are-getting-larger-more-durable-and-going-underground.jpg?sfvrsn=a4cc440c_1" alt="Predictive Maintenance" />
                      </div>
                      <h4>Predictive Maintenance</h4>
                      <p>AI-powered alerts reducing downtime and optimizing maintenance schedules.</p>
                    </div>
                    <div className="tech-card">
                      <div className="tech-image">
                        <img src="https://content.app-sources.com/s/39721457513420822/uploads/Images/Sandvik_DS311_Roof_Bolter-8267075.jpg?format=webp" alt="AI-Based Scoring" />
                      </div>
                      <h4>AI-Based Scoring</h4>
                      <p>Advanced scoring for operator performance and asset health monitoring.</p>
                    </div>
                    <div className="tech-card">
                      <div className="tech-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr4mYywX3_VQPxTpYRLHi004gUCF7ZAgpvA&s" alt="Secure Data Environment" />
                      </div>
                      <h4>Secure Data Environment</h4>
                      <p>Compliant, secure data infrastructure integrated with partner systems.</p>
                    </div>
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
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        /* Services Page Styles */
        .services {
          font-family: 'Montserrat', sans-serif;
          color: #272524;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .container-full {
          width: 100%;
          max-width: none;
          margin: 0 auto;
        }

        .section-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section - Fixed Background */
        .services-hero {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: #FFFFFF;
          padding: 70px 0 40px;
          position: relative;
          min-height: 450px;
          display: flex;
          align-items: center;
          width: 100%;
          overflow: hidden;
        }

        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.15;
        }

        .services-hero .container-full {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .hero-content {
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-headline {
          font-family: 'Manrope', sans-serif;
          font-size: 2.8rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }

        .hero-intro {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #ACB9C0;
        }

        .hero-intro p {
          margin: 0;
        }

        /* Stakeholder Sections */
        .stakeholder-section {
          padding: 60px 0;
          width: 100%;
        }

        .operator-section {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        }

        .investor-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
        }

        .oem-section {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
        }

        .stakeholder-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .stakeholder-content.reverse {
          direction: rtl;
        }

        .stakeholder-content.reverse > * {
          direction: ltr;
        }

        .stakeholder-header {
          margin-bottom: 1.5rem;
        }

        .stakeholder-text h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 2.3rem;
          color: #223040;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .stakeholder-copy {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #272524;
          margin-bottom: 2rem;
        }

        .benefits-list {
          margin: 2rem 0;
        }

        .benefits-list h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          color: #223040;
          margin-bottom: 1.2rem;
        }

        .benefits-list ul {
          list-style: none;
          padding: 0;
        }

        .benefits-list li {
          padding: 0.6rem 0;
          padding-left: 2rem;
          position: relative;
          font-size: 1rem;
          color: #272524;
          line-height: 1.5;
        }

        .benefits-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #FFB92D;
          font-weight: bold;
          font-size: 1.1rem;
        }

        .cta-btn {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          margin-top: 1rem;
          min-width: 200px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .operator-cta {
          background: linear-gradient(135deg, #FFB92D, #FFD166);
          color: #223040;
        }

        .operator-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 185, 45, 0.4);
        }

        .investor-cta {
          background: linear-gradient(135deg, #223040, #2C3E50);
          color: #FFFFFF;
        }

        .investor-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(34, 48, 64, 0.4);
        }

        .oem-cta {
          background: linear-gradient(135deg, #272524, #3A3A3A);
          color: #FFFFFF;
        }

        .oem-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(39, 37, 36, 0.4);
        }

        /* Stakeholder Visuals */
        .stakeholder-visual {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .visual-card {
          background: #FFFFFF;
          padding: 1.5rem 1.2rem;
          border-radius: 12px;
          border-left: 4px solid #FFB92D;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          text-align: center;
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .visual-card:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .card-image {
          width: 60px;
          height: 60px;
          margin: 0 auto 0.8rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FFB92D;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .visual-card h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          color: #223040;
          margin-bottom: 0.5rem;
        }

        .visual-card p {
          color: #272524;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .metric-item {
          background: #223040;
          color: #FFFFFF;
          padding: 1.5rem 1.2rem;
          border-radius: 12px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .metric-item:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 25px rgba(34, 48, 64, 0.3);
        }

        .metric-image {
          width: 50px;
          height: 50px;
          margin: 0 auto 0.8rem;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #FFB92D;
        }

        .metric-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .metric-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          font-weight: bold;
          color: #FFB92D;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 0.85rem;
          opacity: 0.9;
          line-height: 1.3;
        }

        .partnership-features {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: #FFFFFF;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          height: 100px;
        }

        .feature-item:hover {
          transform: translateX(8px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .feature-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #FFB92D;
        }

        .feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .feature-content h5 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          color: #223040;
          margin: 0 0 0.3rem 0;
        }

        .feature-content p {
          color: #272524;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.3;
        }

        /* Technology Section */
        .technology-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: #FFFFFF;
          width: 100%;
        }

        .tech-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .tech-header h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 2.3rem;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }

        .tech-subtitle {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #ACB9C0;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Fixed Tech Grid Layout */
        .tech-grid-container {
          width: 100%;
          overflow: visible;
          margin-bottom: 3rem;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 100%;
          margin: 0 auto;
        }

        .tech-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, background 0.3s ease;
          height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tech-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }

        .tech-image {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.2rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FFB92D;
        }

        .tech-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .tech-card h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #FFFFFF;
        }

        .tech-card p {
          color: #ACB9C0;
          line-height: 1.5;
          margin: 0;
          font-size: 0.95rem;
        }

        .tech-demo {
          margin-top: 3rem;
        }

        .dashboard-preview {
          background: #1A2530;
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dashboard-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          color: #FFFFFF;
        }

        .dashboard-status {
          background: #00C853;
          color: #FFFFFF;
          padding: 0.4rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .dashboard-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .metric-widget {
          background: rgba(255, 255, 255, 0.05);
          padding: 1.5rem 1rem;
          border-radius: 8px;
          text-align: center;
        }

        .widget-title {
          font-size: 0.9rem;
          color: #ACB9C0;
          margin-bottom: 0.5rem;
        }

        .widget-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.8rem;
          font-weight: bold;
          color: #FFB92D;
        }

        .dashboard-map {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ACB9C0;
          font-size: 1rem;
        }

        .map-placeholder {
          font-style: italic;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-headline {
            font-size: 2.5rem;
          }

          .stakeholder-text h2 {
            font-size: 2rem;
          }

          .tech-header h2 {
            font-size: 2rem;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .tech-card {
            height: 260px;
          }
        }

        @media (max-width: 1024px) {
          .stakeholder-content {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .stakeholder-content.reverse {
            direction: ltr;
          }

          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-hero {
            align-items: center;
            padding-top: 70px;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2rem;
          }

          .stakeholder-text h2 {
            font-size: 1.8rem;
          }

          .dashboard-metrics {
            grid-template-columns: 1fr;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .stakeholder-section {
            padding: 50px 0;
          }

          .technology-section {
            padding: 50px 0;
          }

          .services-hero {
            min-height: 400px;
            padding: 60px 0 30px;
          }

          .tech-header h2 {
            font-size: 1.8rem;
          }

          .tech-subtitle {
            font-size: 1.1rem;
          }

          .feature-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
            height: auto;
            padding: 1.5rem 1rem;
          }

          .tech-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .tech-card {
            height: auto;
            min-height: 220px;
          }

          .visual-card,
          .metric-item {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .section-content {
            padding: 0 15px;
          }

          .services-hero {
            padding: 50px 0 20px;
            min-height: 350px;
          }

          .hero-headline {
            font-size: 1.8rem;
          }

          .hero-intro {
            font-size: 1.1rem;
          }

          .stakeholder-section {
            padding: 40px 0;
          }

          .visual-card,
          .tech-card,
          .metric-item {
            padding: 1.2rem 1rem;
          }

          .cta-btn {
            width: 100%;
            max-width: 280px;
          }

          .visual-card,
          .metric-item {
            height: 150px;
          }

          .card-image {
            width: 50px;
            height: 50px;
          }

          .metric-image {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;