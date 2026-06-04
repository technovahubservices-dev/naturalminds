export default function Stats({ register }) {
  const stats = [
    ['10k+', 'Happy Customers'],
    ['500+', 'Retail Partners'],
    ['50+', 'Daily Deliveries'],
    ['100%', 'Natural'],
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map(([value, label], index) => (
            <div
              className={`stat reveal delay-${index}`}
              key={label}
              ref={register}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
