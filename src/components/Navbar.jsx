import { useRef, useState } from "react";
import { ArrowRight, BookOpen, ChevronDown, Home, Leaf, Mail, Menu, Moon, Route, Search, ShieldCheck, ShoppingBag, Sprout, Sun, Target, Wheat, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import brandLogo from "../asset/logo-transparent.png";
import "../styles/components/Navbar.css";

const links = [["home", "Home", Home], ["about", "About Us", BookOpen], ["products", "Our Breads", Wheat], ["ingredients", "Ingredients", Leaf], ["quality", "Our Promise", ShieldCheck], ["contact", "Contact", Mail]];
const aboutLinks = [["about-story", "Our Story", BookOpen], ["about-journey", "Our Journey", Route], ["about-mission", "Our Mission", Target], ["about-values", "Our Values", Sprout]];

export default function Navbar({ onNavigate, cartCount = 0, activePage = "home", theme = "light", onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState("");
  const menuToggle = useRef(null);
  const navigate = (page, section) => { onNavigate(page, section); setOpen(false); setAboutOpen(""); };
  const closeOnEscape = (event) => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    if (aboutOpen) {
      event.target.closest(".nav-about")?.querySelector(".nav-about-toggle")?.focus();
      setAboutOpen("");
    } else if (open) {
      setOpen(false);
      menuToggle.current?.focus();
    }
  };
  const renderLinks = (mode) => links.map(([page, label, Icon]) => {
    const item = <button className={`nav-pill ${activePage === page ? "is-active" : ""}`} aria-current={activePage === page ? "page" : undefined} onClick={() => navigate(page)}><Icon size={17} aria-hidden="true" /><span>{label}</span></button>;
    if (page !== "about") return <div className="nav-item" key={page}>{item}</div>;
    const expanded = aboutOpen === mode;
    return <div className="nav-about" key={page}
      onMouseEnter={() => { if (mode === "desktop") setAboutOpen(mode); }}
      onMouseLeave={(event) => { if (mode === "desktop" && !event.currentTarget.contains(document.activeElement)) setAboutOpen(""); }}
      onFocus={(event) => { if (mode === "desktop" && !event.target.closest(".nav-about-toggle") && !event.currentTarget.contains(event.relatedTarget)) setAboutOpen(mode); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setAboutOpen(""); }}>
      <div className={`nav-about-pair ${activePage === page ? "is-active" : ""}`}>{item}<button className="nav-about-toggle" aria-label="Toggle About Us sections" aria-expanded={expanded} aria-haspopup="true" aria-controls={`${mode}-about-links`} onClick={() => setAboutOpen(expanded ? "" : mode)}><ChevronDown size={14} aria-hidden="true" /></button></div>
      <div className="nav-dropdown" id={`${mode}-about-links`} hidden={!expanded}>{aboutLinks.map(([id, title, SubIcon]) => <button key={id} onClick={() => navigate("about", id)}><SubIcon size={17} aria-hidden="true" />{title}</button>)}</div>
    </div>;
  });
  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="announcement">
        <span>Inspired by Traditional Nutrition. Crafted for Modern Living.</span>
        <div className="announcement__right">
          <a href="https://www.instagram.com/mahimy_foods" aria-label="Instagram"><FaInstagram/></a>
          <a href="https://www.facebook.com/profile.php?id=61586566737534" aria-label="Facebook"><FaFacebookF/></a>
          <a href="https://www.youtube.com/channel/UCNhmWkyfDEnlrX9Eh0Yf5XQ" aria-label="YouTube"><FaYoutube/></a>
        </div>
      </div>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-brand"><button className="brand-button" onClick={() => navigate("home")} aria-label="Mahimy Foods home"><img className="nav-brand-logo" src={brandLogo} alt="" /><span className="nav-brand-copy"><span>Mahimy Foods</span><span className="nav-brand-tagline">GOODNESS IN EVERY SLICE</span></span></button></div>
        <div className="nav-links">{renderLinks("desktop")}</div>
        <div className="nav-actions">
          <button className="nav-search nav-utility" onClick={() => navigate("products")} aria-label="Search our breads"><Search size={18}/></button>
          <button className="nav-cart nav-utility" onClick={() => navigate("cart")} aria-label="Shopping cart"><ShoppingBag size={18}/>{cartCount>0&&<span>{cartCount}</span>}</button>
          <button className="site-theme-toggle nav-utility" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"}>{theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button className="header-cta" onClick={() => navigate("products")}>Order Now <ArrowRight size={16} aria-hidden="true" /></button>
          <button className="nav-toggle nav-utility" ref={menuToggle} onClick={() => { setOpen(!open); setAboutOpen(""); }} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">{open?<X size={20}/>:<Menu size={20}/>}</button>
        </div>
      </nav>
      <nav id="mobile-navigation" aria-label="Mobile navigation" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} hidden={!open}>
        {renderLinks("mobile")}
        <button className="header-cta" onClick={() => navigate("products")}>Order Now <ArrowRight size={16} aria-hidden="true" /></button>
      </nav>
    </header>
  );
}
