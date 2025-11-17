// ContactUs.js
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
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
  };

  return (
    <div className="contact-us">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">
              Let's Build Africa's Industrial Future — Together.
            </h1>
            <div className="hero-intro">
              <p>
                Whether you're looking to fund, operate, or supply heavy-duty equipment, BK-AX provides the intelligence, governance, and execution capability to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Get in Touch</h2>
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
                    <option value="">Select an option</option>
                    <option value="operator">Operator</option>
                    <option value="investor">Investor</option>
                    <option value="oem">OEM</option>
                    <option value="partner">Strategic Partner</option>
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
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="contact-details-section">
              <h3>Contact Details</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <strong>Head Office</strong>
                    <span>Johannesburg, South Africa</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <strong>Email</strong>
                    <a href="mailto:info@bk-ax.com">info@bk-ax.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">☎️</div>
                  <div className="contact-text">
                    <strong>Phone</strong>
                    <a href="tel:+27872654893">+27 (87) 265 4893</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-text">
                    <strong>Website</strong>
                    <a href="https://www.bk-ax.com" target="_blank" rel="noopener noreferrer">www.bk-ax.com</a>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-link" aria-label="BIG Marketplace">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                    <span>BIG Marketplace</span>
                  </a>
                  <a href="#" className="social-link" aria-label="Kele Mining Solutions">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                    </svg>
                    <span>Kele Mining</span>
                  </a>
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

// CSS Styles for Contact Us Page
const contactStyles = `
  /* Contact Us Page Styles */
  .contact-us {
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
  .contact-hero {
    background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
    color: #FFFFFF;
    padding: 120px 0 80px;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .hero-headline {
    font-family: 'Manrope', sans-serif;
    font-size: 3.2rem;
    line-height: 1.1;
    margin-bottom: 2rem;
    color: #FFFFFF;
  }

  .hero-intro {
    font-size: 1.3rem;
    line-height: 1.7;
    color: #ACB9C0;
  }

  /* Contact Section */
  .contact-section {
    padding: 100px 0;
    background-color: #FFFFFF;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: flex-start;
  }

  .contact-form-section h2 {
    font-family: 'Manrope', sans-serif;
    font-size: 2.5rem;
    color: #223040;
    margin-bottom: 3rem;
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
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 1rem 1.2rem;
    border: 2px solid #E2E8F0;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: #FFFFFF;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #FFB92D;
    box-shadow: 0 0 0 3px rgba(255, 185, 45, 0.1);
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
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    margin-top: 1rem;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 185, 45, 0.4);
  }

  /* Contact Details */
  .contact-details-section {
    background: #F8F9FA;
    padding: 3rem 2.5rem;
    border-radius: 15px;
    height: fit-content;
    position: sticky;
    top: 2rem;
  }

  .contact-details-section h3 {
    font-family: 'Manrope', sans-serif;
    font-size: 1.8rem;
    color: #223040;
    margin-bottom: 2rem;
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
    gap: 1rem;
  }

  .contact-icon {
    font-size: 1.5rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
  }

  .contact-text {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .contact-text strong {
    font-family: 'Manrope', sans-serif;
    color: #223040;
    font-size: 1rem;
  }

  .contact-text span,
  .contact-text a {
    color: #272524;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .contact-text a:hover {
    color: #FFB92D;
  }

  /* Social Links */
  .social-links h4 {
    font-family: 'Manrope', sans-serif;
    color: #223040;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: #FFFFFF;
    border-radius: 8px;
    text-decoration: none;
    color: #272524;
    transition: all 0.3s ease;
    border: 1px solid #E2E8F0;
  }

  .social-link:hover {
    transform: translateX(5px);
    border-color: #FFB92D;
    color: #223040;
  }

  .social-link svg {
    color: #FFB92D;
  }

  .social-link span {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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
  }

  @media (max-width: 768px) {
    .hero-headline {
      font-size: 2.2rem;
    }

    .contact-form-section h2 {
      font-size: 2rem;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .contact-details-section {
      padding: 2rem 1.5rem;
    }

    .social-icons {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .social-link {
      flex: 1;
      min-width: 150px;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 15px;
    }

    .contact-hero {
      padding: 80px 0 60px;
    }

    .hero-headline {
      font-size: 1.8rem;
    }

    .contact-section {
      padding: 60px 0;
    }

    .contact-details-section {
      padding: 1.5rem;
    }

    .social-link {
      min-width: 120px;
    }
  }
`;

// Inject styles
const contactStyleSheet = document.createElement('style');
contactStyleSheet.textContent = contactStyles;
document.head.appendChild(contactStyleSheet);

export default Contact;