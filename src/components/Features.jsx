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
  },
  {
    icon: <Droplets size={28} />,
    title: "Coconut Milk",
    desc: "Creamy dairy-free richness",
  },
  {
    icon: <Candy size={28} />,
    title: "Honey",
    desc: "Golden antioxidant sweetness",
  },
  {
    icon: <Wheat size={28} />,
    title: "Wheat",
    desc: "Fiber-rich nutritional base",
  },
  {
    icon: <Sandwich size={28} />,
    title: "Butter",
    desc: "Smooth texture & flavor",
  },
];

export default function Ingredients({ register }) {
  return (
    <section className="ingredients">
      <div className="ingredients-header reveal" ref={register}>
        <span>OUR INGREDIENTS</span>

        <h2>Where Nutrition Meets Indulgence</h2>

        <p>
          Tuni Breads combines traditional nourishment with modern healthy
          eating — five purposeful ingredients, one remarkable loaf.
        </p>
      </div>

      <div className="ingredient-layout">
        <div className="ingredient-center reveal delay-1" ref={register}>
          <div className="center-glow"></div>

          <div className="orbit-track" aria-hidden="true">
            <span className="orbit-ring orbit-ring--outer"></span>
            <span className="orbit-ring orbit-ring--inner"></span>

            {/* Rotating Orbit */}
            <div className="orbit-container">
              {ingredients.map((item, index) => (
                <div
                  key={index}
                  className="orbit-card"
                  style={{
                    "--orbit-angle": `${(index * 360) / ingredients.length}deg`,
                    "--orbit-delay": `${index * -4}s`,
                  }}
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
