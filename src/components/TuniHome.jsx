import { useEffect, useState } from "react";
import { apiRequest, getProductName } from "../lib/api";
import {
  ArrowRight, Ban, Droplets, Heart, Leaf,
  ShieldCheck, Sprout, Sun, Wheat as WheatIcon,
} from "lucide-react";
import heroVisual from "../asset/01_hero_product_bread.png";
import whiteBreadImage from "../asset/03_white_bread.png";
import wheatBreadImage from "../asset/04_wheat_bread.png";
import qualityImage from "../asset/06_bread_quality_photo.png";
import ingredientLeftVisual from "../asset/07_left_wheat_composition.png";
import ingredientRightVisual from "../asset/06_right_ingredient_composition.png";
import coconutIngredient from "../asset/02_coconut_milk_splash.png";
import datesIngredient from "../asset/03_dates_bowl.png";
import honeyIngredient from "../asset/04_honey_jar_dipper.png";
import butterIngredient from "../asset/05_butter_cubes.png";
import wheatIngredient from "../asset/05_wheat_ingredient_visual.png";
import "../styles/components/TuniHome.css";
import "../styles/components/IngredientOrbit.css";
import FounderStory from "./FounderStory";
import Testimonials from "./Testimonials";
import WhatsAppOrdering from "./WhatsAppOrdering";

const Button = ({ children, outline = false, onClick }) => (
  <button className={`tuni-btn ${outline ? "tuni-btn--outline" : ""}`} onClick={onClick}>
    {children}<ArrowRight size={16} />
  </button>
);

export default function TuniHome({ register, onNavigate, whatsappNumber, onAddToCart }) {
  const [addingBread, setAddingBread] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const addBread = async (type) => {
    if (addingBread) return;
    setAddingBread(type);
    setCartMessage("");
    try {
      const data = await apiRequest(`/products?ts=${Date.now()}`);
      const products = Array.isArray(data) ? data : Array.isArray(data?.products) ? data.products : Array.isArray(data?.data) ? data.data : [];
      const matches = products.filter(product => {
        const name = getProductName(product).toLowerCase();
        return name.includes(type) && name.includes("bread");
      });
      if (matches.length !== 1 || !(matches[0]._id || matches[0].id || matches[0].productId)) {
        throw new Error("Please select this bread from Our Breads to add it to your cart.");
      }
      await onAddToCart(matches[0]);
      setCartMessage(`${getProductName(matches[0])} added to cart.`);
    } catch (error) {
      setCartMessage(error.message || "Unable to add bread to cart. Please try again.");
    } finally {
      setAddingBread("");
    }
  };
  const [reduceMotion, setReduceMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [videoFailed, setVideoFailed] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  const go = (page) => onNavigate(page);
  const radialIngredients = [[coconutIngredient, "Coconut Milk", "Creamy richness"], [honeyIngredient, "Honey", "Golden sweetness"], [butterIngredient, "Butter", "Smooth texture"], [wheatIngredient, "Wheat", "Everyday grain"], [datesIngredient, "Dates", "Natural sweetness"]];
  const ingredientBenefits = [[Leaf,"Wholesome Ingredients","Pure & Natural"],[Heart,"Better Nutrition","For a Healthier You"],[Sprout,"Tradition Meets Modern Living","A Perfect Balance"],[Sun,"Goodness in Every Slice","Everyday, Naturally"]];
  const nutrition = [["Energy", "277 kcal / 100g"], ["Carbohydrate", "58.7g"], ["Protein", "6.8g"], ["Dietary Fiber", "4g"], ["Total Sugar", "10g"], ["Fat", "2g"], ["Sodium", "0.3g"], ["Cholesterol", "0.00g"]];
  const qualities = ["No Vanaspati", "No Artificial Compromise", "No Class 2 & 3 Preservatives", "Carefully Selected Ingredients"];

  return <div className="tuni-home">
    <section className="tuni-film" aria-labelledby="tuni-film-heading">
      <div className="tuni-film__media" aria-hidden="true">
        {reduceMotion || videoFailed ? (
          <img src={heroVisual} alt="" />
        ) : (
          <video autoPlay muted loop playsInline preload="metadata" poster={heroVisual} onError={() => setVideoFailed(true)} tabIndex={-1}>
            <source src="/videos/tuni-breads-hero.mp4" type="video/mp4" onError={() => setVideoFailed(true)} />
          </video>
        )}
      </div>
      <div className="tuni-film__overlay" aria-hidden="true" />
      <div className="tuni-film__copy">
        <span className="tuni-film__label">TUNI BREADS</span>
        <h1 id="tuni-film-heading"><span>Traditional Goodness.</span><span>Modern Nutrition.</span></h1>
        <p>Thoughtfully made with familiar ingredients for everyday family moments.</p>
        <div className="tuni-film__actions"><Button onClick={() => go("products")}>ORDER NOW</Button></div>
      </div>
    </section>

    <section className="tuni-philosophy" aria-labelledby="tuni-philosophy-heading">
      <div className="tuni-philosophy__inner">
        <span className="tuni-philosophy__label">OUR PHILOSOPHY</span>
        <h2 id="tuni-philosophy-heading">Traditional Goodness.<br />Modern Nutrition.</h2>
        <p>At Mahimy Foods, we bring traditional inspiration together with thoughtfully chosen ingredients to create Tuni Breads for today’s everyday meals.</p>
        <ul className="tuni-philosophy__ingredients" aria-label="Our ingredients">{["COCONUT MILK", "DATES", "HONEY", "BUTTER"].map(ingredient => <li key={ingredient}>{ingredient}</li>)}</ul>
        <button className="tuni-philosophy__link" onClick={() => go("about")}>DISCOVER OUR STORY <ArrowRight size={16} aria-hidden="true" /></button>
      </div>
    </section>

    <section className="ingredients-banner" id="story" ref={register} aria-labelledby="ingredients-banner-title">
      <div className="ingredients-banner__copy">
        <span className="ingredients-banner__label">OUR INGREDIENTS</span>
        <h2 id="ingredients-banner-title">Nature’s Goodness<br />in Every Slice.</h2>
        <p>We bring together thoughtfully chosen ingredients to create Tuni Breads with wholesome flavour, softness and everyday goodness.</p>
        <button className="ingredients-banner__button" onClick={() => go("ingredients")}>Explore Our Ingredients <ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <div className="ingredients-banner__visual">
        <img src="/images/tuni-ingredients-only.png" alt="Tuni Breads ingredients: coconut milk, dates, honey and butter" loading="lazy" />
      </div>
    </section>

    <section className="breads-section" id="breads" ref={register}>
      <div className="bread-cart-message" role="status" aria-live="polite">{cartMessage}</div>
      <div className="tuni-wrap breads-grid">
        <div className="breads-intro"><span className="eyebrow">Our Breads</span><h2>Meet Tuni Breads.</h2><p>Two everyday favourites, baked with care for your family.</p><Button onClick={() => go("products")}>View Our Breads</Button></div>
        <article className="bread-card"><div className="bread-card__image bread-card__image--wheat"><img src={wheatBreadImage} alt="Fresh sliced Tuni Wheat Bread" /></div><div><span className="bread-number">01</span><h3>Tuni Wheat Bread</h3><p>Wholesome wheat bread made for everyday meals.</p><div className="bread-card__actions"><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button><button className="bread-card__add" disabled={Boolean(addingBread)} onClick={() => addBread("wheat")} aria-label="Add Tuni wheat bread to cart">{addingBread === "wheat" ? "Adding…" : "Add to Cart"}</button></div></div></article>
        <article className="bread-card"><div className="bread-card__image"><img src={whiteBreadImage} alt="Fresh sliced Tuni White Bread" /></div><div><span className="bread-number">02</span><h3>Tuni White Bread</h3><p>Soft, fresh bread perfect for toast, sandwiches and family meals.</p><div className="bread-card__actions"><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button><button className="bread-card__add" disabled={Boolean(addingBread)} onClick={() => addBread("white")} aria-label="Add Tuni white bread to cart">{addingBread === "white" ? "Adding…" : "Add to Cart"}</button></div></div></article>
      </div>
    </section>

    <section className="tuni-brand-story" id="brand-story" ref={register} aria-labelledby="brand-story-heading" style={{ "--story-image": "url('/image/tuni-story-wheat-bg.png')" }}>
      <div className="tuni-brand-story__panel">
        <div className="tuni-brand-story__copy">
          <span className="tuni-brand-story__label">OUR STORY</span>
          <h2 id="brand-story-heading">Rooted in Tradition.<br />Baked for Today.</h2>
          <p>Our story is inspired by a simple tradition — the timeless pairing of coconut and pepper. Building on that foundation, Mahimy Foods thoughtfully brings together coconut milk, dates, honey and butter to create Tuni Breads for today’s everyday meals.</p>
          <p className="tuni-brand-story__note">Traditional inspiration, thoughtfully crafted for modern families.</p>
          <button className="tuni-brand-story__cta" onClick={() => go("about")}>READ OUR FULL STORY <ArrowRight size={18} aria-hidden="true" /></button>
        </div>
        <div className="tuni-brand-story__decoration" aria-hidden="true"><span>TRADITION</span><span>GOODNESS</span><span>CRAFT</span><span>BETTER TOMORROW</span></div>
      </div>
    </section>

    <FounderStory onNavigate={onNavigate} />

    <section className="ingredient-section ingredient-story-v2 ingredient-showcase" id="ingredients" ref={register} aria-label="Tuni Breads: five purposeful ingredients">
      <div className="ingredient-composition">
      <img className="ingredient-scene ingredient-scene--left" src={ingredientLeftVisual} alt="Golden wheat bundle and grains" />
      <img className="ingredient-scene ingredient-scene--right" src={ingredientRightVisual} alt="Coconut, dates, honey and butter ingredients" />
      <div className="ingredient-orbit" role="group" aria-label="Five purposeful ingredients around Tuni Breads. Hover or focus an ingredient to pause the orbit.">
        <div className="ingredient-orbit__center"><WheatIcon size={34} aria-hidden="true"/><h2>Tuni<br/>Breads</h2><small>FIVE PURPOSEFUL<br/>INGREDIENTS</small></div>
        <div className="ingredient-orbit__track" aria-hidden="true" />
        <div className="ingredient-orbit__rotor">
          {radialIngredients.map(([photo,name,sub],i) => {
            const angle = (i * 72 - 90) * Math.PI / 180;
            return <div className="ingredient-orbit__position" key={name} style={{left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%`}}>
              <div className="ingredient-orbit__upright">
                <div className="ingredient-orbit__item" tabIndex={0}>
                  <span className="ingredient-orbit__photo"><img src={photo} alt="" loading="lazy" decoding="async" /></span>
                  <span className="ingredient-orbit__label"><strong>{name}</strong><small>{sub}</small></span>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
      </div>
      <div className="ingredient-benefit-bar">{ingredientBenefits.map(([Icon,title,sub])=><div key={title}><span><Icon size={23}/></span><p><strong>{title}</strong><small>{sub}</small></p></div>)}</div>
    </section>

    <section className="quality-section" id="quality" ref={register} aria-label="Our Promise">
      <div className="quality-photo"><img src={qualityImage} alt="Freshly sliced bread with clean ingredients and honest baking"/></div>
      <div className="quality-copy"><span className="eyebrow">OUR PROMISE</span><div className="quality-list">{qualities.map((q, i) => <div key={q}><span>{i < 3 ? <Ban size={20}/> : <ShieldCheck size={20}/>}</span><p>{q}</p></div>)}</div><p className="quality-caption"><strong>Premium Quality Standards</strong><br/>Transparency and quality are baked into every loaf.<br/><strong>Balanced Taste + Nutrition</strong></p></div>
    </section>

    <section className="nutrition-section" ref={register}>
      <div className="tuni-wrap"><div className="section-heading section-heading--left"><span className="eyebrow">Nutrition Facts</span><h2>Balanced Nutrition Profile</h2></div><div className="nutrition-grid">{nutrition.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="nutrition-benefits">{[[Leaf,"Fiber Rich"],[Droplets,"Balanced Energy"],[Heart,"Low Cholesterol"],[Sprout,"Functional Ingredients"]].map(([Icon,t])=><span key={t}><Icon size={20}/>{t}</span>)}</div><p className="nutrition-note">Crafted using Wheat Flour, Milk Powder, Coconut Milk, Honey, Butter and Functional Ingredients.</p></div>
    </section>

    <WhatsAppOrdering whatsappNumber={whatsappNumber} />
    <Testimonials />

  </div>;
}
