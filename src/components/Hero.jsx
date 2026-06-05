export default function Hero({ register }) {
  const heroImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KWXhm7mTLLhrY2H1B-1U2QnFUKK6hbOpqBbomvdlOzBSHBCGnIu3TCi9hUfRa67U4g8Rsqasl4UDaGAEIg-8P-3SQbt07ry5hATl5Impvcuhfu9_jOdIVfVWPJV4HJPWOT4XInWzHuIDGcOuv2Xoqz3zg8Oy2CdysJbH2pzbLIyEWXqzl19AbOT_DE6LYSlAGMY0VQiI1acDgOf6MzTOPQynPjUjn3NZ9hQmkYxY4dbN_EGFIf06nEqOo_yzqUlkpzi06GBmom0";

  return (
    <section className="hero section" id="top">
      <div
        className="hero__media reveal"
        ref={register}
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(248,247,243,0.98) 0%, rgba(248,247,243,0.74) 38%, rgba(248,247,243,0.14) 100%), url('${heroImage}')`,
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
            <a className="button button--solid" href="#products">
              Shop Now
            </a>
            <a className="button button--ghost" href="#about">
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
