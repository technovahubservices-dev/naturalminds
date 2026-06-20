import "../styles/components/Gallery.css";

import { Zap, Wheat, Dumbbell, Heart, Candy, Droplets } from "lucide-react";

const stats = [
  {
    icon: <Zap />,
    value: "277",
    unit: "kcal",
    title: "Energy",
  },
  {
    icon: <Wheat />,
    value: "58.7",
    unit: "g",
    title: "Carbohydrate",
  },
  {
    icon: <Dumbbell />,
    value: "6.8",
    unit: "g",
    title: "Protein",
  },
  {
    icon: <Candy />,
    value: "10",
    unit: "g",
    title: "Natural Sugar",
  },
  {
    icon: <Droplets />,
    value: "4",
    unit: "g",
    title: "Dietary Fiber",
  },
  {
    icon: <Heart />,
    value: "0",
    unit: "mg",
    title: "Cholesterol",
  },
];

export default function Nutrition() {
  return (
    <section className="nutrition">
      <div className="nutrition-header">
        <span>NUTRITION FACTS</span>

        <h2>Balanced Nutrition Profile</h2>

        <p>
          Crafted using wheat flour, coconut milk, dates, honey and butter to
          deliver nutrition with indulgent taste.
        </p>
      </div>

      <div className="nutrition-grid">
        {/* LEFT */}
        <div className="nutrition-product">
          <div className="product-glow"></div>

          <img
            src="/images/tuni-pack.svg"
            alt="Tuni Bread"
          />

          <div className="floating-badge badge-1">
            🌾 Fiber Rich
          </div>

          <div className="floating-badge badge-2">
            ⚡ Energy Boost
          </div>

          <div className="floating-badge badge-3">
            🥥 Coconut Milk
          </div>
        </div>

        {/* RIGHT */}
        <div className="nutrition-cards">
          {stats.map((item, index) => (
            <div className="nutrition-card" key={index}>
              <div className="card-icon">
                {item.icon}
              </div>

              <div className="card-number">
                {item.value}
                <span>{item.unit}</span>
              </div>

              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="nutrition-bottom">
        <div>✓ Fiber Rich</div>
        <div>✓ Balanced Energy</div>
        <div>✓ Functional Ingredients</div>
        <div>✓ Low Cholesterol</div>
      </div>
    </section>
  );
}
