




export default function Hero({ register, onOfferClick }) {
  const heroImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1KWXhm7mTLLhrY2H1B-1U2QnFUKK6hbOpqBbomvdlOzBSHBCGnIu3TCi9hUfRa67U4g8Rsqasl4UDaGAEIg-8P-3SQbt07ry5hATl5Impvcuhfu9_jOdIVfVWPJV4HJPWOT4XInWzHuIDGcOuv2Xoqz3zg8Oy2CdysJbH2pzbLIyEWXqzl19AbOT_DE6LYSlAGMY0VQiI1acDgOf6MzTOPQynPjUjn3NZ9hQmkYxY4dbN_EGFIf06nEqOo_yzqUlkpzi06GBmom0';
  

 

  

  return (
    <section className="hero section" id="top">
      <div
        className="hero__media reveal"
        ref={register}
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(248,247,243,0.98) 0%, rgba(248,247,243,0.76) 36%, rgba(248,247,243,0.2) 100%), url('${heroImage}')`,
          backgroundSize: 'cover, cover',
          backgroundPosition: 'center, center 38%',
          backgroundRepeat: 'no-repeat, no-repeat',
        }}
      />
      <div className="container hero__content">
        <div className="hero__copy reveal" ref={register}>
          <p className="eyebrow">Purely Organic Farm-to-Table</p>
          <h1>Fresh From Nature To Your Table</h1>
          <p className="lead">
            Pure milk, fresh coconuts, and artisan bread delivered daily.
            Experience the raw honesty of organic farming delivered straight to
            your doorstep.
          </p>
          <div className="button-row">
            <button className="button button--solid" type="button" onClick={onOfferClick}>
              Shop Now
            </button>
            <a className="button button--ghost" href="#about">
              Explore Products
            </a>
          </div>
        </div>
        <div className="hero__panel">
          <div className="hero-offer reveal delay-1" ref={register}>
            <p className="hero-offer__label">Special Offer</p>
            <div className="hero-offer__content">
              <div>
                <strong>Unlock today&apos;s farm box deals</strong>
                <span>Tap the offer button to reveal our featured products.</span>
              </div>
              <button className="button button--solid hero-offer__button" type="button" onClick={onOfferClick}>
                Offer
              </button>
            </div>
          </div>
          <div className="hero-calculator reveal delay-2" ref={register}>
        
            
           
          </div>
        </div>
      </div>
    </section>
  );
}
