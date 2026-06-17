export default function SuccessPage({ order, onNavigate }) {
  const placedOrder = order?.order || {};
  const summaryItems = Array.isArray(placedOrder.items) ? placedOrder.items : [];

  const infoCards = [
    {
      label: "Order Status",
      value: placedOrder.orderStatus || "Pending",
    },
    {
      label: "Payment Status",
      value: placedOrder.paymentStatus || "Pending",
    },
    {
      label: "Total Quantity",
      value: placedOrder.totalQuantity ?? 0,
    },
    {
      label: "Total Amount",
      value: `Rs. ${placedOrder.totalAmount ?? 0}`,
    },
  ];

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Success</p>
        <h2>Order placed successfully</h2>
      </div>

      <div className="success-hero">
        <div>
          <strong>{order?.message || "Thank you for your order."}</strong>
          <p>Your checkout request completed and your cart state has been cleared.</p>
        </div>
        <div className="page-banner__actions">
          <button type="button" className="button button--ghost" onClick={() => onNavigate("products")}>
            Back to Products
          </button>
          <button type="button" className="button button--solid" onClick={() => onNavigate("home")}>
            Home
          </button>
        </div>
      </div>

      <div className="success-grid">
        {infoCards.map((card) => (
          <article className="success-stat-card" key={card.label}>
            <span>{card.label}</span>
            <strong>{card.value}</strong>
          </article>
        ))}
      </div>

      {placedOrder._id && (
        <article className="success-order-card">
          <p className="eyebrow">Receipt</p>
          <h3>Order #{placedOrder._id}</h3>
          <div className="success-order-card__rows">
            <div>
              <span>Customer</span>
              <strong>{placedOrder.customerName || "N/A"}</strong>
            </div>
            <div>
              <span>Phone</span>
              <strong>{placedOrder.phone || "N/A"}</strong>
            </div>
            <div>
              <span>Address</span>
              <strong>{placedOrder.address || "N/A"}</strong>
            </div>
          </div>
        </article>
      )}

      {summaryItems.length > 0 && (
        <div className="success-items">
          {summaryItems.map((item) => (
            <article className="success-item-card" key={item.productId || item._id || item.id}>
              <div>
                <strong>{item.name}</strong>
                <p>{item.category || "Uncategorized"}</p>
              </div>
              <span>Qty {item.quantity}</span>
            </article>
          ))}
        </div>
      )}

      {!placedOrder._id && summaryItems.length === 0 && (
        <div className="empty-state">
          <strong>No order details were returned.</strong>
         
        </div>
      )}
    </section>
  );
}
