import { Heart, Sandwich, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import "../styles/components/AboutPage.css";

const strengths = [
  { icon: Sprout, text: <>At <strong>Tuni Breads</strong>, we believe that delicious food should also nourish your body.</> },
  { icon: Heart, text: <>We don&apos;t just make bread—we create a <strong>healthier and tastier</strong> experience for every family.</> },
  { icon: ShieldCheck, text: <>Healthy Ingredients.<br />Great Taste. Premium Quality.</> },
];

const values = [
  { icon: Sprout, label: <>Health-Focused<br />Ingredients</> },
  { icon: Sandwich, label: <>Rich &amp; Delicious<br />Taste</> },
  { icon: Sparkles, label: <>Premium<br />Quality</> },
  { icon: ShieldCheck, label: <>Hygienic<br />Production</> },
  { icon: Heart, label: <>Customer<br />Trust</> },
  { icon: Sprout, label: <>Consistent<br />Freshness</> },
];

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

      <div className="container about-details">
        <article className="about-detail-panel reveal" ref={register}>
          <h2>Our Strength</h2><span className="title-rule" />
          <div className="about-strength-list">
            {strengths.map(({ icon: Icon, text }, index) => <div className="about-strength-item" key={index}><span className="round-icon"><Icon /></span><p>{text}</p></div>)}
          </div>
        </article>
        <article className="about-detail-panel reveal delay-1" ref={register}>
          <h2>Core Values</h2><span className="title-rule" />
          <div className="about-value-grid">
            {values.map(({ icon: Icon, label }, index) => <div className="about-value-item" key={index}><span className="round-icon"><Icon /></span><p>{label}</p></div>)}
          </div>
        </article>
        <blockquote className="about-statement reveal delay-2" ref={register}>
          <span className="quote-mark quote-mark--open">“</span>
          <p>Quality food builds<br />healthy people, and<br />healthy people build<br />a stronger nation.</p>
          <div className="about-flourish" aria-hidden="true"><span /><Sprout /><span /></div>
          <span className="quote-mark quote-mark--close">”</span>
        </blockquote>
      </div>
    </section>
  );
}
