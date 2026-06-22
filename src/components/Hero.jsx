
import "../styles/components/Hero.css";

const heroImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KWXhm7mTLLhrY2H1B-1U2QnFUKK6hbOpqBbomvdlOzBSHBCGnIu3TCi9hUfRa67U4g8Rsqasl4UDaGAEIg-8P-3SQbt07ry5hATl5Impvcuhfu9_jOdIVfVWPJV4HJPWOT4XInWzHuIDGcOuv2Xoqz3zg8Oy2CdysJbH2pzbLIyEWXqzl19AbOT_DE6LYSlAGMY0VQiI1acDgOf6MzTOPQynPjUjn3NZ9hQmkYxY4dbN_EGFIf06nEqOo_yzqUlkpzi06GBmom0";
export default function Hero({
  register,
  onOfferClick,
  onExploreClick,
}) {
  return (
    <section className="hero section" id="top">
      <div className="container hero__content">
        <div className="hero__copy reveal" ref={register}>
          <p className="eyebrow">100% Fresh â€¢ Healthy â€¢ Nutritious</p>

          <h1>
            Freshly Baked
            <span> Mahimy Foods</span>
          </h1>

          <p className="lead">
            Discover premium breads, buns, cakes and healthy bakery products
            crafted with quality ingredients and traditional baking methods.
          </p>

          <div className="button-row">
            <button
              className="button button--solid"
              type="button"
              onClick={onOfferClick}
            >
              Shop Now
            </button>

            <button
              className="button button--ghost"
              type="button"
              onClick={onExploreClick}
            >
              Explore Products
            </button>
          </div>

          <div className="hero__chips">
            <span className="hero__chip">Fresh Daily</span>
            <span className="hero__chip">Healthy Ingredients</span>
            <span className="hero__chip">Fast Delivery</span>
          </div>

          <div className="hero-stats">
            <div>
              <h3>5000+</h3>
              <span>Happy Customers</span>
            </div>

            <div>
              <h3>50+</h3>
              <span>Bakery Products</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Fresh Quality</span>
            </div>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero__mediaCard reveal delay-1" ref={register}>
            <img src={heroImage} alt="Mahimy Foods Products" />

            <div className="hero__floating hero__floating--top">
               Premium Quality
            </div>

            <div className="hero__floating hero__floating--bottom">
               Free Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
