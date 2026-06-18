import "../styles/components/Testimonials.css";

export default function Testimonials({ register, items }) {
  return (
    <section className="section container">
      <div className="section-heading center reveal" ref={register}>
        <p className="eyebrow">Voices of freshness</p>
        <h2>What customers are saying</h2>
      </div>

      <div className="testimonial-grid">
        {items.map((item, index) => (
          <article
            className={`testimonial-card reveal delay-${index}`}
            key={item.name}
            ref={register}
          >
            <div className="stars" aria-label={`${item.rating} out of 5 stars`}>
              {"★".repeat(item.rating)}
            </div>
            <p className="testimonial-card__quote">"{item.quote}"</p>
            <div className="testimonial-card__author">
              <div className="avatar">
                <img src={item.avatar} alt={item.name} />
              </div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
