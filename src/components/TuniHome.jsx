import {
  ArrowRight, Ban, Droplets, Feather, Heart, Leaf,
  ShieldCheck, Sparkles, Sprout, Sun, Wheat as WheatIcon,
} from "lucide-react";
import heroVisual from "../asset/01_hero_product_bread.png";
import whiteBreadImage from "../asset/03_white_bread.png";
import wheatBreadImage from "../asset/04_wheat_bread.png";
import qualityImage from "../asset/06_bread_quality_photo.png";
import lifestyleImage from "../asset/07_sandwich_lifestyle.png";
import ingredientLeftVisual from "../asset/07_left_wheat_composition.png";
import ingredientRightVisual from "../asset/06_right_ingredient_composition.png";
import "../styles/components/TuniHome.css";
import FounderStory from "./FounderStory";
import Testimonials from "./Testimonials";
import WhatsAppOrdering from "./WhatsAppOrdering";

const Button = ({ children, outline = false, onClick }) => (
  <button className={`tuni-btn ${outline ? "tuni-btn--outline" : ""}`} onClick={onClick}>
    {children}<ArrowRight size={16} />
  </button>
);

export default function TuniHome({ register, onNavigate, whatsappNumber }) {
  const go = (page) => onNavigate(page);
  const radialIngredients = [[Droplets, "Coconut Milk", "Creamy richness"], [Sparkles, "Dates", "Natural energy"], [Heart, "Honey", "Golden sweetness"], [WheatIcon, "Wheat", "Fiber-rich nutrition"], [Leaf, "Butter", "Smooth texture"]];
  const ingredientBenefits = [[Leaf,"Wholesome Ingredients","Pure & Natural"],[Heart,"Better Nutrition","For a Healthier You"],[Sprout,"Tradition Meets Modern Living","A Perfect Balance"],[Sun,"Goodness in Every Slice","Everyday, Naturally"]];
  const nutrition = [["Energy", "277 kcal / 100g"], ["Carbohydrate", "58.7g"], ["Protein", "6.8g"], ["Dietary Fiber", "4g"], ["Total Sugar", "10g"], ["Fat", "2g"], ["Sodium", "0.3g"], ["Cholesterol", "0.00g"]];
  const qualities = ["No Vanaspati", "No Artificial Compromise", "No Class 2 & 3 Preservatives", "Carefully Selected Ingredients"];
  const lifestyles = [[Sun, "Morning Energy", "Start your day nourished."], [Sparkles, "Healthy Snacking", "A wholesome anytime bite."], [Leaf, "Balanced Nutrition", "Purposeful everyday goodness."], [Heart, "Premium Taste", "Rich, memorable flavour."], [Feather, "Soft Texture", "Unmatched softness in every slice."], [Sprout, "Daily Wellness", "A better daily choice."]];

  return <div className="tuni-home">
    <section className="tuni-hero tuni-hero--full" ref={register}>
      <div className="tuni-hero__grain" aria-hidden="true" />
      <div className="tuni-wrap tuni-hero__grid">
        <div className="tuni-hero__copy">
          <span className="eyebrow">Tuni Breads</span>
          <h1>Traditional Goodness.<br />Modern Nutrient.</h1>
          <p>Tuni Breads by Mahimy Foods brings thoughtfully chosen ingredients and everyday goodness together in every loaf.</p>
          <div className="hero-actions"><Button onClick={() => go("products")}>ORDER NOW</Button><Button outline onClick={() => go("stores")}>FIND A STORE</Button></div>
        </div>
        <div className="tuni-hero__visual">
          <img className="hero-composite" src={heroVisual} alt="Tuni Breads pack with sliced wheat bread, dates and coconut" />
        </div>
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

    <section className="breads-section" id="breads" ref={register}>
      <div className="tuni-wrap breads-grid">
        <div className="breads-intro"><span className="eyebrow">Our Breads</span><h2>Meet Tuni Breads.</h2><p>Two everyday favourites, baked with care for your family.</p><Button onClick={() => go("products")}>View Our Breads</Button></div>
        <article className="bread-card"><div className="bread-card__image bread-card__image--wheat"><img src={wheatBreadImage} alt="Fresh sliced Tuni Wheat Bread" /></div><div><span className="bread-number">01</span><h3>Tuni Wheat Bread</h3><p>Wholesome wheat bread made for everyday meals.</p><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button></div></article>
        <article className="bread-card"><div className="bread-card__image"><img src={whiteBreadImage} alt="Fresh sliced Tuni White Bread" /></div><div><span className="bread-number">02</span><h3>Tuni White Bread</h3><p>Soft, fresh bread perfect for toast, sandwiches and family meals.</p><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button></div></article>
      </div>
    </section>

    <FounderStory onNavigate={onNavigate} />

    <section className="ingredient-section ingredient-story-v2" id="ingredients" ref={register}>
      <img className="ingredient-scene ingredient-scene--left" src={ingredientLeftVisual} alt="Golden wheat bundle and grains" />
      <img className="ingredient-scene ingredient-scene--right" src={ingredientRightVisual} alt="Coconut, dates, honey and butter ingredients" />
      <div className="ingredient-story-heading"><span className="eyebrow"><i/>The Ingredient Story<i/></span><h2>Where Nutrition Meets<br/>Indulgence</h2><p>Tuni Breads combines traditional nourishment with modern healthy eating —<br/>five purposeful ingredients, one remarkable loaf.</p></div>
      <div className="radial-story" aria-label="Five purposeful ingredients around Tuni Breads">
        <div className="radial-core"><WheatIcon size={25}/><strong>Tuni<br/>Breads</strong></div>
        {radialIngredients.map(([Icon,name,sub],i)=><div className={`radial-item radial-item--${i+1}`} key={name}><span><Icon size={24}/></span><strong>{name}</strong><small>{sub}</small></div>)}
        <svg className="radial-lines" viewBox="0 0 500 390" aria-hidden="true"><path d="M205 145 Q225 94 250 80 M175 175 Q125 140 85 150 M325 175 Q375 140 415 150 M205 245 Q155 280 125 320 M295 245 Q345 280 375 320"/></svg>
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

    <section className="lifestyle-section" ref={register}>
      <div className="tuni-wrap lifestyle-layout"><div><span className="eyebrow">Not Just Bread. A Lifestyle Choice.</span><h2>Goodness For A Healthier You</h2><div className="lifestyle-grid">{lifestyles.map(([Icon,t,d])=><div key={t}><span><Icon size={20}/></span><strong>{t}</strong><small>{d}</small></div>)}</div></div><div className="lifestyle-visual"><span>Make Every<br/><em>Meal Special</em></span><img src={lifestyleImage} alt="A wholesome Tuni bread meal"/></div></div>
    </section>

    <WhatsAppOrdering whatsappNumber={whatsappNumber} />
    <Testimonials />

  </div>;
}
