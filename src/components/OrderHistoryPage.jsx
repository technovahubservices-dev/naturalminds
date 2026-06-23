import "../styles/components/OrderHistoryPage.css";
import { buildImageSrc, getProductName } from "../lib/api";

export default function OrderHistoryPage({ orderHistory = [], onNavigate }) {
  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Order History</p>
        <h2>Previous orders</h2>
      </div>

      <div className="page-banner">
        <div>
          <strong>Saved checkout records</strong>
          <p>These cards come from your recent successful checkouts.</p>
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

      {orderHistory.length === 0 ? (
        <div className="empty-state">
          <strong>No order history yet.</strong>
          <p>Place an order and it will appear here.</p>
        </div>
      ) : (
        <div className="order-history-page-grid">
          {orderHistory.map((order) => (
            <article className="order-history-page-card" key={order.id}>
              <img src={buildImageSrc(order.image)} alt={getProductName(order)} />
              <div className="order-history-page-card__body">
                <p className="eyebrow">Order</p>
                <h3>{getProductName(order)}</h3>
                <div className="order-history-page-card__meta">
                  <span>Amount</span>
                  <strong>Rs. {order.totalAmount}</strong>
                </div>
                <div className="order-history-page-card__meta">
                  <span>Price</span>
                  <strong>Rs. {order.price}</strong>
                </div>
                <div className="order-history-page-card__meta">
                  <span>Quantity</span>
                  <strong>{order.totalQuantity} items</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
