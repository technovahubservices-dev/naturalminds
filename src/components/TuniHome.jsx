import {
  ArrowRight, Ban, Droplets, Feather, Heart, Leaf,
  ShieldCheck, Sparkles, Sprout, Sun, Wheat as WheatIcon,
} from "lucide-react";
import heroVisual from "../asset/01_hero_product_bread.png";
import originImage from "../asset/02_coconut_dates_milk.png";
import whiteBreadImage from "../asset/03_white_bread.png";
import wheatBreadImage from "../asset/04_wheat_bread.png";
import qualityImage from "../asset/06_bread_quality_photo.png";
import lifestyleImage from "../asset/07_sandwich_lifestyle.png";
import ingredientLeftVisual from "../asset/07_left_wheat_composition.png";
import ingredientRightVisual from "../asset/06_right_ingredient_composition.png";
import "../styles/components/TuniHome.css";

const Button = ({ children, outline = false, onClick }) => (
  <button className={`tuni-btn ${outline ? "tuni-btn--outline" : ""}`} onClick={onClick}>
    {children}<ArrowRight size={16} />
  </button>
);

export default function TuniHome({ register, onNavigate }) {
  const go = (page) => onNavigate(page);
  const trust = [[Leaf, "Natural Ingredients"], [Heart, "Wholesome Nutrition"], [WheatIcon, "Better Everyday Living"]];
  const origin = [["Coconut", "Natural Energy"], ["Dates", "Iron & Fiber Rich"], ["Functional Blend", "Everyday Vitality"]];
  const radialIngredients = [[Droplets, "Coconut Milk", "Creamy richness"], [Sparkles, "Dates", "Natural energy"], [Heart, "Honey", "Golden sweetness"], [WheatIcon, "Wheat", "Fiber-rich nutrition"], [Leaf, "Butter", "Smooth texture"]];
  const ingredientBenefits = [[Leaf,"Wholesome Ingredients","Pure & Natural"],[Heart,"Better Nutrition","For a Healthier You"],[Sprout,"Tradition Meets Modern Living","A Perfect Balance"],[Sun,"Goodness in Every Slice","Everyday, Naturally"]];
  const nutrition = [["Energy", "277 kcal / 100g"], ["Carbohydrate", "58.7g"], ["Protein", "6.8g"], ["Dietary Fiber", "4g"], ["Total Sugar", "10g"], ["Fat", "2g"], ["Sodium", "0.3g"], ["Cholesterol", "0.00g"]];
  const qualities = ["No Vanaspati", "No Artificial Compromise", "No Class 2 & 3 Preservatives", "Carefully Selected Ingredients"];
  const lifestyles = [[Sun, "Morning Energy", "Start your day nourished."], [Sparkles, "Healthy Snacking", "A wholesome anytime bite."], [Leaf, "Balanced Nutrition", "Purposeful everyday goodness."], [Heart, "Premium Taste", "Rich, memorable flavour."], [Feather, "Soft Texture", "Unmatched softness in every slice."], [Sprout, "Daily Wellness", "A better daily choice."]];

  return <div className="tuni-home">
    <section className="tuni-hero" ref={register}>
      <div className="tuni-hero__grain" aria-hidden="true" />
      <div className="tuni-wrap tuni-hero__grid">
        <div className="tuni-hero__copy">
          <span className="eyebrow">Tuni Breads</span>
          <h1>Far From<br />Ordinary Bread</h1>
          <p>Inspired by Traditional Nutrition.<br />Crafted for Modern Living.</p>
          <Button onClick={() => go("products")}>Explore Our Breads</Button>
          <div className="trust-row">
            {trust.map(([Icon, label]) => <div className="trust-item" key={label}><span><Icon size={22} /></span><small>{label}</small></div>)}
          </div>
        </div>
        <div className="tuni-hero__visual">
          <img className="hero-composite" src={heroVisual} alt="Tuni Breads pack with sliced wheat bread, dates and coconut" />
        </div>
      </div>
    </section>

    <section className="origin" id="about" ref={register}>
      <div className="origin__image"><img src={originImage} alt="Coconut milk with Tuni bread" /></div>
      <div className="origin__copy">
        <span className="eyebrow">Brand Origin</span>
        <h2>Inspired by Ancient<br />Morning Nutrition</h2>
        <p>This ancient nutritional inspiration became the foundation of Tuni Breads.</p>
        <div className="origin-list">{origin.map(([title, sub]) => <div key={title}><i><WheatIcon size={20}/></i><span><strong>{title}</strong><small>{sub}</small></span></div>)}</div>
        <span className="origin-script">Tradition<br/><em>in Every Bite</em></span>
      </div>
    </section>

    <section className="breads-section" id="breads" ref={register}>
      <div className="tuni-wrap breads-grid">
        <div className="breads-intro"><span className="eyebrow">Our Breads</span><h2>Simple Choices.<br />Made Better.</h2><p>Two everyday favourites, baked with care for your family.</p><Button onClick={() => go("products")}>View Our Breads</Button></div>
        <article className="bread-card"><div className="bread-card__image"><img src={whiteBreadImage} alt="Fresh sliced Tuni White Bread" /></div><div><span className="bread-number">01</span><h3>White Bread</h3><p>Soft, light and delicious — a classic everyday bread perfect for breakfast, toast and sandwiches.</p><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button></div></article>
        <article className="bread-card"><div className="bread-card__image bread-card__image--wheat"><img src={wheatBreadImage} alt="Fresh sliced Tuni Wheat Bread" /></div><div><span className="bread-number">02</span><h3>Wheat Bread</h3><p>Wholesome wheat bread with a soft texture and satisfying taste for everyday meals.</p><button onClick={() => go("products")}>Know More <ArrowRight size={14}/></button></div></article>
      </div>
    </section>

    <section className="ingredient-section ingredient-story-v2" ref={register}>
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

    <section className="quality-section" id="quality" ref={register}>
      <div className="quality-photo"><img src={qualityImage} alt="Freshly sliced bread with clean ingredients and honest baking"/></div>
      <div className="quality-copy"><div className="quality-list">{qualities.map((q, i) => <div key={q}><span>{i < 3 ? <Ban size={20}/> : <ShieldCheck size={20}/>}</span><p>{q}</p></div>)}</div><p className="quality-caption"><strong>Premium Quality Standards</strong><br/>Transparency and quality are baked into every loaf.<br/><strong>Balanced Taste + Nutrition</strong></p></div>
    </section>

    <section className="nutrition-section" ref={register}>
      <div className="tuni-wrap"><div className="section-heading section-heading--left"><span className="eyebrow">Nutrition Facts</span><h2>Balanced Nutrition Profile</h2></div><div className="nutrition-grid">{nutrition.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><div className="nutrition-benefits">{[[Leaf,"Fiber Rich"],[Droplets,"Balanced Energy"],[Heart,"Low Cholesterol"],[Sprout,"Functional Ingredients"]].map(([Icon,t])=><span key={t}><Icon size={20}/>{t}</span>)}</div><p className="nutrition-note">Crafted using Wheat Flour, Milk Powder, Coconut Milk, Honey, Butter and Functional Ingredients.</p></div>
    </section>

    <section className="lifestyle-section" ref={register}>
      <div className="tuni-wrap lifestyle-layout"><div><span className="eyebrow">Not Just Bread. A Lifestyle Choice.</span><h2>Goodness For A Healthier You</h2><div className="lifestyle-grid">{lifestyles.map(([Icon,t,d])=><div key={t}><span><Icon size={20}/></span><strong>{t}</strong><small>{d}</small></div>)}</div></div><div className="lifestyle-visual"><span>Make Every<br/><em>Meal Special</em></span><img src={lifestyleImage} alt="A wholesome Tuni bread meal"/></div></div>
    </section>

    <section className="final-cta" id="contact" ref={register}><div className="tuni-wrap final-cta__inner"><div><span className="eyebrow eyebrow--light">Tuni Breads</span><h2>Where Health,<br/>Tradition &amp; Taste<br/>Come Together</h2><p>Premium Bread Inspired by Functional Nutrition.</p></div><div className="final-cta__actions"><p>We welcome your partnership.</p><Button onClick={() => window.location.href="tel:+919443311007"}>Get in Touch</Button><Button outline onClick={() => go("products")}>Find in Store</Button></div></div></section>
  </div>;
}
