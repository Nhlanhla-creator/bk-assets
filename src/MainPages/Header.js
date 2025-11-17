// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <a href="/" className="logo-link">
            <img src="/logo.png" alt="BK Asset Xchange" className="logo" />
          </a>
        </div>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-section">
          <button className="auth-btn auth-signin">Sign In</button>
          <button className="auth-btn auth-signup">Sign Up</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMenu}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                <li className="mobile-nav-item">
                  <a href="/" className="mobile-nav-link" onClick={toggleMenu}>Home</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="/About" className="mobile-nav-link" onClick={toggleMenu}>About</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="/Services" className="mobile-nav-link" onClick={toggleMenu}>Services</a>
                </li>
                <li className="mobile-nav-item">
                  <a href="/Contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</a>
                </li>
              </ul>
            </nav>
            <div className="mobile-auth-section">
              <button className="mobile-auth-btn auth-signin">Sign In</button>
              <button className="mobile-auth-btn auth-signup">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// CSS Styles for Header
const headerStyles = `
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&family=Montserrat:wght@500&display=swap');
  
  /* Header Styles */
  .header {
    background-color: #1A2530;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 40px;
    height: 100px;
  }

  /* Logo Section */
  .logo-section {
    margin-right: auto;
  }

  .logo-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  .logo {
    height: 70px;
    width: auto;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.05);
  }

  /* Navigation */
  .nav {
    margin: 0 auto;
  }

  .nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 3rem;
  }

  .nav-link {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #FFFFFF;
    text-decoration: none;
    padding: 0.7rem 0;
    position: relative;
    transition: all 0.3s ease;
    font-size: 1.05rem;
    letter-spacing: 0.3px;
  }

  .nav-link:hover {
    color: #FFB92D;
    transform: translateY(-1px);
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #FFB92D, #FFD166);
    transition: width 0.3s ease;
    border-radius: 2px;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Auth Buttons */
  .auth-section {
    display: flex;
    gap: 1.2rem;
    margin-left: auto;
  }

  .auth-btn {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    letter-spacing: 0.3px;
    position: relative;
    overflow: hidden;
  }

  .auth-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .auth-btn:hover::before {
    left: 100%;
  }

  .auth-signin {
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #FFB92D;
    box-shadow: 0 2px 10px rgba(255, 185, 45, 0.2);
  }

  .auth-signin:hover {
    background-color: rgba(255, 185, 45, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 185, 45, 0.3);
  }

  .auth-signup {
    background: linear-gradient(135deg, #FFB92D, #FFD166);
    color: #1A2530;
    box-shadow: 0 2px 10px rgba(255, 185, 45, 0.3);
  }

  .auth-signup:hover {
    background: linear-gradient(135deg, #FFD166, #FFB92D);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 185, 45, 0.4);
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    margin-left: 1rem;
  }

  .menu-icon {
    display: flex;
    flex-direction: column;
    width: 26px;
    height: 20px;
    position: relative;
    transition: transform 0.3s ease;
  }

  .menu-icon span {
    background-color: #FFFFFF;
    height: 3px;
    width: 100%;
    border-radius: 3px;
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .menu-icon span:nth-child(1) {
    position: absolute;
    top: 0;
  }

  .menu-icon span:nth-child(2) {
    position: absolute;
    top: 8px;
  }

  .menu-icon span:nth-child(3) {
    position: absolute;
    top: 16px;
  }

  .menu-icon-open span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
    background-color: #FFB92D;
  }

  .menu-icon-open span:nth-child(2) {
    opacity: 0;
  }

  .menu-icon-open span:nth-child(3) {
    transform: rotate(-45deg);
    top: 8px;
    background-color: #FFB92D;
  }

  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(26, 37, 48, 0.98);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .mobile-menu-content {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    background: linear-gradient(135deg, #1A2530 0%, #223040 100%);
    padding: 2rem 40px;
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from { transform: translateY(-20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .mobile-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .mobile-nav-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.3s ease;
  }

  .mobile-nav-item:hover {
    background-color: rgba(255, 185, 45, 0.1);
  }

  .mobile-nav-link {
    display: block;
    padding: 1.2rem 0;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all 0.3s ease;
  }

  .mobile-nav-link:hover {
    color: #FFB92D;
    padding-left: 10px;
  }

  .mobile-auth-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .mobile-auth-btn {
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
    padding: 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }

  .mobile-auth-btn.auth-signin {
    background-color: transparent;
    color: #FFFFFF;
    border: 2px solid #FFB92D;
  }

  .mobile-auth-btn.auth-signin:hover {
    background-color: rgba(255, 185, 45, 0.1);
  }

  .mobile-auth-btn.auth-signup {
    background: linear-gradient(135deg, #FFB92D, #FFD166);
    color: #1A2530;
  }

  .mobile-auth-btn.auth-signup:hover {
    background: linear-gradient(135deg, #FFD166, #FFB92D);
  }

  /* Active State */
  .nav-link.active {
    color: #FFB92D;
  }

  .nav-link.active::after {
    width: 100%;
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .header-container {
      padding: 0 30px;
    }
    
    .nav-list {
      gap: 2rem;
    }

    .logo {
      height: 65px;
    }
  }

  @media (max-width: 900px) {
    .nav {
      display: none;
    }

    .auth-section {
      display: none;
    }

    .mobile-menu-btn {
      display: block;
    }

    .header-container {
      padding: 0 25px;
      height: 90px;
    }

    .logo {
      height: 60px;
    }
  }

  @media (max-width: 768px) {
    .header-container {
      padding: 0 20px;
      height: 85px;
    }

    .mobile-menu-content {
      padding: 2rem 20px;
    }

    .logo {
      height: 55px;
    }
  }

  @media (max-width: 640px) {
    .header-container {
      padding: 0 18px;
      height: 80px;
    }

    .logo {
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    .header-container {
      padding: 0 15px;
      height: 75px;
    }

    .logo {
      height: 45px;
    }
  }

  @media (max-width: 380px) {
    .header-container {
      padding: 0 12px;
      height: 70px;
    }

    .logo {
      height: 40px;
    }
  }
`;

// Inject styles
const headerStyleSheet = document.createElement('style');
headerStyleSheet.textContent = headerStyles;
document.head.appendChild(headerStyleSheet);

export default Header;