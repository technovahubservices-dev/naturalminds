import "../styles/components/Features.css";
import right from '../asset/wheatr.png';
import left from '../asset/wheatr.png';
import {
  Award,
  Calendar,
  Candy,
  Droplets,
  Heart,
  Leaf,
  Sandwich,
  ShieldCheck,
  Sprout,
  Users,
  Wheat,
  Sparkles,
} from "lucide-react";

const leftCards = [
  {
    icon: Wheat,
    title: "100% Whole Wheat",
    desc: "Made with whole grain goodness for better health.",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    desc: "Absolutely no artificial preservatives or additives.",
  },
  {
    icon: Sprout,
    title: "High in Fiber",
    desc: "Supports digestion and helps you stay fuller longer.",
  },
];

const rightCards = [
  {
    icon: Heart,
    title: "Heart Healthy",
    desc: "Ingredients that support a healthy heart.",
  },
  {
    icon: Droplets,
    title: "Coconut Milk Rich",
    desc: "Goodness of coconut milk for better nutrition.",
  },
  {
    icon: Sparkles,
    title: "Natural Sweetness",
    desc: "Sweetened naturally with dates and honey.",
  },
];

const centerIngredients = [
  {
    icon: Calendar,
    title: "Dates",
    desc: "Natural energy & sweetness",
    className: "ingredient-card--top",
  },
  {
    icon: Sandwich,
    title: "Butter",
    desc: "Smooth texture & flavor",
    className: "ingredient-card--left",
  },
  {
    icon: Droplets,
    title: "Coconut Milk",
    desc: "Creamy dairy-free richness",
    className: "ingredient-card--right",
  },
  {
    icon: Wheat,
    title: "Wheat",
    desc: "Fiber-rich nutritional base",
    className: "ingredient-card--bottom-left",
  },
  {
    icon: Candy,
    title: "Honey",
    desc: "Golden antioxidant sweetness",
    className: "ingredient-card--bottom-right",
  },
];

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
  },
  {
    icon: Leaf,
    value: "5",
    label: "Premium Ingredients",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Natural & Wholesome",
  },
  {
    icon: Award,
    value: "10+",
    label: "Years of Trust",
  },
];

export default function Features({ register }) {
  return (
    <section className="features">
      <div className="features-background" aria-hidden="true">
        <span
          className="features-bg features-bg--left"
          style={{ backgroundImage: `url(${left})` }}
        />
        <span
          className="features-bg features-bg--right"
         style={{ backgroundImage: `url(${right})` }}
        />
        <span className="features-float features-float--1">🌾</span>
        <span className="features-float features-float--2">🍞</span>
        <span className="features-float features-float--3">🌾</span>
        <span className="features-float features-float--4">🍞</span>
      </div>

      <div className="features-header reveal" ref={register}>
        <span className="features-kicker">OUR INGREDIENTS</span>

        <h2>
          Where Nutrition Meets
          <br />
          Indulgence
        </h2>

        <p>
          Tuni Breads combines traditional nourishment with modern healthy
          eating - five purposeful ingredients, one remarkable loaf.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-stack feature-stack--left reveal delay-1" ref={register}>
          {leftCards.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="feature-pill">
                <div className="feature-pill__icon">
                  <Icon size={21} />
                </div>

                <div className="feature-pill__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ingredient-scene reveal delay-1" ref={register}>
          <div className="ingredient-rings" aria-hidden="true">
            <span className="ingredient-ring ingredient-ring--outer" />
            <span className="ingredient-ring ingredient-ring--middle" />
            <span className="ingredient-ring ingredient-ring--inner" />
          </div>

          <div className="ingredient-center">
            <div className="ingredient-center__icon" aria-hidden="true">
              <Sandwich size={34} />
            </div>

            <h3>Tuni Breads</h3>
            <p>The Heart Of Every Slice</p>
          </div>

          {centerIngredients.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`ingredient-card ${item.className}`}
              >
                <div className="ingredient-icon">
                  <Icon size={22} />
                </div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="feature-stack feature-stack--right reveal delay-1" ref={register}>
          {rightCards.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="feature-pill">
                <div className="feature-pill__icon">
                  <Icon size={21} />
                </div>

                <div className="feature-pill__content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="features-stats reveal delay-2" ref={register}>
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="feature-stat">
              <div className="feature-stat__icon" aria-hidden="true">
                <Icon size={24} />
              </div>

              <div className="feature-stat__value">{item.value}</div>
              <div className="feature-stat__label">{item.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
