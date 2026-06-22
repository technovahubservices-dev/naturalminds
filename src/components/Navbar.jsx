
import "../styles/components/Navbar.css";
import { useState } from "react";
import {
  ShoppingCart,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import logo from "../asset/logo.png";

export default function Navbar({
  theme,
  onToggleTheme,
  onNavigate,
  cartCount = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="site-header">

      {/* Announcement Bar */}
      

      {/* Navbar */}
      <nav className="site-nav">

        {/* Logo */}
        <button
          className="brand-button"
          onClick={() => handleNavigate("home")}
          aria-label="mahimy foods home"
        >
          <img
            className="brand-logo"
            src={logo}
            alt=""
          />
          <span className="brand-text">mahimy foods</span>
        </button>

        {/* Desktop Menu */}
        <div className="nav-links">
          <button onClick={() => handleNavigate("home")}>Home</button>
          <button onClick={() => handleNavigate("about")}>About Us</button>
          <button onClick={() => handleNavigate("products")}>Products</button>
          <button onClick={() => handleNavigate("orders")}>Order History</button>
          <button onClick={() => handleNavigate("contact")}>Contact</button>
        </div>

        {/* Actions */}
        <div className="nav-actions">

          <button
            className="theme-toggle"
            type="button"
            aria-pressed={theme === "dark"}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            onClick={onToggleTheme}
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
            <span className="theme-toggle__label">
              {theme === "light" ? "Dark" : "Light"}
            </span>
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
          </button>

          {/* Cart */}
          <button
            className="nav-cart"
            onClick={() => handleNavigate("cart")}
          >
            <ShoppingCart size={22} />

            {cartCount > 0 && (
              <span className="nav-cart__badge">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            className="nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>

        <button onClick={() => handleNavigate("home")}>
          Home
        </button>

        <button onClick={() => handleNavigate("about")}>
          About Us
        </button>

        <button onClick={() => handleNavigate("products")}>
          Products
        </button>

        <button onClick={() => handleNavigate("orders")}>
          Order History
        </button>

        <button onClick={() => handleNavigate("contact")}>
          Contact
        </button>

        <button
          className="shop-btn"
          onClick={() => handleNavigate("products")}
        >
          Shop Now
        </button>

      </div>

      {isOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
