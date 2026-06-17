import { useState, useEffect } from "react";

export default function Hero({ register, onOfferClick, onExploreClick }) {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KWXhm7mTLLhrY2H1B-1U2QnFUKK6hbOpqBbomvdlOzBSHBCGnIu3TCi9hUfRa67U4g8Rsqasl4UDaGAEIg-8P-3SQbt07ry5hATl5Impvcuhfu9_jOdIVfVWPJV4HJPWOT4XInWzHuIDGcOuv2Xoqz3zg8Oy2CdysJbH2pzbLIyEWXqzl19AbOT_DE6LYSlAGMY0VQiI1acDgOf6MzTOPQynPjUjn3NZ9hQmkYxY4dbN_EGFIf06nEqOo_yzqUlkpzi06GBmom0",
    
    // Coconut Milk Image
    "https://images.unsplash.com/photo-1604908176997-4313d4b8d7c0?w=1200&q=80"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="top">
      <div className="container hero__content">
        <div className="hero__copy reveal" ref={register}>
          <p className="eyebrow">Summer Bakery Sale</p>
          <h1>Handmade bakery shop</h1>

          <p className="lead">
            Warm croissants, fresh loaves, and sweet pastries styled with a
            premium creamy palette for a polished storefront on every screen.
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
        </div>

        <div className="hero__panel">
          <div className="hero__mediaCard reveal delay-1" ref={register}>
            <img
              src={images[currentImage]}
              alt="Hero Product"
              className="hero-slider-image"
            />

            <div className="hero__floating hero__floating--top">
              Premium quality
            </div>

            <div className="hero__floating hero__floating--bottom">
              Free delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}