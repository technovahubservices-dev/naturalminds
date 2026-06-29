import "../styles/components/Hero.css";

import heroImage from "../asset/hero.png";

export default function Hero({
  register,
  onOfferClick,
  onExploreClick,
}) {
  return (
    <section className="hero section" id="top">
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow reveal delay-1" ref={register}>
            MAHIMY FOODS
          </p>
          <p className="eyebrow eyebrow--sub reveal delay-2" ref={register}>
            100% Fresh &bull; Healthy &bull; Nutritious
          </p>

          <h1 className="hero__title reveal delay-3" ref={register}>
            Mahimy Foods
            <span>Fresh Bread, Crafted with Care</span>
          </h1>

          <strong>

          <p className="lead reveal delay-4" ref={register}>
            Inspired by Traditional Nutrition. Crafted for Modern Living.
          </p>
          </strong>

          <div className="button-row reveal delay-4" ref={register}>
            <button
              className="button button--solid"
              type="button"
              onClick={onOfferClick}
            >
              Shop Now
            </button>
          </div>

          <div className="hero__chips reveal delay-4" ref={register}>
            <span className="hero__chip">Fresh Daily</span>
            <span className="hero__chip">Healthy Ingredients</span>
            <span className="hero__chip">Premium Quality</span>
          </div>
<strong>
          <div className="hero-stats reveal delay-4" ref={register}>
            <div>
              <h3>5000+</h3>
              <span>Happy Customers</span>
            </div>

            <div>
              <h3>4</h3>
              <span>Bread Varieties</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Fresh Quality</span>
            </div>
          </div>
          </strong>
        </div>

        <div className="hero__panel">
          <div className="hero__mediaCard reveal delay-1" ref={register}>
            <img src={heroImage} alt="Mahimy Foods bread pack with wheat bread" />

          
          </div>
        </div>
      </div>
    </section>
  );
}
