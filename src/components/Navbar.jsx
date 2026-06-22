
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
  activePage = "home",
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
          className={activePage === "home" ? "brand-button is-active" : "brand-button"}
          onClick={() => handleNavigate("home")}
          aria-label="mahimy foods home"
          aria-current={activePage === "home" ? "page" : undefined}
        >
          <span className="brand-logo-shell" aria-hidden="true">
            <img
              className="brand-logo"
              src={logo}
              alt=""
            />
          </span>
          <span className="brand-text">mahimy foods</span>
        </button>

        {/* Desktop Menu */}
        <div className="nav-links">
          <button
            className={activePage === "home" ? "is-active" : ""}
            onClick={() => handleNavigate("home")}
            aria-current={activePage === "home" ? "page" : undefined}
          >
            Home
          </button>
          <button
            className={activePage === "about" ? "is-active" : ""}
            onClick={() => handleNavigate("about")}
            aria-current={activePage === "about" ? "page" : undefined}
          >
            About Us
          </button>
          <button
            className={activePage === "products" ? "is-active" : ""}
            onClick={() => handleNavigate("products")}
            aria-current={activePage === "products" ? "page" : undefined}
          >
            Products
          </button>
          <button
            className={activePage === "orders" ? "is-active" : ""}
            onClick={() => handleNavigate("orders")}
            aria-current={activePage === "orders" ? "page" : undefined}
          >
            Order History
          </button>
          <button
            className={activePage === "contact" ? "is-active" : ""}
            onClick={() => handleNavigate("contact")}
            aria-current={activePage === "contact" ? "page" : undefined}
          >
            Contact
          </button>
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
            className={activePage === "cart" ? "nav-cart is-active" : "nav-cart"}
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

        <button className={activePage === "home" ? "is-active" : ""} onClick={() => handleNavigate("home")} aria-current={activePage === "home" ? "page" : undefined}>
          Home
        </button>

        <button className={activePage === "about" ? "is-active" : ""} onClick={() => handleNavigate("about")} aria-current={activePage === "about" ? "page" : undefined}>
          About Us
        </button>

        <button className={activePage === "products" ? "is-active" : ""} onClick={() => handleNavigate("products")} aria-current={activePage === "products" ? "page" : undefined}>
          Products
        </button>

        <button className={activePage === "orders" ? "is-active" : ""} onClick={() => handleNavigate("orders")} aria-current={activePage === "orders" ? "page" : undefined}>
          Order History
        </button>

        <button className={activePage === "contact" ? "is-active" : ""} onClick={() => handleNavigate("contact")} aria-current={activePage === "contact" ? "page" : undefined}>
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
