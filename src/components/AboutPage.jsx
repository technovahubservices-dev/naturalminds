import { Heart, Leaf, Sandwich, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import strengthImage from "../asset/01_bread_loaf_slices.png";
import storyImage from "../asset/02_wheat_bowl_stalks.png";
import "../styles/components/AboutPage.css";

const strengths = [
  { icon: Sprout, text: <>At <strong>Tuni Breads</strong>, we believe that delicious food should also nourish your body.</> },
  { icon: Heart, text: <>We don&apos;t just make bread — we create a <strong>healthier and tastier</strong> experience for every family.</> },
  { icon: ShieldCheck, text: <>Healthy Ingredients.<br />Great Taste. Premium Quality.</> },
];

const values = [
  { icon: Sprout, label: <>Health-Focused<br />Ingredients</> },
  { icon: Sandwich, label: <>Rich &amp; Delicious<br />Taste</> },
  { icon: Sparkles, label: <>Premium<br />Quality</> },
  { icon: ShieldCheck, label: <>Hygienic<br />Production</> },
  { icon: Heart, label: <>Customer<br />Trust</> },
  { icon: Leaf, label: <>Consistent<br />Freshness</> },
];

const SectionLabel = ({ children }) => <div className="about-section-label"><span />{children}<span /></div>;

export default function AboutPage({ register }) {
  return (
    <section className="about-page">
      <div className="about-photo-hero">
        <div className="container about-photo-hero__inner">
          <div className="about-photo-hero__copy reveal" ref={register}>
            <p className="about-kicker">About Us</p>
            <h1>Food is Connected<br />with <em>Emotions</em></h1>
            <p className="about-photo-hero__intro">Food is not only necessary for our survival but also closely connected with our emotions and feelings.</p>
            <div className="about-flourish" aria-hidden="true"><span /><Sprout /><span /></div>
          </div>
        </div>
      </div>

      <div className="about-lower">
        <section className="strength-section reveal" ref={register}>
          <div className="strength-copy">
            <SectionLabel>Our Strength</SectionLabel>
            <h2>Nourishing<br />Lives, Every Day</h2>
            <div className="strength-list">
              {strengths.map(({ icon: Icon, text }, index) => <div className="strength-item" key={index}><span className="about-round-icon"><Icon /></span><p>{text}</p></div>)}
            </div>
          </div>
          <div className="strength-image"><img src={strengthImage} alt="Fresh sliced Tuni bread with wheat" /><span>Goodness<br />in Every Slice</span></div>
        </section>

        <section className="values-section reveal" ref={register}>
          <SectionLabel>Core Values</SectionLabel>
          <h2>What We Stand For</h2>
          <div className="values-grid">
            {values.map(({ icon: Icon, label }, index) => <div className="value-item" key={index}><span className="about-round-icon"><Icon /></span><p>{label}</p></div>)}
          </div>
        </section>

        <section className="brand-story reveal" ref={register}>
          <div className="brand-story-copy">
            <blockquote><span className="story-quote story-quote-open">“</span>Quality food builds<br />healthy people, and healthy people<br />build a stronger nation.<span className="story-quote story-quote-close">”</span></blockquote>
            <div className="about-flourish" aria-hidden="true"><span /><Sprout /><span /></div>
            <p>At Tuni Breads, we are proud to contribute to a healthier,<br />stronger and happier tomorrow.</p>
          </div>
          <div className="brand-story-image"><img src={storyImage} alt="Natural wheat grains in a wooden bowl" /><span>Food for<br />a Brighter<br />Tomorrow</span></div>
        </section>
      </div>
    </section>
  );
}
