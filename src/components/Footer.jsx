import { Sprout } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import "../styles/components/Footer.css";

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-wordmark">Tuni Breads</div>
          <p>Good food for a better tomorrow.</p>
          <div className="footer-flourish" aria-hidden="true"><span/><Sprout/><span/></div>
        </div>
        <div className="footer-column"><h3>Quick Links</h3>{[["home","Home"],["about","About Us"],["products","Our Breads"],["home","Quality"],["contact","Contact"]].map(([p,t])=><button key={t} onClick={()=>onNavigate(p)}>{t}</button>)}</div>
        <div className="footer-column"><h3>Our Breads</h3><button onClick={()=>onNavigate("products")}>White Bread</button><button onClick={()=>onNavigate("products")}>Wheat Bread</button></div>
        <div className="footer-column"><h3>Contact Us</h3><a href="https://www.mahimyfoods.in" target="_blank" rel="noreferrer">www.mahimyfoods.in</a><a href="tel:+919443311007">9443311007</a><div className="footer-social"><a href="https://www.instagram.com/mahimy_foods" aria-label="Instagram"><FaInstagram/></a><a href="https://www.facebook.com" aria-label="Facebook"><FaFacebookF/></a><a href="https://wa.me/919443311007" aria-label="WhatsApp"><FaWhatsapp/></a><a href="https://www.youtube.com" aria-label="YouTube"><FaYoutube/></a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2024 Tuni Breads. All Rights Reserved.</span><span>Inspired by Traditional Nutrition. Crafted for Modern Living.</span></div>
    </footer>
  );
}
