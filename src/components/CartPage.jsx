import "../styles/components/CartPage.css";
import { buildImageSrc, getProductName } from "../lib/api";

export default function CartPage({
  cart,
  loading,
  error,
  onNavigate,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const items = cart.items || [];

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Cart</p>
        <h2>Your cart</h2>
      </div>

      <div className="page-banner">
        <div>
          <strong>Cart management</strong>
         
        </div>
        <div className="page-banner__actions">
          <button type="button" className="button button--ghost" onClick={() => onNavigate("products")}>
            Continue Shopping
          </button>
          <button type="button" className="button button--solid" onClick={() => onNavigate("checkout")}>
            Checkout
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading cart...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : items.length === 0 ? (
        <div className="empty-state">
          <strong>Your cart is empty.</strong>
          <p>Add some products from the listing page to continue.</p>
          <button type="button" className="button button--solid" onClick={() => onNavigate("products")}>
            Browse Products
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {items.map((item) => {
              const productId = item.productId || item._id || item.id;
              const quantity = Number(item.quantity) || 1;
              const price = Number(item.price) || 0;

              return (
                <article className="cart-item" key={productId}>
                  <img src={buildImageSrc(item.image)} alt={getProductName(item)} />
                  <div className="cart-item__content">
                    <div className="cart-item__top">
                      <div>
                        <h3>{getProductName(item)}</h3>
                        <p>{item.category || "Uncategorized"}</p>
                      </div>
                      <strong>Rs. {price}</strong>
                    </div>
                    <p>{item.description}</p>
                    <div className="cart-item__bottom">
                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            quantity <= 1
                              ? onRemoveItem(productId)
                              : onUpdateQuantity(productId, quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(productId, quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <strong>Subtotal: Rs. {price * quantity}</strong>
                      <button type="button" className="button button--ghost" onClick={() => onRemoveItem(productId)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h3>Summary</h3>
            <p>
              Total quantity: <strong>{cart.totalQuantity}</strong>
            </p>
            <p>
              Total amount: <strong>Rs. {cart.totalAmount}</strong>
            </p>
            <button type="button" className="button button--solid button--full" onClick={() => onNavigate("checkout")}>
              Proceed to Checkout
            </button>
            <button type="button" className="button button--ghost button--full" onClick={onClearCart}>
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
