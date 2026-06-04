export default function Features({ register, items }) {
  return (
    <section className="section section--muted">
      <div className="container">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">The Nature&apos;s Fresh Promise</p>
          <h2>Why customers keep coming back</h2>
        </div>

        <div className="feature-grid">
          {items.map((item, index) => (
            <article
              className={`feature-card reveal delay-${index % 4}`}
              key={item.title}
              ref={register}
            >
              <div className="feature-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
