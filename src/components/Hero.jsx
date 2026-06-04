export default function Hero({ register }) {
  return (
    <section className="hero section" id="top">
      <div
        className="hero__media reveal"
        ref={register}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(248,247,243,0.98) 0%, rgba(248,247,243,0.72) 38%, rgba(248,247,243,0.08) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7QGqUvGlybod5Scw7QRxp1CrVF-r2Kqx7LpsreCQOo2Avn6lXTlJmlggnm_dx9mLaV4e9PJHJ72-ZG2sYlQ-ySTjo-8UEQIvuLqKCR1rV7I6Ci7yI0MiHDoHRtikYnd6B031YNy-WvMOTIL4XVZz7wM2YVOSF4xN18Lf7FaySM38-A2gqHkGqn9bNM3qxfrMzrgmqBdSTg3c7gm4zGs37aLSHO6uPoTrV4qCS9P1NcGxknBCXK7DceZLx5qe2zDy3jSTJbX8DOUY')",
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
