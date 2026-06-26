import "../styles/components/Description.css";
import React, { useState } from "react";
import honeyImage from "../asset/honey.jpg";
import coconutMilkImage from "../asset/coco.jpg";
import butterImage from "../asset/butter.jpg";

const data = [
  {
    id: 1,
    title: "Honey",
    image: honeyImage,
    description:
      "Honey is a natural sweetener made by bees. It adds a rich flavor and is often enjoyed as part of a wholesome breakfast or snack.",
    uses: [
      "Natural sweetener",
      "Spreading on toast",
      "Mixing into warm drinks",
      "Adding to breakfast bowls",
    ],
  },
  {
    id: 2,
    title: "Coconut Milk",
    image: coconutMilkImage,
    description:
      "Coconut milk is a creamy, plant-based ingredient made from fresh coconut. It brings a smooth texture and tropical taste to recipes.",
    uses: [
      "Curries and gravies",
      "Smoothies and shakes",
      "Desserts and puddings",
      "Cooking and baking",
    ],
  },
  {
    id: 3,
    title: "Butter",
    image: butterImage,
    description:
      "Butter is a rich dairy product made from cream. It adds flavor, softness, and a smooth finish to both sweet and savory foods.",
    uses: [
      "Spreading on bread",
      "Cooking and sauteing",
      "Baking cakes and cookies",
      "Finishing sauces",
    ],
  },
];

export default function FoodCards({ register }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="section food-guide">
      <div className="container food-guide__inner">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">Fresh Food Guide</p>
          <h2>Everyday staples from our farm</h2>
        </div>

        <div className="food-cards">
          {data.map((item) => (
            <article
              className={`food-card reveal ${activeCard === item.id ? "is-active" : ""}`}
              key={item.id}
              ref={register}
              role="button"
              tabIndex={0}
              aria-pressed={activeCard === item.id}
              onClick={() => setActiveCard(item.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCard(item.id);
                }
              }}
            >
              <img className="food-card__image" src={item.image} alt={item.title} />
              <div className="food-card__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h4>Uses</h4>
                <ul className="food-card__list">
                  {item.uses.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
