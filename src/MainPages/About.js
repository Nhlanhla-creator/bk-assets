import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
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
        </div>
      </section>

      {/* Section 1: Vision, Mission & Promise */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="section-header">
            <h2>Vision, Mission & Promise</h2>
          </div>
          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>To power Africa's industrial transformation by turning assets into engines of shared prosperity.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>To unlock productive capital for growth-ready enterprises by combining intelligent financing, operational excellence, and real-time asset intelligence.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🛡️</div>
              <h3>Our Promise</h3>
              <p>We deliver certainty in uncertain markets. BK-AX provides a platform where every asset performs, every investor is protected, and every operator grows with confidence — responsibly, transparently, and sustainably.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-header">
                <div className="value-icon">🔒</div>
                <h3>Integrity</h3>
              </div>
              <p>We build trust through transparent operations, verifiable data, and ethical governance.</p>
            </div>
            <div className="value-card">
              <div className="value-header">
                <div className="value-icon">💡</div>
                <h3>Innovation</h3>
              </div>
              <p>We use technology and insight to redefine how industrial assets are financed and deployed.</p>
            </div>
            <div className="value-card">
              <div className="value-header">
                <div className="value-icon">🤝</div>
                <h3>Partnership</h3>
              </div>
              <p>We align capital, equipment, and capability — ensuring shared success.</p>
            </div>
            <div className="value-card">
              <div className="value-header">
                <div className="value-icon">📈</div>
                <h3>Performance</h3>
              </div>
              <p>Every decision is driven by uptime, utilisation, and yield.</p>
            </div>
            <div className="value-card">
              <div className="value-header">
                <div className="value-icon">🌍</div>
                <h3>Impact</h3>
              </div>
              <p>We create lasting economic value by enabling enterprise growth, employment, and inclusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Model */}
      <section className="model-section">
        <div className="container">
          <div className="model-content">
            <div className="model-text">
              <h2>Turning Assets into Engines of Growth</h2>
              <p>
                BK-AX operates through a proprietary framework that blends finance, operations, and technology to make assets work harder — not sit idle.
                Every deployment is built on verified demand, insured value, and continuous monitoring.
              </p>
              <div className="key-principles">
                <h4>Key Principles:</h4>
                <ul>
                  <li>Assets sourced directly from OEMs under structured agreements.</li>
                  <li>Deployment only to vetted, project-ready operators.</li>
                  <li>Continuous data feedback through IoT and telematics.</li>
                  <li>Governance standards that meet institutional investor expectations.</li>
                </ul>
              </div>
              <div className="nda-notice">
                <p>(The detailed financial architecture is proprietary and available only under NDA.)</p>
              </div>
            </div>
            <div className="model-visual">
              <div className="framework-diagram">
                <div className="framework-item">
                  <div className="framework-icon">🏭</div>
                  <span>OEM Partners</span>
                </div>
                <div className="framework-arrow">→</div>
                <div className="framework-item">
                  <div className="framework-icon">🔄</div>
                  <span>BK-AX Platform</span>
                </div>
                <div className="framework-arrow">→</div>
                <div className="framework-item">
                  <div className="framework-icon">🏗️</div>
                  <span>Verified Operators</span>
                </div>
                <div className="framework-arrow">→</div>
                <div className="framework-item">
                  <div className="framework-icon">📊</div>
                  <span>Performance Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership */}
      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership</h2>
          </div>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-avatar">JK</div>
              <div className="leader-info">
                <h3>Jomo Khomo</h3>
                <p className="leader-title">Chief Executive Officer, BK-AX / CEO, Kele Mining Solutions</p>
                <p className="leader-bio">
                  Mining executive with two decades of operational leadership, OEM partnerships, and large-scale fleet delivery across Southern Africa.
                </p>
              </div>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">TM</div>
              <div className="leader-info">
                <h3>Thando Moutlana</h3>
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
      <section className="alliances-section">
        <div className="container">
          <div className="section-header">
            <h2>Strategic Alliances</h2>
            <p className="section-subtitle">Our Strength in Partnership</p>
          </div>
          <div className="alliances-content">
            <div className="alliances-grid">
              <div className="alliance-partner">
                <div className="partner-icon">💼</div>
                <h4>BIG Marketplace</h4>
                <p>SME vetting, funding readiness, and data intelligence.</p>
              </div>
              <div className="alliance-partner">
                <div className="partner-icon">⚙️</div>
                <h4>Kele Mining Solutions</h4>
                <p>On-ground operations, fleet management, and maintenance.</p>
              </div>
              <div className="alliance-partner">
                <div className="partner-icon">🏢</div>
                <h4>OEM Partners</h4>
                <p>CAT, Bell, Komatsu, Volvo – structured supply and warranty agreements.</p>
              </div>
              <div className="alliance-partner">
                <div className="partner-icon">💰</div>
                <h4>Financial Partners</h4>
                <p>Institutional and private investors supporting asset-backed growth.</p>
              </div>
            </div>
            <div className="closing-line">
              <p>
                Together, we combine technology, governance, and on-ground capability to deliver industrial growth that endures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        /* About Us Page Styles */
        .about-us {
          font-family: 'Montserrat', sans-serif;
          color: #272524;
          line-height: 1.6;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-header h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 2.2rem;
          color: #223040;
          margin-bottom: 0.8rem;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: #ACB9C0;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: #FFFFFF;
          padding: 60px 0 40px;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23FFB92D" opacity="0.1"><circle cx="80" cy="20" r="15"/><circle cx="90" cy="60" r="20"/><circle cx="70" cy="80" r="10"/></svg>') no-repeat;
          background-size: cover;
        }

        .hero-content {
          max-width: 800px;
          position: relative;
          z-index: 2;
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
        }

        .hero-intro p {
          margin-bottom: 1rem;
        }

        .intro-emphasis {
          font-weight: 600;
          color: #FFB92D;
          font-size: 1.2rem;
        }

        /* Vision Mission Section */
        .vision-mission-section {
          padding: 50px 0;
          background-color: #FFFFFF;
        }

        .vm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .vm-card {
          text-align: center;
          padding: 2rem 1.2rem;
          background: #F8F9FA;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .vm-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
        }

        .vm-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .vm-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          color: #223040;
          margin-bottom: 0.8rem;
        }

        .vm-card p {
          color: #272524;
          font-size: 0.95rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        /* Values Section */
        .values-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.2rem;
        }

        .value-card {
          background: #FFFFFF;
          padding: 1.5rem 1rem;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .value-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .value-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .value-icon {
          font-size: 1.8rem;
          margin-right: 0.8rem;
        }

        .value-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          color: #223040;
          margin: 0;
        }

        .value-card p {
          color: #272524;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
        }

        /* Model Section */
        .model-section {
          padding: 50px 0;
          background-color: #223040;
          color: #FFFFFF;
        }

        .model-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
        }

        .model-text h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 2rem;
          margin-bottom: 1.2rem;
          color: #FFFFFF;
        }

        .model-text p {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.2rem;
          color: #ACB9C0;
        }

        .key-principles {
          margin: 1.5rem 0;
        }

        .key-principles h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #FFB92D;
        }

        .key-principles ul {
          list-style: none;
          padding: 0;
        }

        .key-principles li {
          padding: 0.6rem 0;
          padding-left: 1.5rem;
          position: relative;
          font-size: 0.95rem;
          color: #ACB9C0;
        }

        .key-principles li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #FFB92D;
          font-weight: bold;
        }

        .nda-notice {
          background: rgba(255, 185, 45, 0.1);
          padding: 1rem;
          border-radius: 6px;
          border-left: 4px solid #FFB92D;
        }

        .nda-notice p {
          margin: 0;
          font-style: italic;
          color: #FFB92D;
          font-size: 0.85rem;
        }

        .framework-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          flex-wrap: wrap;
        }

        .framework-item {
          text-align: center;
          padding: 1.2rem 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          min-width: 100px;
        }

        .framework-icon {
          font-size: 1.6rem;
          margin-bottom: 0.4rem;
        }

        .framework-item span {
          display: block;
          font-size: 0.8rem;
          color: #FFFFFF;
        }

        .framework-arrow {
          color: #FFB92D;
          font-size: 1.1rem;
          font-weight: bold;
        }

        /* Leadership Section */
        .leadership-section {
          padding: 50px 0;
          background-color: #FFFFFF;
        }

        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .leader-card {
          display: flex;
          gap: 1.2rem;
          padding: 1.5rem;
          background: #F8F9FA;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .leader-card:hover {
          transform: translateY(-5px);
        }

        .leader-avatar {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #FFB92D, #FFD166);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          font-weight: bold;
          color: #223040;
          flex-shrink: 0;
        }

        .leader-info h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          color: #223040;
          margin-bottom: 0.4rem;
        }

        .leader-title {
          color: #FFB92D;
          font-weight: 600;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
        }

        .leader-bio {
          color: #272524;
          line-height: 1.5;
          margin: 0;
          font-size: 0.9rem;
        }

        /* Alliances Section */
        .alliances-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
        }

        .alliances-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .alliance-partner {
          text-align: center;
          padding: 1.5rem 1rem;
          background: #FFFFFF;
          border-radius: 10px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .alliance-partner:hover {
          transform: translateY(-5px);
        }

        .partner-icon {
          font-size: 2.2rem;
          margin-bottom: 1rem;
        }

        .alliance-partner h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.1rem;
          color: #223040;
          margin-bottom: 0.6rem;
        }

        .alliance-partner p {
          color: #272524;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
          font-size: 0.9rem;
        }

        .closing-line {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 1.2rem;
          background: #223040;
          color: #FFFFFF;
          border-radius: 10px;
        }

        .closing-line p {
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          color: #FFB92D;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-headline {
            font-size: 2.2rem;
          }

          .vm-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2rem;
          }

          .model-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 1.8rem;
          }

          .hero-headline {
            font-size: 1.8rem;
          }

          .hero-intro {
            font-size: 1rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .leadership-grid,
          .alliances-grid {
            grid-template-columns: 1fr;
          }

          .leader-card {
            flex-direction: column;
            text-align: center;
          }

          .framework-diagram {
            flex-direction: column;
          }

          .framework-arrow {
            transform: rotate(90deg);
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .about-hero {
            padding: 50px 0 30px;
          }

          .hero-headline {
            font-size: 1.6rem;
          }

          .vm-card,
          .value-card,
          .leader-card,
          .alliance-partner {
            padding: 1.2rem 0.8rem;
          }

          .section-header {
            margin-bottom: 1.5rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 40px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;