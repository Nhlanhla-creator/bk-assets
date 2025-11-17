// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              &copy; 2025 BK-AX (Pty) Ltd. All rights reserved.
            </div>
            <div className="footer-legal">
              <a href="/privacy" className="legal-link">Privacy Policy</a>
              <a href="/terms" className="legal-link">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// CSS Styles for Footer
const footerStyles = `
  /* Footer Styles */
  .footer {
    background-color: #1A2530;
    color: #ACB9C0;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Footer Bottom */
  .footer-bottom {
    padding: 2rem 0;
  }

  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .copyright {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    color: #ACB9C0;
  }

  .footer-legal {
    display: flex;
    gap: 2rem;
  }

  .legal-link {
    color: #ACB9C0;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }

  .legal-link:hover {
    color: #FFB92D;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .footer-bottom-content {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .footer-legal {
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .footer-container {
      padding: 0 15px;
    }

    .footer-legal {
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`;

// Inject styles
const footerStyleSheet = document.createElement('style');
footerStyleSheet.textContent = footerStyles;
document.head.appendChild(footerStyleSheet);

export default Footer;