import { buildImageSrc } from "../lib/api";

export function ProductDetailsPage({ item, onBack, onAddToCart, busyProductId, renderValue }) {
  const productId = item._id || item.id || item.productId;
  const details = Object.entries(item).filter(([key]) => !["image", "_id", "__v"].includes(key));
  const quickFacts = [
    { label: "Category", value: item.category || "Uncategorized" },
    {
      label: "Rating",
      value: item.rating != null ? `${item.rating}/5` : "N/A",
    },
    {
      label: "Price",
      value: item.price != null ? `Rs. ${item.price}` : "N/A",
    },
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
            <span>{item.category || "Uncategorized"}</span>
            <span>
              {item.rating != null ? `${item.rating} star rating` : "No rating yet"}
            </span>
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

export default ProductDetailsPage;
