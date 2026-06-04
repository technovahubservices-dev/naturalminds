export default function Gallery({ register, items }) {
  return (
    <section className="section section--muted">
      <div className="container">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">Moments from the farm</p>
          <h2>Gallery</h2>
        </div>

        <div className="gallery-grid">
          {items.map((item, index) => (
            <figure
              className={`gallery-item reveal delay-${index}`}
              key={item.alt}
              ref={register}
            >
              <img src={item.image} alt={item.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
