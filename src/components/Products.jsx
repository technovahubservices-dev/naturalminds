import "../styles/components/Products.css";
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
  const rawCategory = item.category || "Uncategorized";
  const categoryWords = String(rawCategory).trim().split(/\s+/).filter(Boolean);
  const cardCategory =
    rawCategory && String(rawCategory).trim().length <= 24 && categoryWords.length <= 3
      ? rawCategory
      : "Product";

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
          <span className="product-card__category">{cardCategory}</span>
          {item.rating != null && (
            <span className="product-card__rating">Rating {item.rating}</span>
          )}
        </div>
        <h3 className="product-card__title">{item.name || item.title}</h3>
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

function getCompactCategory(category) {
  const rawCategory = category || "Uncategorized";
  const categoryWords = String(rawCategory).trim().split(/\s+/).filter(Boolean);

  if (String(rawCategory).trim().length <= 24 && categoryWords.length <= 3) {
    return rawCategory;
  }

  return "Product";
}

export function ProductDetailsPage({ item, onBack, onAddToCart, busyProductId, renderValue }) {
  const productId = item._id || item.id || item.productId;
  const details = Object.entries(item).filter(
    ([key]) => !["image", "_id", "__v", "description", "category"].includes(key)
  );
  const quickFacts = [
    { label: "Category", value: getCompactCategory(item.category) },
    { label: "Rating", value: item.rating != null ? `${item.rating}/5` : "N/A" },
    { label: "Price", value: `Rs. ${item.price ?? "N/A"}` },
    { label: "Product ID", value: productId || "N/A" },
  ];

  return (
    <section className="section container product-detail-page">
      <div className="product-detail-page__topbar">
        <button type="button" className="button button--ghost" onClick={onBack}>
          Back to products
        </button>
        <span className="product-detail-page__eyebrow">Featured product</span>
      </div>

      <div className="product-detail-hero">
        <div className="product-detail-hero__media">
          <img
            src={buildImageSrc(item.image)}
            alt={item.name || item.title || "Product"}
          />
          <div className="product-detail-hero__floating">
            <span>Starting at</span>
            <strong>Rs. {item.price ?? "N/A"}</strong>
            <p>{item.category || "Uncategorized"}</p>
          </div>
        </div>

        <div className="product-detail-hero__content">
          <p className="eyebrow">Product Details</p>
          <h2>{item.name || item.title}</h2>
          <p className="product-detail__description">
            {item.description || "No description available for this product yet."}
          </p>

          <div className="product-detail__badges">
            <span>{getCompactCategory(item.category)}</span>
            <span>{item.rating != null ? `${item.rating} star rating` : "No rating yet"}</span>
            <span>Freshly curated</span>
          </div>

          <div className="product-detail__actions">
            <button
              type="button"
              className="button button--solid"
              onClick={() => onAddToCart(item)}
              disabled={busyProductId === productId}
            >
              {busyProductId === productId ? "Adding..." : "Add to Cart"}
            </button>
            <button type="button" className="button button--ghost" onClick={onBack}>
              Back to listing
            </button>
          </div>

          <div className="product-detail__facts">
            {quickFacts.map((fact) => (
              <article className="product-detail__fact" key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="product-detail-grid">
        <article className="product-detail-panel">
          <p className="eyebrow">Why it stands out</p>
          <h3>Designed for confident browsing</h3>
          <p>
            This full-page layout keeps the product front and center with a richer image
            treatment, clearer price callout, and stronger data hierarchy than a popup.
          </p>
          <ul className="product-detail-points">
            <li>Image, title, and description stay easy to scan.</li>
            <li>Pricing and category stay visible while you decide.</li>
            <li>One tap adds the item to cart without leaving the page.</li>
          </ul>
        </article>

        <article className="product-detail-panel">
          <p className="eyebrow">All fields</p>
          <h3>Product data</h3>
          <dl className="product-detail__details">
            {details.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{renderValue(value)}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </section>
  );
}

export default function Products({ register, onCartChange, onNavigate, onSelectProduct }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
              onSelect={onSelectProduct}
              busyProductId={busyProductId}
              register={register}
            />
          ))
        )}
      </div>
    </section>
  );
}
