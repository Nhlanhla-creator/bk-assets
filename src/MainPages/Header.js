import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExplanationPopup, setShowExplanationPopup] = useState(false);
  const [popupAction, setPopupAction] = useState(null); // 'signin' or 'signup'
  const [isRedirecting, setIsRedirecting] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthButtonClick = (action) => {
    setPopupAction(action);
    setShowExplanationPopup(true);
  };

  const handleProceedToAuth = () => {
    setIsRedirecting(true);
    
    if (popupAction === 'signin') {
      setTimeout(() => {
        window.location.href = "https://www.bigmarketplace.biz/LoginRegister";
      }, 1000);
    } else if (popupAction === 'signup') {
      setTimeout(() => {
        window.location.href = "/signup";
      }, 1000);
    }
  };

  // Explanation Popup Component
  const ExplanationPopup = () => (
    <div className="explanation-popup-overlay">
      <div className="explanation-popup">
        <div className="popup-header">
          <div className="popup-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3>Redirecting to BIG Marketplace</h3>
          <button 
            className="popup-close-btn"
            onClick={() => {
              setShowExplanationPopup(false);
              setIsRedirecting(false);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="popup-content">
          {isRedirecting ? (
            <div className="redirecting-state">
              <div className="spinner">
                <svg className="spinner-svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4>Redirecting to BIG Marketplace...</h4>
              <p>Please wait while we take you to the {popupAction === 'signin' ? 'login' : 'registration'} page.</p>
            </div>
          ) : (
            <>
              <div className="explanation-text">
                <p><strong>You are being redirected to BIG Marketplace</strong></p>
                <p className="platform-description">The tech backbone for BK-AX</p>
              </div>
              
              <div className="popup-actions">
                <button 
                  className="proceed-btn"
                  onClick={handleProceedToAuth}
                >
                  {popupAction === 'signin' ? 'Proceed to Sign In' : 'Proceed to Sign Up'}
                </button>
                <button 
                  className="cancel-btn"
                  onClick={() => setShowExplanationPopup(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showExplanationPopup && <ExplanationPopup />}
      
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
            <button 
              onClick={() => handleAuthButtonClick('signin')}
              className="auth-btn auth-signin"
            >
              Sign in
            </button>
            <button 
              onClick={() => handleAuthButtonClick('signup')}
              className="auth-btn auth-signup"
            >
              Sign Up
            </button>
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
                <button 
                  onClick={() => handleAuthButtonClick('signin')}
                  className="mobile-auth-btn auth-signin"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => handleAuthButtonClick('signup')}
                  className="mobile-auth-btn auth-signup"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
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

        /* Explanation Popup Styles */
        .explanation-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(26, 37, 48, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .explanation-popup {
          background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
          border-radius: 20px;
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-out;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .popup-header {
          background: linear-gradient(135deg, #223040 0%, #1A2530 100%);
          color: white;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          position: relative;
        }

        .popup-icon {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .popup-icon svg {
          color: #FFB92D;
        }

        .popup-header h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          font-family: 'Manrope', sans-serif;
          flex: 1;
        }

        .popup-close-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .popup-close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .popup-content {
          padding: 40px 24px;
        }

        .explanation-text {
          text-align: center;
          margin-bottom: 32px;
        }

        .explanation-text p {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #272524;
          margin-bottom: 8px;
        }

        .explanation-text p:first-child {
          font-size: 20px;
          font-weight: 600;
          color: #223040;
          margin-bottom: 12px;
        }

        .platform-description {
          font-size: 16px !important;
          color: #6b7280 !important;
          font-weight: 500 !important;
        }

        .explanation-text strong {
          color: #223040;
        }

        .popup-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }

        .proceed-btn {
          flex: 1;
          background: linear-gradient(135deg, #FFB92D, #FFD166);
          color: #1A2530;
          border: none;
          padding: 16px 24px;
          border-radius: 8px;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .proceed-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 185, 45, 0.4);
        }

        .cancel-btn {
          flex: 1;
          background: transparent;
          color: #223040;
          border: 2px solid #223040;
          padding: 16px 24px;
          border-radius: 8px;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .cancel-btn:hover {
          background: #f3f4f6;
        }

        /* Redirecting State */
        .redirecting-state {
          text-align: center;
          padding: 40px 20px;
        }

        .spinner {
          margin: 0 auto 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spinner-svg {
          color: #FFB92D;
        }

        .redirecting-state h4 {
          color: #223040;
          font-size: 18px;
          margin: 0 0 12px 0;
          font-family: 'Manrope', sans-serif;
        }

        .redirecting-state p {
          color: #6b7280;
          font-size: 14px;
          margin: 0;
          font-family: 'Montserrat', sans-serif;
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

          .explanation-popup {
            margin: 20px;
          }

          .popup-actions {
            flex-direction: column;
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

          .popup-header {
            padding: 20px;
            flex-direction: column;
            text-align: center;
            gap: 12px;
          }

          .popup-header h3 {
            font-size: 18px;
          }

          .popup-close-btn {
            position: absolute;
            top: 16px;
            right: 16px;
          }

          .popup-content {
            padding: 32px 20px;
          }

          .explanation-text p:first-child {
            font-size: 18px;
          }

          .platform-description {
            font-size: 15px !important;
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

          .popup-content {
            padding: 24px 20px;
          }

          .explanation-text p:first-child {
            font-size: 17px;
          }

          .platform-description {
            font-size: 14px !important;
          }

          .proceed-btn,
          .cancel-btn {
            padding: 14px 20px;
            font-size: 15px;
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

          .explanation-text p:first-child {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;