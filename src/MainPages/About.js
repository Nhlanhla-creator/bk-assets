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
        <div className="container-full">
          <div className="section-content">
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
        </div>
        <div className="hero-background-image">
          <img 
            src="https://www.shutterstock.com/image-photo/pickaxe-mining-helmet-background-heap-600nw-507493786.jpg" 
            alt="Large mining excavator"
          />
        </div>
      </section>

      {/* Section 1: Vision, Mission & Promise */}
      <section className="vision-mission-section">
        <div className="container-full">
          <div className="section-content">
            <div className="section-header">
              <h2>Vision, Mission & Promise</h2>
            </div>
            <div className="vm-grid">
              <div className="vm-card vm-card-yellow">
                <div className="vm-image">
                  <img src="https://sitechrockymtn.com/wp-content/uploads/2020/12/Intext-2.jpg" alt="Mining pickaxe" />
                </div>
                <h3>Our Vision</h3>
                <p>To power Africa's industrial transformation by turning assets into engines of shared prosperity.</p>
              </div>
              <div className="vm-card vm-card-blue">
                <div className="vm-image">
                  <img src="https://cdn.prod.website-files.com/5e7fdf360c4ef47490fa4124/6920b692f73e204123b92c89_62618cbf4c344c89dd0ba8b2_0002822.jpeg" alt="Worker using jackhammer" />
                </div>
                <h3>Our Mission</h3>
                <p>To unlock productive capital for growth-ready enterprises by combining intelligent financing, operational excellence, and real-time asset intelligence.</p>
              </div>
              <div className="vm-card vm-card-yellow">
                <div className="vm-image">
                  <img src="https://content.app-sources.com/s/39721457513420822/uploads/Images/Sandvik_DS311_Roof_Bolter-8267075.jpg?format=webp" alt="Roof bolting equipment" />
                </div>
                <h3>Our Promise</h3>
                <p>We deliver certainty in uncertain markets. BK-AX provides a platform where every asset performs, every investor is protected, and every operator grows with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="values-section">
        <div className="container-full">
          <div className="section-content">
            <div className="section-header">
              <h2>Our Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              <div className="value-card value-card-yellow">
                <div className="value-header">
                  <div className="value-image">
                    <img src="https://cdn-icons-png.flaticon.com/512/10814/10814863.png" alt="Integrity" />
                  </div>
                  <h3>Integrity</h3>
                </div>
                <p>We build trust through transparent operations, verifiable data, and ethical governance.</p>
              </div>
              <div className="value-card value-card-blue">
                <div className="value-header">
                  <div className="value-image">
                    <img src="https://learnhub.regent.ac.za/wp-content/uploads/2023/04/The-Principles-of-Innovation-in-Business.jpg" alt="Innovation" />
                  </div>
                  <h3>Innovation</h3>
                </div>
                <p>We use technology and insight to redefine how industrial assets are financed and deployed.</p>
              </div>
              <div className="value-card value-card-yellow">
                <div className="value-header">
                  <div className="value-image">
                    <img src="https://img.freepik.com/free-vector/coworkers-cartoon-characters-effective-collaboration-coworkers-cooperation-teamwork-colleagues-discussing-solution-successful-interaction_335657-2309.jpg?semt=ais_hybrid&w=740&q=80" alt="Partnership" />
                  </div>
                  <h3>Partnership</h3>
                </div>
                <p>We align capital, equipment, and capability — ensuring shared success.</p>
              </div>
              <div className="value-card value-card-blue">
                <div className="value-header">
                  <div className="value-image">
                    <img src="https://mindshift.zone/wp-content/uploads/2020/09/Benefits-of-performance-profiling.jpg" alt="Performance" />
                  </div>
                  <h3>Performance</h3>
                </div>
                <p>Every decision is driven by uptime, utilisation, and yield.</p>
              </div>
              <div className="value-card value-card-yellow">
                <div className="value-header">
                  <div className="value-image">
                    <img src="https://www.shutterstock.com/image-photo/exploring-innovative-ideas-creative-insights-600nw-2546661805.jpg" alt="Impact" />
                  </div>
                  <h3>Impact</h3>
                </div>
                <p>We create lasting economic value by enabling enterprise growth, employment, and inclusion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Model */}
      <section className="model-section">
        <div className="container-full">
          <div className="section-content">
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
                  <div className="framework-item framework-item-yellow">
                    <div className="framework-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-pa4heD23Jsy9wlwiK0YV9FqXe_1gcaQ1g&s" alt="Roof bolter" />
                    </div>
                    <span>OEM Partners</span>
                  </div>
                  <div className="framework-arrow">→</div>
                  <div className="framework-item framework-item-blue">
                    <div className="framework-image">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRigEfLX5klSP_CvgvRC9aJzp8GHwq824gEA&s" alt="Large dragline" />
                    </div>
                    <span>BK-AX Platform</span>
                  </div>
                  <div className="framework-arrow">→</div>
                  <div className="framework-item framework-item-yellow">
                    <div className="framework-image">
                      <img src="https://content.app-sources.com/s/39721457513420822/uploads/Images/Sandvik_DS311_Roof_Bolter-8267075.jpg?format=webp" alt="Roof bolting equipment" />
                    </div>
                    <span>Verified Operators</span>
                  </div>
                  <div className="framework-arrow">→</div>
                  <div className="framework-item framework-item-blue">
                    <div className="framework-image">
                      <img src="https://new.abb.com/images/librariesprovider119/crushing-and-conveying/mining-conveyor-systems-are-getting-larger-more-durable-and-going-underground.jpg?sfvrsn=a4cc440c_1" alt="Mining conveyor system" />
                    </div>
                    <span>Performance Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Leadership */}
      <section className="leadership-section">
        <div className="container-full">
          <div className="section-content">
            <div className="section-header">
              <h2>Leadership</h2>
            </div>
            <div className="leadership-grid">
              <div className="leader-card leader-card-yellow">
                <div className="leader-avatar">JK</div>
                <div className="leader-info">
                  <h3>Jomo Khomo</h3>
                  <p className="leader-title">Chief Executive Officer, BK-AX / CEO, Kele Mining Solutions</p>
                  <p className="leader-bio">
                    Mining executive with two decades of operational leadership, OEM partnerships, and large-scale fleet delivery across Southern Africa.
                  </p>
                </div>
              </div>
              <div className="leader-card leader-card-blue">
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
        </div>
      </section>

      {/* Section 5: Strategic Alliances */}
      <section className="alliances-section">
        <div className="container-full">
          <div className="section-content">
            <div className="section-header">
              <h2>Strategic Alliances</h2>
              <p className="section-subtitle">Our Strength in Partnership</p>
            </div>
            <div className="alliances-content">
              <div className="alliances-grid">
                <div className="alliance-partner alliance-partner-yellow">
                  <div className="partner-image">
                    <img src="./BIG.jpg" alt="BIG Marketplace" />
                  </div>
                  <h4>BIG Marketplace</h4>
                  <p>SME vetting, funding readiness, and data intelligence.</p>
                </div>
                <div className="alliance-partner alliance-partner-blue">
                  <div className="partner-image">
                    <img src="./Kele.jpeg" alt="Kele Mining Solutions" />
                  </div>
                  <h4>Kele Mining Solutions</h4>
                  <p>On-ground operations, fleet management, and maintenance.</p>
                </div>
                <div className="alliance-partner alliance-partner-yellow">
                  <div className="partner-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr4mYywX3_VQPxTpYRLHi004gUCF7ZAgpvA&s" alt="OEM Partners" />
                  </div>
                  <h4>OEM Partners</h4>
                  <p>CAT, Bell, Komatsu, Volvo – structured supply and warranty agreements.</p>
                </div>
                <div className="alliance-partner alliance-partner-blue">
                  <div className="partner-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP-9Vizp_0DkasNFdLF0jm9OwSBOT5I2nlg&s" alt="Financial Partners" />
                  </div>
                  <h4>Financial Partners</h4>
                  <p>Institutional and private investors supporting asset-backed growth.</p>
                </div>
              </div>
              <div className="closing-line closing-line-yellow">
                <p>
                  Together, we combine technology, governance, and on-ground capability to deliver industrial growth that endures.
                </p>
              </div>
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
          overflow-x: hidden;
          background: #f8fafc;
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

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
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
          line-height: 1.5;
        }

        /* Outline Styles */
        .outline-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 0 0 1px #FFB92D, 0 4px 15px rgba(255, 185, 45, 0.2);
        }

        .outline-blue {
          border: 2px solid #223040;
          box-shadow: 0 0 0 1px #223040, 0 4px 15px rgba(34, 48, 64, 0.2);
        }

        /* Hero Section */
        .about-hero {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: #FFFFFF;
          padding: 60px 0 40px;
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 450px;
          display: flex;
          align-items: center;
          border-bottom: 3px solid #FFB92D;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #223040 0%, rgba(34, 48, 64, 0.8) 50%, rgba(34, 48, 64, 0.4) 100%);
          z-index: 1;
        }

        .hero-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .hero-background-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.3;
          filter: brightness(0.9) contrast(1.2);
        }

        .hero-content {
          max-width: 900px;
          position: relative;
          z-index: 2;
          margin: 0 auto;
          text-align: center;
        }

        .hero-headline {
          font-family: 'Manrope', sans-serif;
          font-size: 2.4rem;
          line-height: 1.1;
          margin-bottom: 1.2rem;
          color: #FFFFFF;
        }

        .hero-intro {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .hero-intro p {
          margin-bottom: 1.2rem;
        }

        .intro-emphasis {
          font-weight: 600;
          color: #FFB92D;
          font-size: 1.2rem;
        }

        /* Vision Mission Section */
        .vision-mission-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          width: 100%;
        }

        .vm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .vm-card {
          text-align: center;
          padding: 2rem 1.5rem;
          background: #FFFFFF;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
        }

        .vm-card-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 4px 15px rgba(255, 185, 45, 0.1);
        }

        .vm-card-blue {
          border: 2px solid #223040;
          box-shadow: 0 4px 15px rgba(34, 48, 64, 0.1);
        }

        .vm-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .vm-card-yellow:hover {
          box-shadow: 0 8px 25px rgba(255, 185, 45, 0.2);
        }

        .vm-card-blue:hover {
          box-shadow: 0 8px 25px rgba(34, 48, 64, 0.2);
        }

        .vm-image {
          width: 100%;
          height: 140px;
          margin-bottom: 1.2rem;
          border-radius: 8px;
          overflow: hidden;
        }

        .vm-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .vm-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          color: #223040;
          margin-bottom: 1rem;
        }

        .vm-card p {
          color: #272524;
          font-size: 1rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        /* Values Section */
        .values-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          width: 100%;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .value-card {
          background: #FFFFFF;
          padding: 1.5rem 1rem;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .value-card-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 4px 12px rgba(255, 185, 45, 0.1);
        }

        .value-card-blue {
          border: 2px solid #223040;
          box-shadow: 0 4px 12px rgba(34, 48, 64, 0.1);
        }

        .value-card:hover {
          transform: translateY(-2px);
        }

        .value-card-yellow:hover {
          box-shadow: 0 6px 20px rgba(255, 185, 45, 0.15);
        }

        .value-card-blue:hover {
          box-shadow: 0 6px 20px rgba(34, 48, 64, 0.15);
        }

        .value-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1rem;
          text-align: center;
        }

        .value-image {
          width: 70px;
          height: 70px;
          margin-bottom: 0.8rem;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #FFB92D;
        }

        .value-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
          text-align: center;
        }

        /* Model Section */
        .model-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #223040 0%, #2c3e50 100%);
          color: #FFFFFF;
          width: 100%;
          border-top: 3px solid #FFB92D;
          border-bottom: 3px solid #FFB92D;
        }

        .model-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
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
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #FFB92D;
        }

        .key-principles ul {
          list-style: none;
          padding: 0;
        }

        .key-principles li {
          padding: 0.6rem 0;
          padding-left: 1.8rem;
          position: relative;
          font-size: 0.95rem;
          color: #ACB9C0;
          line-height: 1.4;
        }

        .key-principles li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #FFB92D;
          font-weight: bold;
          font-size: 1rem;
        }

        .nda-notice {
          background: rgba(255, 185, 45, 0.1);
          padding: 1rem;
          border-radius: 6px;
          border-left: 3px solid #FFB92D;
          border: 1px solid rgba(255, 185, 45, 0.3);
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
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .framework-item {
          text-align: center;
          padding: 1.2rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          min-width: 110px;
          transition: transform 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .framework-item-yellow {
          border: 2px solid #FFB92D;
        }

        .framework-item-blue {
          border: 2px solid #4A90E2;
        }

        .framework-item:hover {
          transform: scale(1.03);
          background: rgba(255, 255, 255, 0.15);
        }

        .framework-image {
          width: 50px;
          height: 50px;
          margin: 0 auto 0.6rem;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
        }

        .framework-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .framework-item span {
          display: block;
          font-size: 0.8rem;
          color: #FFFFFF;
          line-height: 1.2;
          font-weight: 500;
        }

        .framework-arrow {
          color: #FFB92D;
          font-size: 1.2rem;
          font-weight: bold;
        }

        /* Leadership Section */
        .leadership-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          width: 100%;
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
          background: #FFFFFF;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .leader-card-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 4px 15px rgba(255, 185, 45, 0.1);
        }

        .leader-card-blue {
          border: 2px solid #223040;
          box-shadow: 0 4px 15px rgba(34, 48, 64, 0.1);
        }

        .leader-card:hover {
          transform: translateY(-3px);
        }

        .leader-card-yellow:hover {
          box-shadow: 0 8px 20px rgba(255, 185, 45, 0.15);
        }

        .leader-card-blue:hover {
          box-shadow: 0 8px 20px rgba(34, 48, 64, 0.15);
        }

        .leader-avatar {
          width: 70px;
          height: 70px;
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
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
        }

        .leader-bio {
          color: #272524;
          line-height: 1.5;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Alliances Section */
        .alliances-section {
          padding: 50px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          width: 100%;
        }

        .alliances-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .alliance-partner {
          text-align: center;
          padding: 1.5rem 1.2rem;
          background: #FFFFFF;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: auto;
          min-height: 200px;
        }

        .alliance-partner-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 4px 15px rgba(255, 185, 45, 0.1);
        }

        .alliance-partner-blue {
          border: 2px solid #223040;
          box-shadow: 0 4px 15px rgba(34, 48, 64, 0.1);
        }

        .alliance-partner:hover {
          transform: translateY(-3px);
        }

        .alliance-partner-yellow:hover {
          box-shadow: 0 8px 20px rgba(255, 185, 45, 0.15);
        }

        .alliance-partner-blue:hover {
          box-shadow: 0 8px 20px rgba(34, 48, 64, 0.15);
        }

        .partner-image {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.2rem;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #FFB92D;
        }

        .partner-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .alliance-partner h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.2rem;
          color: #223040;
          margin-bottom: 0.8rem;
        }

        .alliance-partner p {
          color: #272524;
          line-height: 1.5;
          margin: 0;
          flex-grow: 1;
          font-size: 0.95rem;
        }

        .closing-line {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: 1.5rem;
          background: #223040;
          color: #FFFFFF;
          border-radius: 10px;
        }

        .closing-line-yellow {
          border: 2px solid #FFB92D;
          box-shadow: 0 4px 15px rgba(255, 185, 45, 0.2);
        }

        .closing-line p {
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
          color: #FFB92D;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-headline {
            font-size: 2.2rem;
          }

          .section-header h2 {
            font-size: 2rem;
          }

          .vm-grid {
            gap: 1.2rem;
          }

          .values-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.2rem;
          }
        }

        @media (max-width: 1024px) {
          .hero-headline {
            font-size: 2rem;
          }

          .vm-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }

          .model-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-background-image {
            width: 100%;
            opacity: 0.3;
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
            grid-template-columns: 1fr;
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

          .about-hero {
            padding: 50px 0 30px;
            min-height: 400px;
          }

          .alliance-partner {
            min-height: 180px;
            padding: 1.2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-content {
            padding: 0 15px;
          }

          .about-hero {
            padding: 40px 0 20px;
            min-height: 350px;
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

          .leader-avatar {
            width: 60px;
            height: 60px;
            font-size: 1rem;
          }

          .vm-image {
            height: 100px;
          }

          .framework-item {
            padding: 1rem 0.6rem;
            min-width: 90px;
          }

          .framework-image {
            width: 40px;
            height: 40px;
          }

          .alliance-partner {
            min-height: 160px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;