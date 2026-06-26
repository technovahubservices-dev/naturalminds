
import "../styles/components/Footer.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../asset/logo.png";

export default function Footer({ onNavigate }) {
  const socialLinks = [
    {
      label: "Instagram",
      className: "social-link--instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/mahimy_foods?igsh=YXJoYnJ5d21kNWVo",
    },
    {
      label: "WhatsApp",
      className: "social-link--whatsapp",
      icon: <FaWhatsapp />,
      href: "https://wa.me/919443311007",
    },
    {
      label: "Facebook",
      className: "social-link--facebook",
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/share/p/17qZKFdixv/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="container footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-brand-heading">
            <img
              className="footer-logo"
              src={logo}
              alt=""
            />
            <h2 className="brand-title">Mahimy Foods</h2>
          </div>

          <p>
            Freshly baked goodness crafted with premium ingredients,
            coconut milk inspiration, and wholesome nutrition for every
            family. Experience the perfect blend of taste, health and
            tradition.
          </p>

          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className={link.className}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <button onClick={() => onNavigate("about")}>
            About Us
          </button>

          <button onClick={() => onNavigate("contact")}>
            Contact Us
          </button>

          <button onClick={() => onNavigate("privacy-policy")}>
            Privacy Policy
          </button>

          <button onClick={() => onNavigate("terms-conditions")}>
            Terms & Conditions
          </button>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="contact-item">
            Tamil Nadu, India
          </div>

          <div className="contact-item">
            +91 94433 11007
          </div>

          <div className="contact-item">
            mahimyfoodsin@gmail.com
          </div>
        </div>

        {/* Our Promise */}
        <div className="footer-column">
          <h3>Our Promise</h3>

          <p className="footer-promise-text">
            Every batch is made with care, quality ingredients, and a focus on
            fresh, wholesome flavor.
          </p>

          <div className="promise-list">
            <div className="promise-item">Freshly baked with premium ingredients</div>
            <div className="promise-item">Made with coconut milk inspired recipes</div>
            <div className="promise-item">Perfect for family sharing and gifting</div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Mahimy Foods. All Rights Reserved.
        </p>
      </div>

      <div className="footer-bottom">
        <p>
          © Powered by <a href="https://www.technovahub.in">Technova Hub</a>
        </p>
      </div>
    </footer>
  );
}
