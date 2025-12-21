import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleHowItWorks = () => {
    navigate('/services');
  };

  const handlePartnerWithUs = () => {
    navigate('/contact');
  };

  const handleConnectWithUs = () => {
    navigate('/signup');
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

  return (
    <div className="homepage">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-headline">
                Africa's Execution Engine for Asset-as-a-Service
              </h1>
              <p className="hero-subtext">
                BK-AX transforms how Africa's heavy industries finance and operate critical assets.
                We connect capital, equipment, and operator performance through a secure, data-driven platform — creating growth without ownership barriers.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={handleHowItWorks}>
                  Discover How It Works
                </button>
                <button className="btn btn-secondary" onClick={handlePartnerWithUs}>
                  Partner With BK-AX
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-equipment-container">
                <img 
                  src="./pic12.webp" 
                  alt="Large mining excavator at work"
                  className="hero-equipment-img"
                />
                <div className="equipment-overlay">
                  <div className="overlay-stats">
                    <div className="stat-item">
                      <span className="stat-value">92%</span>
                      <span className="stat-label">Utilization</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">98.7%</span>
                      <span className="stat-label">Uptime</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-value">+15%</span>
                      <span className="stat-label">Efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: The Challenge */}
      <section className="section challenge-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-heading">
              Africa's <span className="text-primary">$1 Trillion</span> Asset Financing Gap
            </h2>
            <p className="section-description">
              Across the continent, industrial operators are held back by high equipment costs, idle OEM inventory, and inaccessible capital.
              At the same time, investors sit on undeployed funds, waiting for de-risked exposure to real-economy returns.
              BK-AX bridges this divide — unlocking growth for operators, liquidity for OEMs, and yield for investors.
            </p>
          </div>
          
          <div className="challenge-visual">
            <div className="challenge-img-container">
              <img 
                src="./pic1.jpg" 
                alt="Large mining equipment on site"
                className="challenge-img"
              />
            </div>
            <div className="challenge-stats">
              <div className="stat-card">
                <div className="stat-number">60%</div>
                <div className="stat-text">of Africa's operators can't scale due to equipment shortages.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$100B+</div>
                <div className="stat-text">in infrastructure projects need reliable asset access.</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">$1.4T</div>
                <div className="stat-text">global heavy-equipment finance market by 2030.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The BK-AX Advantage */}
      <section className="section advantage-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-heading">
              Turning Capital, Equipment & Intelligence into Growth
            </h2>
            <p className="section-description">
              BK-AX integrates financial innovation, operational excellence, and real-time data into one seamless ecosystem.
              Our approach replaces ownership friction with access, and turns every deployed asset into a transparent, performance-linked opportunity.
            </p>
          </div>
          
          <div className="advantage-features">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">Capital Efficiency</h3>
              <p className="feature-description">
                Transform CapEx into predictable OpEx.
              </p>
              <div className="feature-image">
                <img 
                  src="./pic2.jfif" 
                  alt="Mining equipment operation"
                />
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">Operational Intelligence</h3>
              <p className="feature-description">
                Monitor, insure, and optimise every deployed asset.
              </p>
              <div className="feature-image">
                <img 
                  src="./pic3.webp" 
                  alt="Mining truck in operation"
                />
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-circle">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title">Shared Growth</h3>
              <p className="feature-description">
                Align returns for investors, uptime for operators, and scale for OEMs.
              </p>
              <div className="feature-image">
                <img 
                  src="./pic4.webp" 
                  alt="Large mining equipment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why It Works */}
      <section className="section performance-section">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-heading">
              A Proven Model for Africa's Industrial Scale-Up
            </h2>
            <p className="section-description">
              Built on years of operational experience and institutional governance, BK-AX has demonstrated success through live deployments in mining and infrastructure.
              Each asset we enable is productive, monitored, and measurable.
            </p>
          </div>
          
          <div className="performance-metrics">
            <div className="metric-card">
              <div className="metric-value">90%+</div>
              <div className="metric-title">Fleet Utilization</div>
              <div className="metric-description">fleet utilisation</div>
              <div className="metric-image">
                <img 
                  src="./pic5.jfif" 
                  alt="Mining equipment fleet"
                />
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">15-25%</div>
              <div className="metric-title">Yield Potential</div>
              <div className="metric-description">yield potential (asset-backed)</div>
              <div className="metric-image">
                <img 
                  src="./pic6.jpg" 
                  alt="Mining operation showing efficiency"
                />
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">40%</div>
              <div className="metric-title">Lower Default Risk</div>
              <div className="metric-description">lower default incidence</div>
              <div className="metric-image">
                <img 
                  src="./pic7.webp" 
                  alt="Reliable mining equipment"
                />
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">R1B+</div>
              <div className="metric-title">Capital Pipeline</div>
              <div className="metric-description">capital pipeline</div>
              <div className="metric-image">
                <img 
                  src="./pic8.jpg" 
                  alt="Large capital investment"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Built for Scale */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-heading">
                Designed for Institutions. Rooted in Africa.
              </h2>
              <p className="cta-description">
                BK-AX combines the governance discipline of an institutional platform with the agility of local execution.
                Our ecosystem spans OEM partnerships, IoT coverage across 90% of mining regions, and fully localised ownership and compliance structures.
              </p>
            </div>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleConnectWithUs}>
                Connect With Us
              </button>
              <button className="btn btn-secondary" onClick={handleLearnMore}>
                Learn More
              </button>
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
        
        .homepage {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          width: 100%;
          overflow-x: hidden;
        }
        
        .container {
          width: 100%;
          padding: 0 24px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .section {
          width: 100%;
          padding: 80px 0;
        }
        
        .section-intro {
          width: 100%;
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          width: 100%;
        }
        
        .section-description {
          font-size: 1.25rem;
          color: #666;
          max-width: 1000px;
          margin: 0 auto;
          line-height: 1.7;
          width: 100%;
        }
        
        .text-primary {
          color: #FFB92D;
        }
        
        /* Buttons */
        .btn {
          padding: 16px 32px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: inline-block;
          min-width: 200px;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          color: #1a1a1a;
          box-shadow: 0 6px 20px rgba(255, 185, 45, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 185, 45, 0.4);
        }
        
        .btn-secondary {
          background: transparent;
          color: #1a1a1a;
          border: 2px solid #FFB92D;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 185, 45, 0.1);
          transform: translateY(-3px);
        }
        
        /* Hero Section - FIXED NO SCROLL */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
          color: white;
          padding: 80px 0;
          width: 100%;
          min-height: auto;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        .hero-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255, 185, 45, 0.15) 0%, transparent 50%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }
        
        .hero-text {
          width: 100%;
        }
        
        .hero-headline {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .hero-subtext {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
          width: 100%;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          width: 100%;
        }
        
        .hero-visual {
          width: 100%;
          overflow: visible;
        }
        
        .hero-equipment-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.6);
          width: 100%;
          height: 400px;
        }
        
        .hero-equipment-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        
        .equipment-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95), transparent);
          padding: 30px 25px 25px;
          width: 100%;
        }
        
        .overlay-stats {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          width: 100%;
        }
        
        .stat-item {
          text-align: center;
          flex: 1;
        }
        
        .stat-value {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #FFB92D;
          margin-bottom: 5px;
        }
        
        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Challenge Section */
        .challenge-section {
          background: #f8f9fa;
          width: 100%;
        }
        
        .challenge-visual {
          width: 100%;
          position: relative;
        }
        
        .challenge-img-container {
          width: 100%;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.15);
          margin-bottom: 30px;
        }
        
        .challenge-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .challenge-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }
        
        .stat-card {
          background: white;
          padding: 35px 25px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease;
          width: 100%;
        }
        
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px -12px rgba(0, 0, 0, 0.15);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #FFB92D;
          margin-bottom: 15px;
          line-height: 1;
        }
        
        .stat-text {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.5;
        }
        
        /* Advantage Section */
        .advantage-section {
          background: white;
          width: 100%;
        }
        
        .advantage-features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          width: 100%;
        }
        
        .feature-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 35px 30px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
        }
        
        .feature-icon {
          margin-bottom: 20px;
        }
        
        .icon-circle {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .feature-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #1a1a1a;
        }
        
        .feature-description {
          color: #666;
          margin-bottom: 25px;
          line-height: 1.6;
          font-size: 1.1rem;
          flex-grow: 1;
        }
        
        .feature-image {
          width: 100%;
          height: 180px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: auto;
        }
        
        .feature-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .feature-card:hover .feature-image img {
          transform: scale(1.05);
        }
        
        /* Performance Section */
        .performance-section {
          background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
          color: white;
          width: 100%;
        }
        
        .performance-section .section-heading,
        .performance-section .section-description {
          color: white;
        }
        
        .performance-section .section-description {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .performance-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          width: 100%;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 35px 25px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: transform 0.3s ease;
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        
        .metric-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 185, 45, 0.4);
        }
        
        .metric-value {
          font-size: 3rem;
          font-weight: 800;
          color: #FFB92D;
          margin-bottom: 15px;
          line-height: 1;
        }
        
        .metric-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 10px;
        }
        
        .metric-description {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
          line-height: 1.6;
          font-size: 1rem;
          flex-grow: 1;
        }
        
        .metric-image {
          width: 100%;
          height: 150px;
          border-radius: 12px;
          overflow: hidden;
          margin-top: auto;
        }
        
        .metric-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .metric-card:hover .metric-image img {
          transform: scale(1.05);
        }
        
        /* CTA Section */
        .cta-section {
          background: #f8f9fa;
          width: 100%;
        }
        
        .cta-content {
          background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
          border-radius: 24px;
          padding: 60px 50px;
          text-align: center;
          color: white;
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        
        .cta-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(255, 185, 45, 0.2) 0%, transparent 50%);
        }
        
        .cta-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }
        
        .cta-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto 30px;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .performance-metrics {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .hero-content {
            gap: 50px;
          }
          
          .hero-headline {
            font-size: 2.8rem;
          }
        }
        
        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          
          .hero-headline {
            font-size: 2.5rem;
          }
          
          .advantage-features,
          .challenge-stats {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .section-heading {
            font-size: 2.5rem;
          }
          
          .hero-buttons,
          .cta-buttons {
            justify-content: center;
          }
          
          .hero-equipment-container {
            height: 350px;
            max-width: 600px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 60px 0;
          }
          
          .hero-section {
            padding: 60px 0;
          }
          
          .hero-headline {
            font-size: 2.2rem;
          }
          
          .hero-subtext,
          .section-description {
            font-size: 1.1rem;
          }
          
          .hero-buttons,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 300px;
          }
          
          .cta-content {
            padding: 50px 30px;
          }
          
          .cta-heading {
            font-size: 2rem;
          }
          
          .hero-equipment-container {
            height: 300px;
          }
          
          .metric-value {
            font-size: 2.5rem;
          }
          
          .stat-number {
            font-size: 2.2rem;
          }
          
          .challenge-img-container {
            height: 300px;
          }
          
          .feature-image,
          .metric-image {
            height: 150px;
          }
        }
        
        @media (max-width: 480px) {
          .container {
            padding: 0 20px;
          }
          
          .section {
            padding: 50px 0;
          }
          
          .hero-section {
            padding: 50px 0;
          }
          
          .section-heading {
            font-size: 2rem;
          }
          
          .hero-headline {
            font-size: 2rem;
          }
          
          .hero-subtext,
          .section-description,
          .cta-description {
            font-size: 1rem;
          }
          
          .hero-equipment-container {
            height: 250px;
          }
          
          .overlay-stats {
            flex-direction: column;
            gap: 15px;
          }
          
          .cta-heading {
            font-size: 1.8rem;
          }
          
          .cta-content {
            padding: 40px 25px;
          }
          
          .metric-value {
            font-size: 2.2rem;
          }
          
          .feature-card,
          .metric-card,
          .stat-card {
            padding: 30px 20px;
          }
          
          .feature-image,
          .metric-image {
            height: 120px;
          }
          
          .challenge-img-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;