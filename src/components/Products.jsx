import { useEffect, useState } from "react";
import {
  apiRequest,
  buildImageSrc,
  buildProductPayload,
  formatCartSummary,
} from "../lib/api";

function ProductCard({ item, index, onAddToCart, onSelect, busyProductId, register }) {
  const productId = item._id || item.id || item.productId;
  const isBusy = busyProductId === productId;

  return (
    <article
      className={`product-card reveal delay-${index}`}
      ref={register}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${item.name || item.title || "product"}`}
      onClick={() => onSelect(item)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(item);
        }
      }}
    >
      <div className="product-card__imageWrap">
        <img src={buildImageSrc(item.image)} alt={item.name || item.title || "Product"} />
      </div>

      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{item.category || "Uncategorized"}</span>
          {item.rating != null && <span>Rating {item.rating}</span>}
        </div>
        <h3>{item.name || item.title}</h3>
        <p>{item.description}</p>
        <div className="product-card__footer">
          <strong>Rs. {item.price ?? "N/A"}</strong>
          <button
            type="button"
            className="button button--solid button--compact"
            onClick={(event) => {
              event.stopPropagation();
              onAddToCart(item);
            }}
            disabled={isBusy}
          >
            {isBusy ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Products({ register, onCartChange, onNavigate }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [message, setMessage] = useState("");
  const [busyProductId, setBusyProductId] = useState("");

  const loadProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await apiRequest(`/products?ts=${Date.now()}`);
      const products = Array.isArray(data)
        ? data
        : Array.isArray(data?.products)
          ? data.products
          : Array.isArray(data?.data)
            ? data.data
            : [];
      setItems(products);
    } catch (requestError) {
      setItems([]);
      setError(requestError.message || "We could not load the products right now.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  const addToCart = async (item) => {
    const productId = item._id || item.id || item.productId;
    setBusyProductId(productId);
    setMessage("");

    try {
      await apiRequest("/cart", {
        method: "POST",
        body: buildProductPayload(item, 1),
      });

      const cartData = await apiRequest("/cart");
      onCartChange(formatCartSummary(cartData?.cart));
      setMessage(`${item.name || item.title || "Item"} added to cart.`);
    } catch (requestError) {
      setMessage(requestError.message || "Unable to add the item to cart.");
    } finally {
      setBusyProductId("");
    }
  };

  const renderValue = (value) => {
    if (value == null || value === "") {
      return "N/A";
    }

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    if (typeof value === "object") {
      return JSON.stringify(value);
    }

    return String(value);
  };

  return (
    <section className="section container" id="products">
      <div className="section-heading reveal" ref={register}>
        <p className="eyebrow">Products</p>
        <h2>Products</h2>
      </div>

      <div className="page-banner reveal">
        <div>
          <strong> product listing</strong>
          <p>
            Each card shows image, name, description, price, rating, and category from
            <code>GET /products</code>.
          </p>
        </div>
        <div className="page-banner__actions">
          <button type="button" className="button button--ghost" onClick={() => onNavigate?.("home")}>
            Back Home
          </button>
          <button type="button" className="button button--solid" onClick={() => onNavigate?.("cart")}>
            Go to Cart
          </button>
        </div>
      </div>

      {message && <p className="status-message reveal">{message}</p>}

      <div className="product-grid">
        {loading ? (
          <p className="reveal">Loading products...</p>
        ) : error ? (
          <p className="reveal">{error}</p>
        ) : items.length === 0 ? (
          <p className="reveal">No products found.</p>
        ) : (
          items.map((item, index) => (
            <ProductCard
              key={item._id || item.id || item.productId || item.name || index}
              item={item}
              index={index}
              onAddToCart={addToCart}
              onSelect={setSelectedItem}
              busyProductId={busyProductId}
              register={register}
            />
          ))
        )}
      </div>

      {selectedItem && (
        <div
          className="product-modal"
          role="presentation"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="product-modal__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="product-modal__close"
              aria-label="Close product details"
              onClick={() => setSelectedItem(null)}
            >
              x
            </button>

            <div className="product-modal__media">
              <img
                src={buildImageSrc(selectedItem.image)}
                alt={selectedItem.name || selectedItem.title || "Product"}
              />
            </div>

            <div className="product-modal__content">
              <p className="eyebrow">Product Details</p>
              <h3 id="product-modal-title">{selectedItem.name || selectedItem.title}</h3>
              <p className="product-modal__description">{selectedItem.description}</p>

              <dl className="product-modal__details">
                {Object.entries(selectedItem)
                  .filter(([key]) => key !== "image" && key !== "_id" && key !== "__v")
                  .map(([key, value]) => (
                    <div key={key}>
                      <dt>{key}</dt>
                      <dd>{renderValue(value)}</dd>
                    </div>
                  ))}
              </dl>

              <div className="product-modal__actions">
                <button
                  type="button"
                  className="button button--solid"
                  onClick={() => addToCart(selectedItem)}
                  disabled={busyProductId === (selectedItem._id || selectedItem.id || selectedItem.productId)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
