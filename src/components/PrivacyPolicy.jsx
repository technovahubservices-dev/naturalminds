import "../styles/components/PrivacyPolicy.css";

export default function PrivacyPolicy({ register }) {
  return (
    <section className="section section--muted legal-section" id="privacy-policy">
      <div className="container">
        <div className="section-heading center reveal" ref={register}>
          <p className="eyebrow">Privacy Policy</p>
          <h2>How we handle your information</h2>
          <p className="legal-intro">
            We only collect the information needed to process orders, improve
            service, and keep your account secure.
          </p>
        </div>

        <div className="legal-grid">
          <article className="legal-card reveal" ref={register}>
            <h3>Information we collect</h3>
            <p>
              When you place an order or contact us, we may collect your name,
              phone number, email address, delivery details, and order history.
              We also collect basic technical information such as browser type,
              device, and pages visited to help us understand how the site is
              being used.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>How we use it</h3>
            <p>
              We use your information to process purchases, respond to support
              requests, arrange delivery, improve product quality, and share
              updates about your orders. We do not sell your personal
              information.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>Sharing and security</h3>
            <p>
              We only share information with trusted service providers that help
              us operate the business, such as payment or delivery partners.
              Reasonable safeguards are used to protect your data, but no online
              service can guarantee absolute security.
            </p>
          </article>

          <article className="legal-card reveal" ref={register}>
            <h3>Your choices</h3>
            <p>
              You can request access, correction, or deletion of your
              information by contacting us. You can also opt out of marketing
              messages at any time.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
