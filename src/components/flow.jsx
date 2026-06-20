import {
  Sunrise,
  Apple,
  Scale,
  Crown,
  Waves,
  HeartPulse,
} from "lucide-react";

import "../styles/components/flow.css";

const features = [
  {
    icon: Sunrise,
    title: "Morning Energy",
    desc: "Sustained vitality from natural ingredients",
  },
  {
    icon: Apple,
    title: "Healthy Snacking",
    desc: "Guilt-free, nutrient-rich satisfaction",
  },
  {
    icon: Scale,
    title: "Balanced Nutrition",
    desc: "Five ingredients, one complete formula",
  },
  {
    icon: Crown,
    title: "Premium Taste",
    desc: "Rich, memorable, indulgent texture",
  },
  {
    icon: Waves,
    title: "Soft Texture",
    desc: "Unmatched softness in every slice",
  },
  {
    icon: HeartPulse,
    title: "Daily Wellness",
    desc: "A health ritual, not just a meal",
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits">
      <div className="bg-circle bg1"></div>
      <div className="bg-circle bg2"></div>

      <div className="container">
        <span className="tag">WHY CHOOSE US</span>

        <h2 className="title">
          Not Just Bread.
          <br />
          <span>A Lifestyle Choice</span>
        </h2>

        <div className="grid">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="icon-box">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="shine"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}