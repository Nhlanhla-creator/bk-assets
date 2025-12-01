import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="contact-us">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background-overlay"></div>
        <div className="container-full">
          <div className="section-content">
            <div className="hero-content">
              <div className="hero-badge">
                <span>Get in Touch</span>
              </div>
              <h1 className="hero-headline">
                Let's Build Africa's Industrial Future — <span className="highlight">Together.</span>
              </h1>
              <div className="hero-intro">
                <p>
                  Whether you're looking to fund, operate, or supply heavy-duty equipment, BK-AX provides the intelligence, governance, and execution capability to make it happen.
                </p>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">24h</div>
                  <div className="stat-label">Response Time</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Partners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">R1B+</div>
                  <div className="stat-label">Capital Pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container-full">
          <div className="section-content">
            <div className="contact-content">
              {/* Contact Form */}
              <div className="contact-form-section">
                <div className="form-header">
                  <h2>Start the Conversation</h2>
                  <p>Tell us about your project and we'll connect you with the right team.</p>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="organization">Organization *</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        required
                        placeholder="Your company or organization"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Contact Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 (xxx) xxx-xxxx"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="interest">I'm interested in: *</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your interest</option>
                      <option value="operator">Equipment Operator</option>
                      <option value="investor">Investor</option>
                      <option value="oem">OEM Partner</option>
                      <option value="partner">Strategic Partner</option>
                      <option value="career">Career Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, requirements, or how we can collaborate..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="contact-details-section">
                <div className="details-card">
                  <h3>Connect With Us</h3>
                  <p className="details-subtitle">We're here to help you unlock Africa's industrial potential.</p>
                  
                  <div className="contact-info">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div className="contact-text">
                        <strong>Head Office</strong>
                        <span>Johannesburg, South Africa</span>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div className="contact-text">
                        <strong>Email</strong>
                        <a href="mailto:info@bk-ax.com">info@bk-ax.com</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div className="contact-text">
                        <strong>Phone</strong>
                        <a href="tel:+27872654893">+27 (87) 265 4893</a>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <div className="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                        </svg>
                      </div>
                      <div className="contact-text">
                        <strong>Website</strong>
                        <a href="https://www.bk-ax.com" target="_blank" rel="noopener noreferrer">www.bk-ax.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="social-links">
                    <h4>Follow Our Journey</h4>
                    <div className="social-icons">
                      <a href="#" className="social-link" aria-label="LinkedIn">
                        <div className="social-icon-wrapper">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </div>
                        <span>LinkedIn</span>
                      </a>
                      <a href="#" className="social-link" aria-label="BIG Marketplace">
                        <div className="social-icon-wrapper">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                          </svg>
                        </div>
                        <span>BIG Marketplace</span>
                      </a>
                      <a href="#" className="social-link" aria-label="Kele Mining Solutions">
                        <div className="social-icon-wrapper">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                          </svg>
                        </div>
                        <span>Kele Mining</span>
                      </a>
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
        /* Contact Us Page Styles */
        .contact-us {
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

        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: #FFFFFF;
          padding: 100px 0 60px;
          text-align: center;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 185, 45, 0.15);
          color: #FFB92D;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 185, 45, 0.3);
          backdrop-filter: blur(10px);
        }

        .hero-headline {
          font-family: 'Manrope', sans-serif;
          font-size: 2.8rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
        }

        .hero-headline .highlight {
          color: #FFB92D;
          background: linear-gradient(135deg, #FFB92D, #FFD166);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-intro {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #ACB9C0;
          margin-bottom: 3rem;
        }

        .hero-intro p {
          margin: 0;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 3rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Manrope', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: #FFB92D;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #ACB9C0;
          font-weight: 500;
        }

        /* Contact Section */
        .contact-section {
          padding: 80px 0;
          background: #ffffff;
          width: 100%;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-form-section {
          background: #ffffff;
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #f1f3f4;
        }

        .form-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .form-header h2 {
          font-family: 'Manrope', sans-serif;
          font-size: 2.2rem;
          color: #223040;
          margin-bottom: 1rem;
        }

        .form-header p {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        /* Contact Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          color: #223040;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem 1.2rem;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: #ffffff;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #FFB92D;
          box-shadow: 0 0 0 3px rgba(255, 185, 45, 0.1);
          transform: translateY(-1px);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #94a3b8;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #FFB92D, #FFD166);
          color: #223040;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1rem;
          margin-top: 1rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn:not(.submitting):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 185, 45, 0.4);
        }

        .submit-btn.submitting {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid transparent;
          border-top: 2px solid #223040;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Contact Details */
        .contact-details-section {
          position: sticky;
          top: 2rem;
        }

        .details-card {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          padding: 3rem 2.5rem;
          border-radius: 20px;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(34, 48, 64, 0.15);
        }

        .details-card h3 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .details-subtitle {
          color: #ACB9C0;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          padding: 1rem 0;
        }

        .contact-item:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 185, 45, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #FFB92D;
          border: 1px solid rgba(255, 185, 45, 0.2);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .contact-text strong {
          font-family: 'Manrope', sans-serif;
          color: #ffffff;
          font-size: 1rem;
        }

        .contact-text span,
        .contact-text a {
          color: #ACB9C0;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .contact-text a:hover {
          color: #FFB92D;
        }

        /* Social Links */
        .social-links h4 {
          font-family: 'Manrope', sans-serif;
          color: #ffffff;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }

        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          text-decoration: none;
          color: #ACB9C0;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          transform: translateX(5px);
          border-color: #FFB92D;
          color: #ffffff;
          background: rgba(255, 185, 45, 0.1);
        }

        .social-icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-link:hover .social-icon-wrapper {
          background: #FFB92D;
          transform: scale(1.1);
        }

        .social-link svg {
          color: currentColor;
        }

        .social-link span {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-details-section {
            position: static;
          }

          .details-card {
            max-width: 600px;
            margin: 0 auto;
          }

          .hero-headline {
            font-size: 2.4rem;
          }

          .hero-stats {
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .hero-headline {
            font-size: 2rem;
          }

          .form-header h2 {
            font-size: 1.8rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }

          .contact-form-section,
          .details-card {
            padding: 2rem 1.5rem;
          }

          .social-icons {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .social-link {
            flex: 1;
            min-width: 160px;
            justify-content: flex-start;
          }

          .contact-section {
            padding: 60px 0;
          }

          .contact-hero {
            padding: 80px 0 50px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .stat-number {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .section-content {
            padding: 0 15px;
          }

          .contact-hero {
            padding: 60px 0 40px;
          }

          .hero-headline {
            font-size: 1.8rem;
          }

          .hero-intro {
            font-size: 1rem;
          }

          .contact-section {
            padding: 50px 0;
          }

          .contact-form-section,
          .details-card {
            padding: 1.5rem;
          }

          .form-header h2 {
            font-size: 1.6rem;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            padding: 0.8rem 1rem;
          }

          .social-link {
            min-width: 140px;
            padding: 0.8rem 1rem;
          }

          .contact-item {
            gap: 1rem;
          }

          .contact-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;