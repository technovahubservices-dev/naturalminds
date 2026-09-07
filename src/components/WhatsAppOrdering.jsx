import { ArrowRight, Check } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/components/WhatsAppOrdering.css";

const features = ["Quick responses", "Easy product enquiries", "Store availability support", "Order assistance", "Delivery / pickup updates", "Offers and product updates"];

export default function WhatsAppOrdering({ whatsappNumber }) {
  const message = "Hello Mahimy Foods, I would like to order Tuni Breads.";
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  return <section className="whatsapp-ordering" id="whatsapp-ordering" aria-labelledby="whatsapp-ordering-heading">
    <div className="whatsapp-ordering__visual"><img src="/images/tuni-whatsapp-ordering.png" alt="Ordering Tuni Breads from Mahimy Foods through WhatsApp" loading="lazy" /></div>
    <div className="whatsapp-ordering__content">
      <span className="whatsapp-ordering__label">EASY ORDERING</span>
      <h2 id="whatsapp-ordering-heading">Order Tuni Breads<br />on WhatsApp.</h2>
      <p className="whatsapp-ordering__subheading">Your everyday bread,<br />just a message away.</p>
      <p className="whatsapp-ordering__description">Ordering Tuni Breads should be simple. Message Mahimy Foods on WhatsApp to check availability, find the nearest store, or get help with your order.</p>
      <ul>{features.map(feature => <li key={feature}><Check size={14} aria-hidden="true" />{feature}</li>)}</ul>
      <p className="whatsapp-ordering__note">Simply message us to get started.<br />Good bread should be easy to find.</p>
      <a className="whatsapp-ordering__cta" href={href} target="_blank" rel="noopener noreferrer"><FaWhatsapp size={21} aria-hidden="true" />Order on WhatsApp <ArrowRight className="whatsapp-ordering__arrow" size={18} aria-hidden="true" /></a>
      <small className="whatsapp-ordering__caption">Chat with Mahimy Foods</small>
    </div>
  </section>;
}
