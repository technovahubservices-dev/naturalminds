import "../styles/components/Description.css";
import React from 'react';

const data = [
  {
    id: 1,
    title: 'Milk',
    image:
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500',
    description:
      'Milk is a nutritious liquid produced by mammals and widely consumed by humans. It contains protein, calcium, vitamins, and minerals that support growth and bone health.',
    uses: [
      'Drinking as a beverage',
      'Making tea and coffee',
      'Preparing yogurt and cheese',
      'Baking cakes and pastries',
    ],
  },
  {
    id: 2,
    title: 'Dates',
    image:
      'https://plus.unsplash.com/premium_photo-1676208753932-6e8bc83a0b0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0ZXMlMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D',
    description:
      'Dates are sweet fruits that grow on date palm trees. They are rich in fiber, antioxidants, and natural sugars.',
    uses: [
      'Healthy snack',
      'Making milkshakes',
      'Natural sweetener',
      'Used in desserts and cakes',
    ],
  },
  {
    id: 3,
    title: 'Bread',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500',
    description:
      'Bread is a staple food made from flour, water, and yeast. It is a major source of carbohydrates and energy.',
    uses: [
      'Making sandwiches',
      'Preparing toast',
      'Making breadcrumbs',
      'Used in snacks and desserts',
    ],
  },
];

export default function FoodCards({ register }) {
  return (
    <section className="section food-guide">
      <div className="container food-guide__inner">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">Fresh Food Guide</p>
          <h2>Everyday staples from our farm</h2>
        </div>

        <div className="food-cards">
          {data.map((item) => (
            <article className="food-card reveal" key={item.id} ref={register}>
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
