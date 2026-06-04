import { useState } from 'react';

export default function Navbar() {
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
        </div>
      </nav>
    </header>
  );
}
