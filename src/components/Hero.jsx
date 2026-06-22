import "../styles/components/Hero.css";

export default function Hero({ register }) {
  return (
    <section className="hero section" id="top">
      <div className="container hero__content">
        <div className="hero__copy reveal" ref={register}>
          <p className="eyebrow">TUNI BREADS</p>

          <h1>
            Far From
            <span> Ordinary Bread</span>
          </h1>

          <p className="lead">
            Inspired by Traditional Nutrition. Crafted for Modern Living.
          </p>
        </div>
      </div>
    </section>
  );
}
