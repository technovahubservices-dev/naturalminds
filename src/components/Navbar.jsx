import { useState } from "react";

export default function Navbar({
  theme,
  onToggleTheme,
  onNavigate,
  cartCount = 0,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const handleNavigate = (page) => {
    onNavigate(page);
    closeMenu();
  };

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <div className="container announcement-bar__inner">
          <span>Free shipping on orders over Rs. 999</span>
          <div className="announcement-bar__links">
            <button type="button" onClick={() => handleNavigate("orders")}>
              My Orders
            </button>
            <button type="button" onClick={() => handleNavigate("orders")}>
              Track Order
            </button>
            <button type="button" onClick={() => handleNavigate("contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <nav className="site-nav">
        <div className="site-nav__top">
          <button
            className="brand brand-button"
            type="button"
            onClick={() => handleNavigate("home")}
          >
            Mahima Bread
          </button>

          <div className={`nav-links ${isOpen ? "nav-links--open" : ""}`}>
            <button type="button" onClick={() => handleNavigate("home")}>
              Home
            </button>
            <button type="button" onClick={() => handleNavigate("about")}>
              About Us
            </button>
            <button type="button" onClick={() => handleNavigate("products")}>
              Products
            </button>
            <button type="button" onClick={() => handleNavigate("orders")}>
              Order History
            </button>
            <button type="button" onClick={() => handleNavigate("contact")}>
              Contact
            </button>
            <button
              type="button"
              className="nav-links__cta"
              onClick={() => handleNavigate("products")}
            >
              Shop Now
            </button>
          </div>

          <div className="nav-side">
            <div className="nav-actions">
              <button
                className="theme-toggle"
                type="button"
                aria-pressed={theme === "dark"}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                onClick={onToggleTheme}
              >
                <span className="theme-toggle__icon">
                  {theme === "light" ? "Sun" : "Moon"}
                </span>

               

                <span className="theme-toggle__track">
                  <span className="theme-toggle__thumb" />
                </span>
              </button>

              <button
                type="button"
                className="nav-cart"
                onClick={() => handleNavigate("cart")}
                aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
              >
                <span className="nav-cart__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="42" height="42">
                    <circle cx="9" cy="20" r="1.5" />
                    <circle cx="18" cy="20" r="1.5" />
                    <path d="M1 1h4l2.68 13.39a1 1 0 0 0 .99.81h9.72a1 1 0 0 0 .99-.81L23 6H6" />
                  </svg>
                </span>

                {cartCount > 0 && (
                  <span className="nav-cart__badge">{cartCount}</span>
                )}
              </button>

              <button
                className="nav-toggle"
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
