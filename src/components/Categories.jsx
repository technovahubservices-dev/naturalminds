import "../styles/components/Categories.css";
import category from '../asset/category.png';
const features = [
  {
    title: "Coconut",
    desc: "Natural Energy",
    icon: "🥥",
  },
  {
    title: "Dates",
    desc: "Iron & Fiber Rich",
    icon: "🌴",
  },
  {
    title: "Functional Blend",
    desc: "Everyday Vitality",
    icon: "🌾",
  },
];

export default function BrandOrigin({ register }) {
  return (
    <section className="brand-origin">
      <div className="brand-container">
        <div className="brand-content reveal" ref={register}>
          <span className="brand-tag">BRAND ORIGIN</span>

          <h2>
            Inspired by Ancient
            <br />
            Morning Nutrition
          </h2>

          <div className="origin-list">
            {features.map((item, index) => (
              <div className="origin-item reveal" key={index} ref={register}>
                <div className="origin-icon">
                  <span>{item.icon}</span>
                </div>

                <div className="origin-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="brand-description">
            This ancient nutritional inspiration became the foundation of our
            premium bread recipes, combining wholesome ingredients with modern
            baking craftsmanship.
          </p>
        </div>

        <div className="brand-image reveal delay-1" ref={register}>
          <img
            src={category}
            alt="Coconut and Dates"
          />
        </div>
      </div>
    </section>
  );
}
