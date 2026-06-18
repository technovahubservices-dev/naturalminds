import "../styles/components/Categories.css";

export default function Categories({ register, items }) {
  return (
    <section className="section container" id="categories">
      <div className="section-heading reveal" ref={register}>
        <p className="eyebrow">Nature&apos;s Best Selections</p>
        <h2>Curated essentials from the farm</h2>
      </div>

      <div className="category-grid">
        {items.map((item, index) => (
          <article
            className={`card card--category reveal delay-${Math.min(index, 3)}`}
            key={item.title}
            ref={register}
          >
            <img src={item.image} alt={item.title} />
            <div className="card__overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact">Learn More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
