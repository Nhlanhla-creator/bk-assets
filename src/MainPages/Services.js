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
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">
              One Platform. Three Stakeholders. Continuous Value.
            </h1>
            <p className="hero-subtitle">
              BK-AX creates shared value for Operators, Investors, and OEMs through a unified model that aligns access, yield, and performance — building Africa's industrial strength from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: For Operators */}
      <section className="stakeholder-section operator-section">
        <div className="container">
          <div className="stakeholder-intro">
            <div className="stakeholder-badge">For Operators</div>
            <h2 className="stakeholder-title">Access the Equipment You Need — Without the Burden of Ownership.</h2>
            <p className="stakeholder-description">
              BK-AX empowers high-potential operators with affordable access to premium equipment, enabling them to scale rapidly, execute contracts efficiently, and grow sustainably.
            </p>
          </div>
          
          <div className="stakeholder-content">
            <div className="stakeholder-image-main">
              <img src="./pic9.jfif" alt="Mining operator using equipment" />
            </div>
            
            <div className="stakeholder-details">
              <div className="benefits-box">
                <h3 className="benefits-title">Key Benefits</h3>
                <ul className="benefits-list">
                  <li><span className="check-icon">✓</span> Fast access to verified OEM fleets</li>
                  <li><span className="check-icon">✓</span> No collateral or long-term debt</li>
                  <li><span className="check-icon">✓</span> Predictable operating costs</li>
                  <li><span className="check-icon">✓</span> Built-in insurance, maintenance, and uptime tracking</li>
                  <li><span className="check-icon">✓</span> Telematics-based transparency and performance assurance</li>
                </ul>
              </div>
              
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Rapid Deployment</h4>
                  <p className="feature-item-description">Get equipment on-site within days</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="12 2 12 22 22 18"></polyline>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Performance Insights</h4>
                  <p className="feature-item-description">Real-time data optimization</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Risk Management</h4>
                  <p className="feature-item-description">Comprehensive coverage</p>
                </div>
              </div>
              
              <button className="cta-btn operator-cta" onClick={handleRequestAccess}>
                Request Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: For Investors */}
      <section className="stakeholder-section investor-section">
        <div className="container">
          <div className="stakeholder-intro">
            <div className="stakeholder-badge">For Investors</div>
            <h2 className="stakeholder-title">Institutional Yield from Real-World Assets.</h2>
            <p className="stakeholder-description">
              BK-AX delivers de-risked exposure to Africa's real economy — connecting investors to productive, asset-backed opportunities managed under world-class governance.
            </p>
          </div>
          
          <div className="stakeholder-content investor-layout">
            <div className="stakeholder-details">
              <div className="benefits-box investor-benefits">
                <h3 className="benefits-title">Key Benefits</h3>
                <ul className="benefits-list">
                  <li><span className="check-icon">✓</span> Attractive, risk-adjusted returns (historically 15–25%)</li>
                  <li><span className="check-icon">✓</span> Asset-secured participation in industrial productivity</li>
                  <li><span className="check-icon">✓</span> Full transparency via utilisation and performance analytics</li>
                  <li><span className="check-icon">✓</span> ESG-aligned outcomes with measurable developmental impact</li>
                </ul>
              </div>
              
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-value">15-25%</div>
                  <div className="metric-label">Historical Returns</div>
                  <div className="metric-image">
                    <img src="./pic5.jfif" alt="Investment returns" />
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">90%+</div>
                  <div className="metric-label">Asset Utilization</div>
                  <div className="metric-image">
                    <img src="./pic1.jpg" alt="Asset utilization" />
                  </div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Asset-Backed</div>
                  <div className="metric-image">
                    <img src="./pic4.webp" alt="Asset backing" />
                  </div>
                </div>
              </div>
              
              <button className="cta-btn investor-cta" onClick={handleExploreOpportunities}>
                Explore Opportunities
              </button>
            </div>
            
            <div className="stakeholder-image-main">
              <img src="./pic11.jpg" alt="Investor portfolio management" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: For OEMs */}
      <section className="stakeholder-section oem-section">
        <div className="container">
          <div className="stakeholder-intro">
            <div className="stakeholder-badge">For OEMs</div>
            <h2 className="stakeholder-title">Move Inventory. Expand Service. Grow Market Share.</h2>
            <p className="stakeholder-description">
              BK-AX works with OEMs to unlock revenue from idle or slow-moving inventory, turning unsold machinery into recurring income through structured deployment.
            </p>
          </div>
          
          <div className="stakeholder-content">
            <div className="stakeholder-image-main">
              <img src="./pic6.jpg" alt="OEM equipment manufacturing" />
            </div>
            
            <div className="stakeholder-details">
              <div className="benefits-box">
                <h3 className="benefits-title">Key Benefits</h3>
                <ul className="benefits-list">
                  <li><span className="check-icon">✓</span> Immediate sales through structured capital access</li>
                  <li><span className="check-icon">✓</span> Residual value assurance and flexible buy-back terms</li>
                  <li><span className="check-icon">✓</span> Maintenance and service revenue continuity</li>
                  <li><span className="check-icon">✓</span> Real-time performance data to inform product innovation</li>
                </ul>
              </div>
              
              <div className="features-grid">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Revenue Growth</h4>
                  <p className="feature-item-description">Convert inventory to revenue</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                      <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Value Protection</h4>
                  <p className="feature-item-description">Structured asset protection</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <h4 className="feature-item-title">Service Expansion</h4>
                  <p className="feature-item-description">Maintenance revenue opportunities</p>
                </div>
              </div>
              
              <button className="cta-btn oem-cta" onClick={handlePartnerWithUs}>
                Partner With BK-AX
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Technology & Intelligence */}
      <section className="technology-section">
        <div className="container">
          <div className="tech-header">
            <h2 className="tech-title">Data at the Heart of Every Asset.</h2>
            <p className="tech-subtitle">
              Our digital backbone turns each asset into a smart data node.
              Telematics, AI-driven analytics, and predictive maintenance converge to ensure reliability, visibility, and confidence for all stakeholders.
            </p>
          </div>
          
          <div className="tech-showcase">
            <div className="tech-visual-main">
              <img src="./pic7.webp" alt="Technology dashboard" />
              <div className="tech-overlay">
                <div className="tech-stats">
                  <div className="tech-stat">
                    <div className="stat-value">92.7%</div>
                    <div className="stat-label">Average Utilization</div>
                  </div>
                  <div className="tech-stat">
                    <div className="stat-value">98.3%</div>
                    <div className="stat-label">Uptime Rate</div>
                  </div>
                  <div className="tech-stat">
                    <div className="stat-value">247</div>
                    <div className="stat-label">Active Assets</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tech-features-grid">
              <div className="tech-feature">
                <div className="tech-feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="tech-feature-title">Live Dashboards</h3>
                <p className="tech-feature-description">Real-time tracking of utilization, location, and uptime across all deployed assets</p>
              </div>
              
              <div className="tech-feature">
                <div className="tech-feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                  </svg>
                </div>
                <h3 className="tech-feature-title">Predictive Maintenance</h3>
                <p className="tech-feature-description">AI-powered alerts reducing downtime and optimizing maintenance schedules</p>
              </div>
              
              <div className="tech-feature">
                <div className="tech-feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <h3 className="tech-feature-title">AI-Based Scoring</h3>
                <p className="tech-feature-description">Advanced scoring for operator performance and asset health monitoring</p>
              </div>
              
              <div className="tech-feature">
                <div className="tech-feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <h3 className="tech-feature-title">Secure Data Environment</h3>
                <p className="tech-feature-description">Compliant, secure data infrastructure integrated with partner systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .services {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          width: 100%;
          overflow-x: hidden;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Hero Section */
        .services-hero {
          background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
          color: white;
          padding: 100px 0;
          width: 100%;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .hero-headline {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }
        
        /* Stakeholder Sections */
        .stakeholder-section {
          padding: 80px 0;
          width: 100%;
        }
        
        .operator-section {
          background: #ffffff;
        }
        
        .investor-section {
          background: #f8f9fa;
        }
        
        .oem-section {
          background: #ffffff;
        }
        
        .stakeholder-intro {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .stakeholder-badge {
          display: inline-block;
          padding: 8px 20px;
          background: #FFB92D;
          color: #1a1a1a;
          border-radius: 20px;
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }
        
        .stakeholder-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
        }
        
        .stakeholder-description {
          font-size: 1.2rem;
          color: #666;
          line-height: 1.7;
        }
        
        .stakeholder-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        .investor-layout {
          grid-template-columns: 1fr 1fr;
        }
        
        /* Main Image Styling */
        .stakeholder-image-main {
          width: 100%;
          height: 500px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        
        .stakeholder-image-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .stakeholder-image-main:hover img {
          transform: scale(1.05);
        }
        
        /* Details Section */
        .stakeholder-details {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .benefits-box {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 16px;
          border-left: 4px solid #FFB92D;
        }
        
        .investor-benefits {
          background: #223040;
          color: white;
        }
        
        .benefits-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        
        .investor-benefits .benefits-title {
          color: white;
        }
        
        .benefits-list {
          list-style: none;
          padding: 0;
        }
        
        .benefits-list li {
          padding: 10px 0;
          padding-left: 30px;
          position: relative;
          font-size: 1rem;
          color: #666;
          line-height: 1.5;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .benefits-list li:last-child {
          border-bottom: none;
        }
        
        .investor-benefits .benefits-list li {
          color: rgba(255, 255, 255, 0.9);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
        
        .check-icon {
          position: absolute;
          left: 0;
          color: #FFB92D;
          font-weight: bold;
          font-size: 1.1rem;
        }
        
        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .feature-item {
          background: white;
          padding: 25px 20px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #e9ecef;
          transition: transform 0.3s ease;
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1a1a1a;
          margin: 0 auto 15px;
        }
        
        .feature-item-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #1a1a1a;
        }
        
        .feature-item-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.4;
        }
        
        /* Metrics Grid */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .metric-card {
          background: #223040;
          color: white;
          padding: 25px 20px;
          border-radius: 12px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 180px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .metric-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFB92D;
          margin-bottom: 10px;
          line-height: 1;
          z-index: 2;
          position: relative;
        }
        
        .metric-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          z-index: 2;
          position: relative;
        }
        
        .metric-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.2;
          z-index: 1;
        }
        
        .metric-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        /* Buttons */
        .cta-btn {
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: inline-block;
          width: 100%;
          max-width: 300px;
          align-self: center;
        }
        
        .operator-cta {
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          color: #1a1a1a;
          box-shadow: 0 6px 20px rgba(255, 185, 45, 0.3);
        }
        
        .operator-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 185, 45, 0.4);
        }
        
        .investor-cta {
          background: linear-gradient(135deg, #223040 0%, #2c3e50 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(34, 48, 64, 0.3);
        }
        
        .investor-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(34, 48, 64, 0.4);
        }
        
        .oem-cta {
          background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
          color: white;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        }
        
        .oem-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
        }
        
        /* Technology Section */
        .technology-section {
          background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
          color: white;
          padding: 80px 0;
          width: 100%;
        }
        
        .tech-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .tech-title {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .tech-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }
        
        .tech-showcase {
          display: flex;
          flex-direction: column;
          gap: 60px;
        }
        
        .tech-visual-main {
          width: 100%;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
        }
        
        .tech-visual-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .tech-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          padding: 40px 30px 30px;
        }
        
        .tech-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .tech-stat {
          text-align: center;
        }
        
        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFB92D;
          margin-bottom: 8px;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .tech-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        
        .tech-feature {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
        }
        
        .tech-feature:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .tech-feature-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 185, 45, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFB92D;
          margin-bottom: 20px;
        }
        
        .tech-feature-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: white;
        }
        
        .tech-feature-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .container {
            padding: 0 30px;
          }
          
          .hero-headline {
            font-size: 2.5rem;
          }
          
          .stakeholder-title {
            font-size: 2.2rem;
          }
          
          .stakeholder-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .stakeholder-image-main {
            height: 400px;
            order: -1;
          }
          
          .investor-layout .stakeholder-image-main {
            order: 2;
          }
          
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .metrics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .tech-features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .tech-visual-main {
            height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
          
          .services-hero {
            padding: 80px 0;
          }
          
          .stakeholder-section {
            padding: 60px 0;
          }
          
          .hero-headline {
            font-size: 2.2rem;
          }
          
          .stakeholder-title {
            font-size: 2rem;
          }
          
          .stakeholder-description {
            font-size: 1.1rem;
          }
          
          .stakeholder-image-main {
            height: 300px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .feature-item {
            padding: 20px;
          }
          
          .metric-card {
            min-height: 160px;
          }
          
          .tech-title {
            font-size: 2rem;
          }
          
          .tech-subtitle {
            font-size: 1.1rem;
          }
          
          .tech-visual-main {
            height: 300px;
          }
          
          .tech-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          
          .stat-value {
            font-size: 1.8rem;
          }
          
          .tech-features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .tech-feature {
            padding: 25px;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          
          .services-hero {
            padding: 60px 0;
          }
          
          .hero-headline {
            font-size: 1.8rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .stakeholder-section {
            padding: 50px 0;
          }
          
          .stakeholder-title {
            font-size: 1.8rem;
          }
          
          .stakeholder-badge {
            padding: 6px 16px;
            font-size: 0.8rem;
          }
          
          .stakeholder-image-main {
            height: 250px;
          }
          
          .benefits-box {
            padding: 25px 20px;
          }
          
          .benefits-list li {
            font-size: 0.95rem;
            padding-left: 25px;
          }
          
          .tech-title {
            font-size: 1.8rem;
          }
          
          .tech-visual-main {
            height: 250px;
          }
          
          .tech-stats {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .tech-overlay {
            padding: 30px 20px 20px;
          }
          
          .cta-btn {
            padding: 14px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;