export default function Products({ register, items }) {
  return (
    <section className="section container" id="products">
      <div className="section-heading reveal" ref={register}>
        <p className="eyebrow">Best Sellers</p>
        <h2>Customer favorites</h2>
      </div>

      <div className="product-grid">
        {items.map((item, index) => (
          <article
            className={`product-card reveal delay-${index}`}
            key={item.title}
            ref={register}
          >
            <div className="product-card__imageWrap">
              <img src={item.image} alt={item.title} />
              {item.badge ? <span className="badge">{item.badge}</span> : null}
            </div>
            <div className="product-card__body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
