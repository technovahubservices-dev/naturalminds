import "../styles/components/TermsConditions.css";

export default function TermsConditions({ register }) {
  return (
    <section className="section legal-section" id="terms-conditions">
      <div className="container">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">Terms &amp; Conditions</p>
          <h2>Simple rules for a smooth experience</h2>
          <p className="legal-intro">
            By placing an order or using the website, you agree to the terms
            below.
          </p>
        </div>

        <div className="legal-grid">
          <article className="legal-card reveal" ref={register}>
            <h3>Orders and payments</h3>
            <p>
              All orders are subject to availability and confirmation. Prices,
              promotions, and product availability may change without notice.
              Payment must be completed using the methods made available at
              checkout.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>Delivery and freshness</h3>
            <p>
              We aim to deliver within the time windows shown at checkout, but
              delays can occur because of weather, traffic, or supply issues.
              If a product arrives damaged or incorrect, contact us promptly so
              we can help.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>Returns and refunds</h3>
            <p>
              Because we sell perishable goods, return eligibility may be
              limited. Where a refund is approved, it will be processed to the
              original payment method or as store credit, depending on the
              situation.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>Content and use</h3>
            <p>
              The website content, product descriptions, images, and branding
              belong to Nature&apos;s Fresh or its licensors. Please do not reuse
              them without permission. Using the site for unlawful activity is
              not allowed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
