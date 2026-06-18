import "../styles/components/CheckoutPage.css";
import { useState } from "react";

const initialForm = {
  customerName: "",
  email: "",
  phone: "",
  address: "",
};

export default function CheckoutPage({
  cart,
  loading,
  error,
  onNavigate,
  onCheckout,
}) {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitOrder = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      await onCheckout(form);
      setForm(initialForm);
    } catch (requestError) {
      setMessage(requestError.message || "Checkout failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section container">
      <div className="section-heading">
        <p className="eyebrow">Checkout</p>
        <h2>Place your order</h2>
      </div>

      <div className="page-banner">
        <div>
          <strong>Checkout endpoint</strong>
          <p>
            This form submits to <code>POST /checkout</code> and then moves you to the success page.
          </p>
        </div>
        <div className="page-banner__actions">
          <button type="button" className="button button--ghost" onClick={() => onNavigate("cart")}>
            Back to Cart
          </button>
        </div>
      </div>

      {loading ? (
        <p>Loading cart summary...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : cart.items.length === 0 ? (
        <div className="empty-state">
          <strong>Your cart is empty.</strong>
          <p>You need products in the cart before checkout.</p>
          <button type="button" className="button button--solid" onClick={() => onNavigate("products")}>
            Browse Products
          </button>
        </div>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={submitOrder}>
            <label>
              Customer Name
              <input
                name="customerName"
                type="text"
                value={form.customerName}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={updateField}
                required
              />
            </label>
            <label>
              Address
              <textarea
                name="address"
                rows="4"
                value={form.address}
                onChange={updateField}
                required
              />
            </label>

            <button
              type="submit"
              className="button button--solid button--full"
              disabled={submitting}
            >
              {submitting ? "Placing Order..." : "Place Order"}
            </button>

            {message && <p className="error-message">{message}</p>}
          </form>

          <aside className="cart-summary">
            <h3>Order Summary</h3>
            <p>
              Total quantity: <strong>{cart.totalQuantity}</strong>
            </p>
            <p>
              Total amount: <strong>Rs. {cart.totalAmount}</strong>
            </p>
            <ul className="checkout-summary-list">
              {cart.items.map((item) => (
                <li key={item.productId || item._id || item.id}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </section>
  );
}
