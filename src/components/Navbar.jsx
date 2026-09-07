import { useState } from "react";
import { Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/components/Navbar.css";

export default function Navbar({ onNavigate, cartCount = 0, activePage = "home", theme = "light", onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const links = [["home","Home"],["about","About Us"],["products","Our Breads"],["ingredients","Ingredients"],["quality","Our Promise"],["contact","Contact"]];
  const navigate = (page) => { onNavigate(page); setOpen(false); };
  const handle = (page) => {
    navigate(page);
  };
  return (
    <header className="site-header">
      <div className="announcement">
        <span>Inspired by Traditional Nutrition. Crafted for Modern Living.</span>
        <div className="announcement__right">
          <a href="https://www.instagram.com/mahimy_foods" aria-label="Instagram"><FaInstagram/></a>
          <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF/></a>
          <a href="https://www.youtube.com" aria-label="YouTube"><FaYoutube/></a>
        </div>
      </div>
      <nav className="site-nav">
        <button className="brand-button" onClick={() => handle("home")} aria-label="Mahimy Foods home">Mahimy Foods</button>
        <div className="nav-links">{links.map(([page,label]) => <button className={activePage===page?"is-active":""} key={page} onClick={() => handle(page)}>{label}</button>)}</div>
        <div className="nav-actions">
          <button className="nav-search" onClick={() => handle("products")} aria-label="Search our breads"><Search size={18}/></button>
          <button className="nav-cart" onClick={() => navigate("cart")} aria-label="Shopping cart"><ShoppingBag size={18}/>{cartCount>0&&<span>{cartCount}</span>}</button>
          <button className="site-theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "dark"}>{theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <button className="header-cta" onClick={() => handle("products")}>Order Now</button>
          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
        </div>
      </nav>
      <div className={`mobile-menu ${open?"mobile-menu--open":""}`}>{links.map(([page,label])=><button key={page} onClick={()=>handle(page)}>{label}</button>)}<button onClick={()=>navigate("cart")}>Cart {cartCount ? `(${cartCount})` : ""}</button><button className="mobile-theme-toggle" type="button" onClick={onToggleTheme}>{theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>} {theme === "dark" ? "Light mode" : "Dark mode"}</button><button className="header-cta" onClick={()=>handle("products")}>Order Now</button></div>
    </header>
  );
}
