import "../styles/components/Features.css";

import {
  Wheat,
  Calendar,
  Droplets,
  Candy,
  Sandwich,
} from "lucide-react";

const ingredients = [
  {
    icon: <Calendar size={28} />,
    title: "Dates",
    desc: "Natural energy & sweetness",
    className: "orbit-1",
  },
  {
    icon: <Droplets size={28} />,
    title: "Coconut Milk",
    desc: "Creamy dairy-free richness",
    className: "orbit-2",
  },
  {
    icon: <Candy size={28} />,
    title: "Honey",
    desc: "Golden antioxidant sweetness",
    className: "orbit-3",
  },
  {
    icon: <Wheat size={28} />,
    title: "Wheat",
    desc: "Fiber-rich nutritional base",
    className: "orbit-4",
  },
  {
    icon: <Sandwich size={28} />,
    title: "Butter",
    desc: "Smooth texture & flavor",
    className: "orbit-5",
  },
];

export default function Ingredients() {
  return (
    <section className="ingredients">
      <div className="ingredients-header">
        <span>OUR INGREDIENTS</span>

        <h2>Where Nutrition Meets Indulgence</h2>

        <p>
          Tuni Breads combines traditional nourishment with modern healthy
          eating — five purposeful ingredients, one remarkable loaf.
        </p>
      </div>

      <div className="ingredient-layout">
        <div className="ingredient-center">
          <div className="center-glow"></div>

          {/* Rotating Orbit */}
          <div className="orbit-container">
            {ingredients.map((item, index) => (
              <div
                key={index}
                className={`orbit-card ${item.className}`}
              >
                <div className="orbit-card-inner">
                  <div className="orbit-icon">
                    {item.icon}
                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Circle */}
          <div className="center-circle">
            <Sandwich size={50} />

            <h3>Tuni Breads</h3>

            <p>The Heart Of Every Slice</p>
          </div>
        </div>
      </div>
    </section>
  );
}