export default function Contact({ register }) {
  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-layout">
        <div className="reveal" ref={register}>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Have questions about the bakery storefront theme?</h2>
          <p>
            Reach out anytime. We&apos;re happy to help with layout adjustments,
            responsive refinements, or palette updates for your screens.
          </p>

          <div className="contact-list">
            <div>
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>
            <div>
              <span>Email</span>
              <strong>hello@Mahima Bread.com</strong>
            </div>
            <div>
              <span>Address</span>
              <strong>Pondicherry, India</strong>
            </div>
          </div>
        </div>

        <form className="contact-form reveal" ref={register}>
          <div className="form-row">
            <label>
              First Name
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Last Name
              <input type="text" placeholder="Enter your last name" />
            </label>
          </div>
          <label>
            Email Address
            <input type="email" placeholder="Enter your email address" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us what&apos;s on your mind..." />
          </label>
          <button type="submit" className="button button--solid button--full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
