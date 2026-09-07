import { ChartNoAxesColumnIncreasing, Lightbulb, Sprout, Wheat } from "lucide-react";
import strengthImage from "../asset/01_bread_loaf_slices.png";
import storyImage from "../asset/02_wheat_bowl_stalks.png";
import "../styles/components/AboutPage.css";

const BreadIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 31C3 29 4 19 11 15C21 8 43 8 53 15C60 19 61 29 52 31V52H12Z" />
    <path d="m20 16 6 6m16-7-6 7m11 7-3 4" />
  </svg>
);

const journey = [
  { icon: Lightbulb, title: "The Inspiration", description: "Inspired by traditional food wisdom and simple ingredients." },
  { icon: Sprout, title: "The Beginning", description: "Mahimy Foods began exploring how traditional inspiration could meet modern everyday food." },
  { icon: Wheat, title: "Thoughtful Ingredients", description: "Coconut milk, dates, honey and butter became part of the Tuni Breads approach." },
  { icon: BreadIcon, title: "Tuni Breads", description: "Tuni Wheat Bread and Tuni White Bread were created for everyday family meals." },
  { icon: ChartNoAxesColumnIncreasing, title: "Growing Together", description: "Today, Mahimy Foods continues to grow with the trust of its customers and a commitment to better everyday food." },
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
        <section className="strength-section reveal" id="about-story" tabIndex={-1} ref={register}>
          <div className="strength-copy">
            <SectionLabel>How It Started</SectionLabel>
            <h2>Rooted in a Simple Idea.</h2>
            <div className="about-origin-text">
              <p>Mahimy Foods began with an appreciation for simple, traditional nourishment. Inspired by the pairing of coconut and pepper, we explored how familiar ingredients could inspire something made for today’s families.</p>
              <p>This belief eventually led us to create Tuni Breads — bread that brings together wholesome ingredients and everyday convenience.</p>
            </div>
          </div>
          <div className="strength-image"><img src={strengthImage} alt="Fresh sliced Tuni bread with wheat" /><span>Goodness<br />in Every Slice</span></div>
        </section>

        <section className="about-journey reveal" id="about-journey" tabIndex={-1} ref={register} aria-labelledby="about-journey-title">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 id="about-journey-title">From an Idea to Tuni Breads.</h2>
          <p className="about-journey__intro">A journey of learning, improving and growing — with your trust.</p>
          <ol className="about-journey__steps">
            {journey.map(({ icon: Icon, title, description }, index) => (
              <li className="about-journey__step" key={title} id={index === 2 ? "about-values" : undefined} tabIndex={index === 2 ? -1 : undefined}>
                <span className="about-journey__icon" aria-hidden="true"><Icon /></span>
                <span className="about-journey__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="brand-story reveal" id="about-mission" tabIndex={-1} ref={register}>
          <div className="brand-story-copy">
            <blockquote><span className="story-quote story-quote-open">“</span>Quality food builds<br />healthy people, and healthy people<br />build a stronger nation.<span className="story-quote story-quote-close">”</span></blockquote>
            <div className="about-flourish" aria-hidden="true"><span /><Sprout /><span /></div>
            <p>At Mahimy Foods, we are proud to contribute to a healthier,<br />stronger and happier tomorrow.</p>
          </div>
          <div className="brand-story-image"><img src={storyImage} alt="Natural wheat grains in a wooden bowl" /><span>Food for<br />a Brighter<br />Tomorrow</span></div>
        </section>
      </div>
    </section>
  );
}
