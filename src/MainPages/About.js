import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container-wide">
          <div className="hero-content-wrapper">
            <div className="hero-text-content">
              <h1 className="hero-headline">
                Redefining How Africa Finances, Deploys & Optimises Industrial Assets
              </h1>
              <div className="hero-intro">
                <p>
                  BK-AX is a joint venture between Brown Ivory Group (BIG) and Kele Mining Solutions (KMS) — created to transform heavy-equipment access into a scalable, investable, and transparent service.
                </p>
                <p className="intro-emphasis">
                  We are more than financiers; we are builders of Africa's next industrial growth engine.
                </p>
              </div>
            </div>
            <div className="hero-visual-content">
              <div className="hero-image-container">
                <img 
                  src="./pic8.webp" 
                  alt="Large mining excavator"
                  className="hero-bg-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Vision, Mission & Promise */}
      <section className="section vision-mission-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-heading">Vision, Mission & Promise</h2>
            <p className="section-description">The pillars that define our purpose and drive our impact across Africa's industrial landscape</p>
          </div>
          
          <div className="vision-mission-grid">
            <div className="vm-card vm-card-yellow">
              <div className="vm-visual">
                <img src="./pic9.jfif" alt="Mining equipment" />
              </div>
              <div className="vm-content">
                <h3 className="vm-title">Our Vision</h3>
                <p className="vm-text">To power Africa's industrial transformation by turning assets into engines of shared prosperity.</p>
              </div>
            </div>
            
            <div className="vm-card vm-card-blue">
              <div className="vm-visual">
                <img src="./pic2.jfif" alt="Worker using mining equipment" />
              </div>
              <div className="vm-content">
                <h3 className="vm-title">Our Mission</h3>
                <p className="vm-text">To unlock productive capital for growth-ready enterprises by combining intelligent financing, operational excellence, and real-time asset intelligence.</p>
              </div>
            </div>
            
            <div className="vm-card vm-card-yellow">
              <div className="vm-visual">
                <img src="./pic10.webp" alt="Mining operation" />
              </div>
              <div className="vm-content">
                <h3 className="vm-title">Our Promise</h3>
                <p className="vm-text">We deliver certainty in uncertain markets. BK-AX provides a platform where every asset performs, every investor is protected, and every operator grows with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="section values-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-heading">Our Values</h2>
            <p className="section-description">The principles that guide everything we do</p>
          </div>
          
          <div className="values-highlight">
            <img 
              src="./pic11.jpg" 
              alt="Mining team collaboration"
              className="values-main-img"
            />
          </div>
          
          <div className="values-grid">
            <div className="value-card value-card-yellow">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12V5H4v14h9m5-7h-5m5 0v5m0-5h5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="value-content">
                <h3 className="value-title">Integrity</h3>
                <p className="value-description">We build trust through transparent operations, verifiable data, and ethical governance.</p>
              </div>
            </div>
            
            <div className="value-card value-card-blue">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="value-content">
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">We use technology and insight to redefine how industrial assets are financed and deployed.</p>
              </div>
            </div>
            
            <div className="value-card value-card-yellow">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="value-content">
                <h3 className="value-title">Partnership</h3>
                <p className="value-description">We align capital, equipment, and capability — ensuring shared success.</p>
              </div>
            </div>
            
            <div className="value-card value-card-blue">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="value-content">
                <h3 className="value-title">Performance</h3>
                <p className="value-description">Every decision is driven by uptime, utilisation, and yield.</p>
              </div>
            </div>
            
            <div className="value-card value-card-yellow">
              <div className="value-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 10v12m5-12v12m5-12v12M21 12a9 9 0 0 1-18 0 9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="value-content">
                <h3 className="value-title">Impact</h3>
                <p className="value-description">We create lasting economic value by enabling enterprise growth, employment, and inclusion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Model */}
      <section className="section model-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-heading">Turning Assets into Engines of Growth</h2>
            <p className="section-description">
              BK-AX operates through a proprietary framework that blends finance, operations, and technology to make assets work harder — not sit idle.
              Every deployment is built on verified demand, insured value, and continuous monitoring.
            </p>
          </div>
          
          <div className="model-visual-large">
            <img 
              src="./pic3.webp" 
              alt="Mining operation process"
              className="model-main-img"
            />
          </div>
          
          <div className="model-content">
            <div className="model-text">
              <div className="key-principles">
                <h3 className="principles-title">Key Principles:</h3>
                <ul className="principles-list">
                  <li className="principle-item">
                    <span className="principle-icon">✓</span>
                    <span className="principle-text">Assets sourced directly from OEMs under structured agreements</span>
                  </li>
                  <li className="principle-item">
                    <span className="principle-icon">✓</span>
                    <span className="principle-text">Deployment only to vetted, project-ready operators</span>
                  </li>
                  <li className="principle-item">
                    <span className="principle-icon">✓</span>
                    <span className="principle-text">Continuous data feedback through IoT and telematics</span>
                  </li>
                  <li className="principle-item">
                    <span className="principle-icon">✓</span>
                    <span className="principle-text">Governance standards that meet institutional investor expectations</span>
                  </li>
                </ul>
              </div>
              
              <div className="nda-notice">
                <p className="nda-text">(The detailed financial architecture is proprietary and available only under NDA.)</p>
              </div>
            </div>
            
            <div className="framework-diagram">
              <div className="framework-flow">
                <div className="framework-step step-yellow">
                  <div className="step-visual">
                    <img src="./pic1.jpg" alt="OEM equipment" />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">OEM Partners</h4>
                    <p className="step-description">Structured supply agreements</p>
                  </div>
                </div>
                
                <div className="step-arrow">→</div>
                
                <div className="framework-step step-blue">
                  <div className="step-visual">
                    <img src="./pic4.webp" alt="BK-AX Platform" />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">BK-AX Platform</h4>
                    <p className="step-description">Asset financing & deployment</p>
                  </div>
                </div>
                
                <div className="step-arrow">→</div>
                
                <div className="framework-step step-yellow">
                  <div className="step-visual">
                    <img src="./pic5.jfif" alt="Verified operator" />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">Verified Operators</h4>
                    <p className="step-description">Project-ready deployment</p>
                  </div>
                </div>
                
                <div className="step-arrow">→</div>
                
                <div className="framework-step step-blue">
                  <div className="step-visual">
                    <img src="./pic6.jpg" alt="Performance monitoring" />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">Performance Data</h4>
                    <p className="step-description">Real-time monitoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership */}
      <section className="section leadership-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-heading">Leadership</h2>
            <p className="section-description">The visionaries driving BK-AX's mission across Africa</p>
          </div>
          
          <div className="leadership-grid">
            <div className="leader-card leader-card-yellow">
              <div className="leader-visual">
                <div className="leader-initials-circle">
                  <span className="leader-initials">JK</span>
                </div>
              </div>
              <div className="leader-content">
                <div className="leader-header">
                  <h3 className="leader-name">Jomo Khomo</h3>
                </div>
                <p className="leader-title">Chief Executive Officer, BK-AX / CEO, Kele Mining Solutions</p>
                <p className="leader-bio">
                  Mining executive with two decades of operational leadership, OEM partnerships, and large-scale fleet delivery across Southern Africa.
                </p>
              </div>
            </div>
            
            <div className="leader-card leader-card-blue">
              <div className="leader-visual">
                <div className="leader-initials-circle">
                  <span className="leader-initials">TM</span>
                </div>
              </div>
              <div className="leader-content">
                <div className="leader-header">
                  <h3 className="leader-name">Thando Moutlana</h3>
                </div>
                <p className="leader-title">Co-Founder & Director, BK-AX / CEO, Brown Ivory Group</p>
                <p className="leader-bio">
                  Platform strategist and fintech innovator driving technology integration, investor relations, and ecosystem growth for BK-AX across Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Strategic Alliances */}
      <section className="section alliances-section">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-heading">Strategic Alliances</h2>
            <p className="section-description">Our Strength in Partnership</p>
          </div>
          
          <div className="alliances-content">
            <div className="alliances-visual">
              <img 
                src="./pic7.webp" 
                alt="Strategic partnership network"
                className="alliances-main-img"
              />
            </div>
            
            <div className="alliances-grid">
              <div className="alliance-card alliance-yellow">
                <div className="alliance-visual">
                  <img src="./BIG.jpg" alt="BIG Marketplace" />
                </div>
                <div className="alliance-content">
                  <h3 className="alliance-title">BIG Marketplace</h3>
                  <p className="alliance-description">SME vetting, funding readiness, and data intelligence.</p>
                </div>
              </div>
              
              <div className="alliance-card alliance-blue">
                <div className="alliance-visual">
                  <img src="./Kele.jpeg" alt="Kele Mining Solutions" />
                </div>
                <div className="alliance-content">
                  <h3 className="alliance-title">Kele Mining Solutions</h3>
                  <p className="alliance-description">On-ground operations, fleet management, and maintenance.</p>
                </div>
              </div>
              
              <div className="alliance-card alliance-yellow">
                <div className="alliance-visual">
                  <img src="./pic12.webp" alt="OEM Partners" />
                </div>
                <div className="alliance-content">
                  <h3 className="alliance-title">OEM Partners</h3>
                  <p className="alliance-description">CAT, Bell, Komatsu, Volvo – structured supply and warranty agreements.</p>
                </div>
              </div>
              
              <div className="alliance-card alliance-blue">
                <div className="alliance-visual">
                  <img src="./pic8.jpg" alt="Financial Partners" />
                </div>
                <div className="alliance-content">
                  <h3 className="alliance-title">Financial Partners</h3>
                  <p className="alliance-description">Institutional and private investors supporting asset-backed growth.</p>
                </div>
              </div>
            </div>
            
            <div className="alliance-cta">
              <div className="closing-line">
                <p className="closing-text">
                  Together, we combine technology, governance, and on-ground capability to deliver industrial growth that endures.
                </p>
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
        
        .about-us {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          width: 100%;
          overflow-x: hidden;
          background: #f8fafc;
        }
        
        .container-wide {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        .section {
          padding: 80px 0;
          width: 100%;
        }
        
        .section-header {
          max-width: 1200px;
          margin: 0 auto 60px;
          text-align: center;
        }
        
        .section-heading {
          font-family: 'Manrope', sans-serif;
          font-size: 3rem;
          margin-bottom: 1.2rem;
          color: #223040;
          line-height: 1.2;
          font-weight: 700;
        }
        
        .section-description {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
          color: #4a5568;
        }
        
        /* Hero Section */
        .about-hero {
          background-color: #223040;
          color: #FFFFFF;
          padding: 100px 0;
          width: 100%;
          position: relative;
          overflow: hidden;
          border-bottom: 5px solid #FFB92D;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #223040 0%, rgba(34, 48, 64, 0.9) 40%, rgba(34, 48, 64, 0.6) 100%);
          z-index: 1;
        }
        
        .hero-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .hero-text-content {
          max-width: 600px;
        }
        
        .hero-headline {
          font-family: 'Manrope', sans-serif;
          font-size: 3.2rem;
          margin-bottom: 1.8rem;
          line-height: 1.1;
          font-weight: 800;
          color: #FFFFFF;
        }
        
        .hero-intro {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          line-height: 1.7;
        }
        
        .hero-intro p {
          margin-bottom: 1.2rem;
          color: #ACB9C0;
        }
        
        .intro-emphasis {
          color: #FFB92D;
          font-size: 1.3rem;
          font-weight: 600;
        }
        
        .hero-visual-content {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hero-image-container {
          width: 100%;
          height: 500px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .hero-image-container:hover .hero-bg-img {
          transform: scale(1.05);
        }
        
        /* Vision Mission Section */
        .vision-mission-section {
          background-color: #ffffff;
          width: 100%;
        }
        
        .vision-mission-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .vm-card {
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e9ecef;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .vm-card-yellow {
          border-top: 5px solid #FFB92D;
        }
        
        .vm-card-blue {
          border-top: 5px solid #223040;
        }
        
        .vm-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .vm-visual {
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        
        .vm-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .vm-card:hover .vm-visual img {
          transform: scale(1.1);
        }
        
        .vm-content {
          padding: 30px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .vm-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #223040;
          font-weight: 700;
        }
        
        .vm-text {
          color: #4a5568;
          font-size: 1.1rem;
          line-height: 1.6;
          flex-grow: 1;
        }
        
        /* Values Section */
        .values-section {
          background-color: #f8f9fa;
          width: 100%;
        }
        
        .values-highlight {
          width: 100%;
          height: 400px;
          margin-bottom: 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .values-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .values-highlight:hover .values-main-img {
          transform: scale(1.05);
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 25px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .value-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 30px;
          transition: transform 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .value-card-yellow {
          border: 2px solid #FFB92D;
        }
        
        .value-card-blue {
          border: 2px solid #223040;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }
        
        .value-card-yellow:hover {
          background-color: rgba(255, 185, 45, 0.05);
        }
        
        .value-card-blue:hover {
          background-color: rgba(34, 48, 64, 0.05);
        }
        
        .value-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #223040;
          margin-bottom: 20px;
        }
        
        .value-card-blue .value-icon {
          background: linear-gradient(135deg, #223040 0%, #2c3e50 100%);
          color: #ffffff;
        }
        
        .value-content {
          flex-grow: 1;
        }
        
        .value-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #223040;
          font-weight: 700;
        }
        
        .value-description {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        /* Model Section */
        .model-section {
          background-color: #223040;
          color: #FFFFFF;
          width: 100%;
          border-top: 5px solid #FFB92D;
          border-bottom: 5px solid #FFB92D;
        }
        
        .model-section .section-heading {
          color: #FFFFFF;
        }
        
        .model-section .section-description {
          color: #ACB9C0;
        }
        
        .model-visual-large {
          width: 100%;
          height: 400px;
          margin-bottom: 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .model-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .model-visual-large:hover .model-main-img {
          transform: scale(1.05);
        }
        
        .model-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .model-text {
          margin-bottom: 50px;
        }
        
        .key-principles {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 40px;
          margin-bottom: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .principles-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 25px;
          color: #FFB92D;
          font-weight: 700;
        }
        
        .principles-list {
          list-style: none;
          padding: 0;
        }
        
        .principle-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .principle-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .principle-icon {
          color: #FFB92D;
          font-weight: bold;
          font-size: 1.2rem;
          margin-right: 15px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .principle-text {
          font-size: 1.1rem;
          color: #ACB9C0;
          line-height: 1.6;
          flex-grow: 1;
        }
        
        .nda-notice {
          background: rgba(255, 185, 45, 0.1);
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #FFB92D;
        }
        
        .nda-text {
          margin: 0;
          font-style: italic;
          color: #FFB92D;
          font-size: 0.95rem;
          text-align: center;
        }
        
        .framework-diagram {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .framework-flow {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .framework-step {
          text-align: center;
          flex: 1;
          max-width: 200px;
        }
        
        .step-yellow .step-visual {
          border: 3px solid #FFB92D;
        }
        
        .step-blue .step-visual {
          border: 3px solid #4A90E2;
        }
        
        .step-visual {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 20px;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .step-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }
        
        .framework-step:hover .step-visual img {
          transform: scale(1.1);
        }
        
        .step-content {
          padding: 0 15px;
        }
        
        .step-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: #FFFFFF;
          font-weight: 600;
        }
        
        .step-description {
          font-size: 0.9rem;
          color: #ACB9C0;
          line-height: 1.4;
        }
        
        .step-arrow {
          color: #FFB92D;
          font-size: 2rem;
          font-weight: bold;
          padding: 0 15px;
        }
        
        /* Leadership Section */
        .leadership-section {
          background-color: #ffffff;
          width: 100%;
        }
        
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .leader-card {
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e9ecef;
          display: flex;
          flex-direction: column;
        }
        
        .leader-card-yellow {
          border-top: 5px solid #FFB92D;
        }
        
        .leader-card-blue {
          border-top: 5px solid #223040;
        }
        
        .leader-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        
        .leader-visual {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .leader-initials-circle {
          width: 120px;
          height: 120px;
          background: linear-gradient(135deg, #FFB92D 0%, #e6a526 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .leader-card-blue .leader-initials-circle {
          background: linear-gradient(135deg, #223040 0%, #2c3e50 100%);
        }
        
        .leader-initials {
          font-family: 'Manrope', sans-serif;
          font-size: 2.5rem;
          font-weight: bold;
          color: #223040;
        }
        
        .leader-card-blue .leader-initials {
          color: #ffffff;
        }
        
        .leader-content {
          padding: 30px;
          flex-grow: 1;
        }
        
        .leader-header {
          margin-bottom: 15px;
        }
        
        .leader-name {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          color: #223040;
          margin: 0;
          font-weight: 700;
        }
        
        .leader-title {
          color: #FFB92D;
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 1rem;
          line-height: 1.4;
        }
        
        .leader-card-blue .leader-title {
          color: #223040;
        }
        
        .leader-bio {
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
          font-size: 1.05rem;
        }
        
        /* Alliances Section */
        .alliances-section {
          background-color: #f8f9fa;
          width: 100%;
        }
        
        .alliances-visual {
          width: 100%;
          height: 350px;
          margin-bottom: 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .alliances-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }
        
        .alliances-visual:hover .alliances-main-img {
          transform: scale(1.05);
        }
        
        .alliances-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 50px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .alliance-card {
          background-color: #ffffff;
          border-radius: 16px;
          padding: 30px;
          transition: transform 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #e9ecef;
          display: flex;
          align-items: center;
          gap: 25px;
        }
        
        .alliance-yellow {
          border-left: 5px solid #FFB92D;
        }
        
        .alliance-blue {
          border-left: 5px solid #223040;
        }
        
        .alliance-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        .alliance-visual {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid #FFB92D;
        }
        
        .alliance-blue .alliance-visual {
          border-color: #223040;
        }
        
        .alliance-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.3s ease;
        }
        
        .alliance-card:hover .alliance-visual img {
          transform: scale(1.1);
        }
        
        .alliance-content {
          flex-grow: 1;
        }
        
        .alliance-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #223040;
          font-weight: 700;
        }
        
        .alliance-description {
          color: #4a5568;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }
        
        .alliance-cta {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .closing-line {
          background: #223040;
          color: #FFFFFF;
          border-radius: 16px;
          padding: 40px;
          text-align: center;
          border: 3px solid #FFB92D;
          box-shadow: 0 10px 30px rgba(255, 185, 45, 0.2);
        }
        
        .closing-text {
          font-size: 1.3rem;
          line-height: 1.6;
          margin: 0;
          color: #FFB92D;
          font-weight: 600;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .container-wide {
            padding: 0 30px;
          }
          
          .hero-content-wrapper {
            gap: 60px;
          }
          
          .hero-headline {
            font-size: 2.8rem;
          }
          
          .section-heading {
            font-size: 2.5rem;
          }
          
          .vision-mission-grid {
            gap: 30px;
          }
          
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          
          .framework-flow {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .framework-step {
            margin-bottom: 30px;
            max-width: 180px;
          }
          
          .step-arrow {
            display: none;
          }
        }
        
        @media (max-width: 992px) {
          .hero-content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
            text-align: center;
          }
          
          .hero-text-content {
            max-width: 100%;
          }
          
          .vision-mission-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .leadership-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .alliances-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .hero-image-container {
            height: 400px;
          }
          
          .values-highlight,
          .model-visual-large,
          .alliances-visual {
            height: 300px;
          }
          
          .leader-visual {
            height: 180px;
          }
        }
        
        @media (max-width: 768px) {
          .container-wide {
            padding: 0 20px;
          }
          
          .section {
            padding: 60px 0;
          }
          
          .hero-headline {
            font-size: 2.2rem;
          }
          
          .hero-intro {
            font-size: 1.1rem;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .hero-image-container {
            height: 300px;
          }
          
          .values-highlight,
          .model-visual-large,
          .alliances-visual {
            height: 250px;
          }
          
          .vm-visual {
            height: 200px;
          }
          
          .step-visual {
            width: 100px;
            height: 100px;
          }
          
          .alliance-card {
            flex-direction: column;
            text-align: center;
            padding: 25px;
          }
          
          .alliance-visual {
            width: 80px;
            height: 80px;
          }
          
          .leader-visual {
            height: 150px;
          }
          
          .leader-initials-circle {
            width: 100px;
            height: 100px;
          }
          
          .leader-initials {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .container-wide {
            padding: 0 16px;
          }
          
          .section-heading {
            font-size: 1.8rem;
          }
          
          .hero-headline {
            font-size: 1.8rem;
          }
          
          .section-description {
            font-size: 1rem;
          }
          
          .hero-image-container {
            height: 250px;
          }
          
          .values-highlight,
          .model-visual-large,
          .alliances-visual {
            height: 200px;
          }
          
          .vm-visual {
            height: 180px;
          }
          
          .value-card,
          .vm-content,
          .leader-content {
            padding: 20px;
          }
          
          .key-principles,
          .framework-diagram {
            padding: 25px;
          }
          
          .step-visual {
            width: 80px;
            height: 80px;
          }
          
          .closing-line {
            padding: 25px;
          }
          
          .closing-text {
            font-size: 1.1rem;
          }
          
          .leader-initials-circle {
            width: 80px;
            height: 80px;
          }
          
          .leader-initials {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;