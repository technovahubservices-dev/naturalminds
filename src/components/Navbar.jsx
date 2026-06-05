import { useState } from 'react';

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav">
        <a className="brand" href="#top">
          Nature&apos;s Fresh
        </a>
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
        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          <a href="#products" onClick={closeMenu}>
            Products
          </a>
          <a href="#about" onClick={closeMenu}>
            Our Story
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a className="nav-links__cta" href="#contact" onClick={closeMenu}>
            Order Now
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={theme === 'dark'}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            onClick={onToggleTheme}
          >
            <span className="theme-toggle__icon" aria-hidden="true">
              {theme === 'light' ? '☀' : '☾'}
            </span>
            <span className="theme-toggle__label">
              {theme === 'light' ? 'Light' : 'Dark'}
            </span>
            <span className="theme-toggle__track" aria-hidden="true">
              <span className="theme-toggle__thumb" />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
