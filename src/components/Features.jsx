import "../styles/components/Features.css";

import {
  Wheat,
  Calendar,
  Droplets,
  Candy,
  
  Sparkles,
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
    icon: <Sparkles size={28} />,
    title: "Honey",
    desc: "Golden antioxidant sweetness",
  },
  {
    icon: <Candy size={28} />,
    title: "Butter",
    desc: "Smooth texture & flavor",
  },
  {
    icon: <Wheat size={28} />,
    title: "Wheat",
    desc: "Fiber-rich nutritional base",
  },
];

export default function Ingredients() {
  return (
    <section className="ingredients">
      <div className="ingredients-header">
        <span>OUR INGREDIENTS</span>

        <h2>Where Nutrition Meets Indulgence</h2>

        <p>
          Five carefully selected ingredients combine to create a wholesome,
          nourishing loaf that tastes as indulgent as it feels healthy.
        </p>
      </div>

      <div className="ingredient-layout">
        <div className="ingredient-center">
          <div className="center-glow"></div>

         

          {ingredients.map((item, index) => (
            <div
              className={`orbit-card orbit-${index + 1}`}
              key={index}
            >
              <div className="orbit-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}