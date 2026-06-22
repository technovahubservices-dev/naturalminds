import { useState } from "react";
import "../styles/components/Stats.css";

import {
  ShieldCheck,
  Leaf,
  BadgeCheck,
  Wheat,
  HeartHandshake,
  Ban,
} from "lucide-react";

const promises = [
  {
    icon: <Ban />,
    title: "No Vanaspati",
    desc: "Only wholesome ingredients chosen for better nutrition.",
  },
  {
    icon: <ShieldCheck />,
    title: "No Artificial Compromise",
    desc: "Free from unnecessary artificial ingredients.",
  },
  {
    icon: <BadgeCheck />,
    title: "No Class 2 & 3 Preservatives",
    desc: "Clean label approach for everyday wellness.",
  },
  {
    icon: <Leaf />,
    title: "Carefully Selected Ingredients",
    desc: "Each ingredient serves a meaningful purpose.",
  },
  {
    icon: <Wheat />,
    title: "Premium Quality Standards",
    desc: "Crafted with consistency and care.",
  },
  {
    icon: <HeartHandshake />,
    title: "Balanced Taste + Nutrition",
    desc: "Good for your body and satisfying to enjoy.",
  },
];

export default function QualityPromise({ register }) {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="quality">
      <div className="quality-header reveal" ref={register}>
        <span>QUALITY PROMISE</span>

        <h2>Clean Ingredients. Honest Baking.</h2>

        <p>
          Transparency and quality are baked into every loaf, delivering
          nourishment you can trust.
        </p>
      </div>

      <div className="quality-grid">
        <div className="quality-image reveal delay-1" ref={register}>
          <img
            src="/images/tuni-quality.svg"
            alt="Tuni Bread"
          />

          <div className="floating-card wheat">
            🌾 Whole Grain
          </div>

          <div className="floating-card dates">
            🌴 Rich In Iron & Fibre
          </div>

          <div className="floating-card coconut">
            🥥 Plant-Based Goodness
          </div>
        </div>

        <div className="quality-list">
          {promises.map((item, index) => (
            <div
              key={index}
              className={`promise-card reveal delay-${(index % 4) + 1} ${
                activeCard === index ? "active" : ""
              }`}
              ref={register}
              onClick={() => setActiveCard(index)}
            >
              <div className="promise-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
