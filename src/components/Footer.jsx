

export default function Footer({ onNavigate }) {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/mahimy_foods?igsh=YXJoYnJ5d21kNWVo",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/p/17qZKFdixv/",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8.5h2V5h-2.4C10.9 5 9.8 6.4 9.8 8.4V10H7.5v3.5h2.3V19h3.6v-5.5H16l.5-3.5h-3.1V8.7c0-.1.1-.2.6-.2Z" />
        </svg>
      ),
    },
    // {
    //   label: "LinkedIn",
    //   href: "https://www.linkedin.com/",
    //   icon: (
    //     <svg viewBox="0 0 24 24" aria-hidden="true">
    //       <path d="M6.5 8.5H3.8V20h2.7V8.5ZM5.1 7.1c.9 0 1.7-.7 1.7-1.7S6 .8 5.1.8 3.3 1.5 3.3 2.5s.8 1.7 1.8 1.7Zm4.2 1.4V20H12v-6.2c0-1.6.3-3.2 2.3-3.2 1.9 0 1.9 1.8 1.9 3.3V20h2.7v-6.8c0-3.4-.7-6-4.4-6-1.8 0-3 1-3.5 1.8h-.1Z" />
    //     </svg>
    //   ),
    // },
    // {
    //   label: "YouTube",
    //   href: "https://www.youtube.com/",
    //   icon: (
    //     <svg viewBox="0 0 24 24" aria-hidden="true">
    //       <path d="M21.6 8.2c-.2-.9-.9-1.6-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9.8 2 12 2 12s0 2.2.4 3.8c.2.9.9 1.6 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-3.8.4-3.8s0-2.2-.4-3.8ZM10 15.1V8.9l5.4 3.1L10 15.1Z" />
    //     </svg>
    //   ),
    // },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Mahima Bread</h3>
          <p>
          Warm bread and coconut milk inspired styling, soft cream tones, toasted golden accents, and natural coconut hues that create a fresh, comforting storefront experience on every screen.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Explore</h4>
          <div className="footer-links">
            <button type="button" onClick={() => onNavigate("about")}>
              About Us
            </button>
            <button type="button" onClick={() => onNavigate("privacy-policy")}>
              Privacy Policy
            </button>
            <button type="button" onClick={() => onNavigate("terms-conditions")}>
              Terms &amp; Conditions
            </button>
            <button type="button" onClick={() => onNavigate("contact")}>
              Contact
            </button>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Social</h4>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={link.label}
              >
                <span className="social-links__icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-copy">&copy; 2026 Mahima Bread. Premium bakery theme.</div>
    </footer>
  );
}