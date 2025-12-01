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
        <div className="hero-content">
          <h1 className="hero-headline">Africa's Execution Engine for Asset-as-a-Service</h1>
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
          <div className="hero-image">
            <img 
              src="https://cdn.shortpixel.ai/spai/ret_img/www.haladjian-mining.com/wp-content/uploads/2023/07/heavy-machinery-mining-industry.webp" 
              alt="Large mining excavator at work"
              className="hero-equipment-img"
            />
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
        <div className="container-full">
          <div className="section-content">
            <h2 className="section-heading">Africa's $1 Trillion Asset Financing Gap</h2>
            <p className="section-copy">
              Across the continent, industrial operators are held back by high equipment costs, idle OEM inventory, and inaccessible capital.
              At the same time, investors sit on undeployed funds, waiting for de-risked exposure to real-economy returns.
              BK-AX bridges this divide — unlocking growth for operators, liquidity for OEMs, and yield for investors.
            </p>
            <div className="key-insights">
              <div className="insight-item">
                <div className="insight-image">
                  <img src="https://19lesterg.weebly.com/uploads/2/3/4/3/23430510/1494862.gif" alt="Miner with pickaxe" />
                </div>
                <div className="insight-percentage">60%</div>
                <div className="insight-text">of Africa's operators can't scale due to equipment shortages.</div>
              </div>
              <div className="insight-item">
                <div className="insight-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8Pfh3MHMeJz8dV2VjStZ_h2iToyJTQoOmg&s" alt="Mining dragline" />
                </div>
                <div className="insight-percentage">$100B+</div>
                <div className="insight-text">in infrastructure projects need reliable asset access.</div>
              </div>
              <div className="insight-item">
                <div className="insight-image">
                  <img src="https://new.abb.com/images/librariesprovider119/crushing-and-conveying/mining-conveyor-systems-are-getting-larger-more-durable-and-going-underground.jpg?sfvrsn=a4cc440c_1" alt="Mining conveyor system" />
                </div>
                <div className="insight-percentage">$1.4T</div>
                <div className="insight-text">global heavy-equipment finance market by 2030.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The BK-AX Advantage */}
      <section className="section advantage-section">
        <div className="container-full">
          <div className="section-content">
            <h2 className="section-heading">Turning Capital, Equipment & Intelligence into Growth</h2>
            <p className="section-copy">
              BK-AX integrates financial innovation, operational excellence, and real-time data into one seamless ecosystem.
              Our approach replaces ownership friction with access, and turns every deployed asset into a transparent, performance-linked opportunity.
            </p>
            <div className="pillars">
              <div className="pillar">
                <div className="pillar-image">
                  <img src="https://sitechrockymtn.com/wp-content/uploads/2020/12/Intext-2.jpg" alt="Mining pickaxe" />
                </div>
                <h3 className="pillar-title">Capital Efficiency</h3>
                <p className="pillar-description">Transform CapEx into predictable OpEx.</p>
              </div>
              <div className="pillar">
                <div className="pillar-image">
                  <img src="https://cdn.prod.website-files.com/5e7fdf360c4ef47490fa4124/6920b692f73e204123b92c89_62618cbf4c344c89dd0ba8b2_0002822.jpeg" alt="Worker using jackhammer" />
                </div>
                <h3 className="pillar-title">Operational Intelligence</h3>
                <p className="pillar-description">Monitor, insure, and optimise every deployed asset.</p>
              </div>
              <div className="pillar">
                <div className="pillar-image">
                  <img src="https://content.app-sources.com/s/39721457513420822/uploads/Images/Sandvik_DS311_Roof_Bolter-8267075.jpg?format=webp" alt="Roof bolting equipment" />
                </div>
                <h3 className="pillar-title">Shared Growth</h3>
                <p className="pillar-description">Align returns for investors, uptime for operators, and scale for OEMs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why It Works */}
      <section className="section why-works-section">
        <div className="container-full">
          <div className="section-content">
            <h2 className="section-heading">A Proven Model for Africa's Industrial Scale-Up</h2>
            <p className="section-copy">
              Built on years of operational experience and institutional governance, BK-AX has demonstrated success through live deployments in mining and infrastructure.
              Each asset we enable is productive, monitored, and measurable.
            </p>
            <div className="performance-highlights">
              <div className="highlight">
                <div className="highlight-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlr4mYywX3_VQPxTpYRLHi004gUCF7ZAgpvA&s" alt="Mining excavator" />
                </div>
                <div className="highlight-value">90%+</div>
                <div className="highlight-label">fleet utilisation</div>
              </div>
              <div className="highlight">
                <div className="highlight-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRigEfLX5klSP_CvgvRC9aJzp8GHwq824gEA&s" alt="Large dragline" />
                </div>
                <div className="highlight-value">15-25%</div>
                <div className="highlight-label">yield potential (asset-backed)</div>
              </div>
              <div className="highlight">
                <div className="highlight-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK-pa4heD23Jsy9wlwiK0YV9FqXe_1gcaQ1g&s" alt="Roof bolter" />
                </div>
                <div className="highlight-value">40%</div>
                <div className="highlight-label">lower default incidence</div>
              </div>
              <div className="highlight">
                <div className="highlight-image">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuP-9Vizp_0DkasNFdLF0jm9OwSBOT5I2nlg&s" alt="Jackhammer operation" />
                </div>
                <div className="highlight-value">R1B+</div>
                <div className="highlight-label">capital pipeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Built for Scale */}
      <section className="section scale-section">
        <div className="container-full">
          <div className="section-content">
            <h2 className="section-heading">Designed for Institutions. Rooted in Africa.</h2>
            <p className="section-copy">
              BK-AX combines the governance discipline of an institutional platform with the agility of local execution.
              Our ecosystem spans OEM partnerships, IoT coverage across 90% of mining regions, and fully localised ownership and compliance structures.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleConnectWithUs}>
                Connect With Us
              </button>
              <button className="btn btn-secondary learn-more-btn" onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      
      <style jsx>{`
        /* Base styles */
        .homepage {
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
        
        .section {
          padding: 60px 0;
          width: 100%;
        }
        
        .section-heading {
          font-family: 'Manrope', sans-serif;
          font-size: 2.5rem;
          margin-bottom: 1.2rem;
          color: #223040;
          text-align: center;
          line-height: 1.2;
        }
        
        .section-copy {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          max-width: 100%;
          text-align: center;
          line-height: 1.6;
        }
        
        /* Hero Section */
        .hero-section {
          background-color: #223040;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          min-height: 70vh;
          padding: 0 20px;
          width: 100%;
        }
        
        .hero-content {
          flex: 1;
          max-width: 600px;
          margin: 0 auto;
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
          color: #ACB9C0;
          line-height: 1.6;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        
        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .hero-image {
          width: 100%;
          height: 350px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
        }
        
        .hero-equipment-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .telemetry-overlay {
          position: absolute;
          bottom: 15px;
          left: 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }
        
        .telemetry-item {
          background-color: rgba(34, 48, 64, 0.85);
          backdrop-filter: blur(10px);
          padding: 10px 15px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          color: #FFFFFF;
        }
        
        .telemetry-item:hover {
          background-color: rgba(255, 185, 45, 0.3);
          transform: translateX(3px);
          border-color: #FFB92D;
        }
        
        /* Buttons */
        .btn {
          padding: 12px 25px;
          border: none;
          border-radius: 6px;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          min-width: 160px;
        }
        
        .btn-primary {
          background-color: #FFB92D;
          color: #223040;
        }
        
        .btn-primary:hover {
          background-color: #e6a526;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 185, 45, 0.3);
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #FFFFFF;
          border: 2px solid #FFB92D;
        }
        
        .btn-secondary:hover {
          background-color: rgba(255, 185, 45, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 185, 45, 0.2);
        }
        
        .learn-more-btn {
          color: #2563eb !important;
          border-color: #2563eb !important;
        }
        
        .learn-more-btn:hover {
          background-color: rgba(37, 99, 235, 0.1) !important;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2) !important;
        }
        
        /* Challenge Section */
        .challenge-section {
          background-color: #ffffff;
          width: 100%;
        }
        
        .key-insights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .insight-item {
          text-align: center;
          padding: 25px 20px;
          border-radius: 12px;
          background-color: #f8f9fa;
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .insight-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .insight-image {
          width: 100%;
          height: 100px;
          margin-bottom: 15px;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .insight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .insight-percentage {
          font-family: 'Manrope', sans-serif;
          font-size: 2.2rem;
          color: #FFB92D;
          margin-bottom: 12px;
          font-weight: 700;
        }
        
        .insight-text {
          font-size: 1rem;
          line-height: 1.4;
          color: #272524;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Advantage Section */
        .advantage-section {
          background-color: #f8f9fa;
          width: 100%;
        }
        
        .pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .pillar {
          text-align: center;
          padding: 30px 20px;
          border-radius: 12px;
          background-color: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
          transition: transform 0.3s ease;
          border: 1px solid #e9ecef;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .pillar:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }
        
        .pillar-image {
          width: 100%;
          height: 120px;
          margin-bottom: 20px;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .pillar-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .pillar-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.3rem;
          margin-bottom: 12px;
          color: #223040;
          font-weight: 700;
        }
        
        .pillar-description {
          color: #272524;
          font-size: 1rem;
          line-height: 1.5;
          flex-grow: 1;
        }
        
        /* Why It Works Section */
        .why-works-section {
          background-color: #223040;
          color: #FFFFFF;
          width: 100%;
        }
        
        .why-works-section .section-heading {
          color: #FFFFFF;
        }
        
        .performance-highlights {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 40px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .highlight {
          text-align: center;
          padding: 25px 15px;
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .highlight:hover {
          transform: translateY(-3px);
          background-color: rgba(255, 255, 255, 0.15);
        }
        
        .highlight-image {
          width: 100%;
          height: 80px;
          margin-bottom: 15px;
          border-radius: 6px;
          overflow: hidden;
        }
        
        .highlight-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        .highlight-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.8rem;
          color: #FFB92D;
          margin-bottom: 10px;
          font-weight: 700;
        }
        
        .highlight-label {
          font-size: 0.9rem;
          opacity: 0.9;
          line-height: 1.3;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Scale Section */
        .scale-section {
          background-color: #ffffff;
          text-align: center;
          width: 100%;
        }
        
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .section-heading {
            font-size: 2.2rem;
          }
          
          .hero-headline {
            font-size: 2.2rem;
          }
          
          .key-insights,
          .pillars {
            gap: 20px;
          }
          
          .performance-highlights {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 50px 20px;
            min-height: auto;
          }
          
          .hero-content {
            margin-bottom: 30px;
            max-width: 100%;
          }
          
          .hero-visual {
            max-width: 100%;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .key-insights,
          .pillars {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .section {
            padding: 50px 0;
          }
          
          .section-heading {
            font-size: 2rem;
          }
          
          .section-copy {
            font-size: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .section-heading {
            font-size: 1.8rem;
          }
          
          .hero-headline {
            font-size: 1.8rem;
          }
          
          .key-insights,
          .pillars,
          .performance-highlights {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .hero-buttons,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 100%;
            max-width: 250px;
          }
          
          .section {
            padding: 40px 0;
          }
          
          .hero-image {
            height: 250px;
          }
          
          .insight-item,
          .pillar,
          .highlight {
            padding: 20px 15px;
          }
          
          .insight-percentage {
            font-size: 2rem;
          }
          
          .pillar-image {
            height: 100px;
          }
          
          .highlight-image {
            height: 70px;
          }
        }
        
        @media (max-width: 480px) {
          .section-heading {
            font-size: 1.6rem;
          }
          
          .hero-headline {
            font-size: 1.6rem;
          }
          
          .section-copy {
            font-size: 0.95rem;
          }
          
          .hero-image {
            height: 200px;
          }
          
          .section-content {
            padding: 0 15px;
          }
          
          .insight-percentage {
            font-size: 1.8rem;
          }
          
          .highlight-value {
            font-size: 1.6rem;
          }
          
          .telemetry-overlay {
            bottom: 10px;
            left: 10px;
          }
          
          .telemetry-item {
            padding: 8px 12px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;