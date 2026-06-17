import { useState, useEffect } from "react";

export default function Hero({ register, onOfferClick, onExploreClick }) {
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KWXhm7mTLLhrY2H1B-1U2QnFUKK6hbOpqBbomvdlOzBSHBCGnIu3TCi9hUfRa67U4g8Rsqasl4UDaGAEIg-8P-3SQbt07ry5hATl5Impvcuhfu9_jOdIVfVWPJV4HJPWOT4XInWzHuIDGcOuv2Xoqz3zg8Oy2CdysJbH2pzbLIyEWXqzl19AbOT_DE6LYSlAGMY0VQiI1acDgOf6MzTOPQynPjUjn3NZ9hQmkYxY4dbN_EGFIf06nEqOo_yzqUlkpzi06GBmom0",

    "https://plus.unsplash.com/premium_photo-1694481100261-ab16523c4093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29jb251dCUyMG1pbGt8ZW58MHx8MHx8fDA%3D",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero section" id="top">
      <div className="container hero__content">
        <div className="hero__copy reveal" ref={register}>
          <p className="eyebrow">Summer Bakery Sale</p>

          <h1>Handmade Bakery Shop</h1>

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

          <div className="hero__chips">
            <span className="hero__chip">Fresh bakes daily</span>
            <span className="hero__chip">Free delivery over Rs. 999</span>
            <span className="hero__chip">Premium packaging</span>
          </div>

          <div className="hero__offer reveal delay-1" ref={register}>
            <div>
              <p className="hero-offer__label">Today's Special</p>

              <div className="hero-offer__content">
                <div>
                  <strong>Get 20% off your first bakery box</strong>
                  <span>
                    Tap shop now to jump into featured products.
                  </span>
                </div>

                <button
                  className="button button--solid hero-offer__button"
                  type="button"
                  onClick={onOfferClick}
                >
                  Offer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero__mediaCard reveal delay-1" ref={register}>
            <img
              src={images[currentImage]}
              alt="Featured Product"
              className="hero-slider-image"
            />

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