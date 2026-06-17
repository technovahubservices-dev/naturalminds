

export default function Contact({ register }) {
  const whatsappNumber = "+919443311007";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const firstName = formData.get("firstName")?.toString().trim() || "";
    const lastName = formData.get("lastName")?.toString().trim() || "";
    const mobile = formData.get("mobile")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const fullName =
      [firstName, lastName].filter(Boolean).join(" ") || "Customer";

    const whatsappMessage = encodeURIComponent(`
New Contact Form Submission

 Name: ${fullName}
 Mobile: ${mobile || "Not provided"}
 Email: ${email || "Not provided"}

 Message:
${message || "No message entered"}
`);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );

    event.currentTarget.reset();
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-layout">
        <div className="reveal" ref={register}>
          <p className="eyebrow">Let's connect</p>
          <h2>Have questions about Mahima Bread?</h2>
          <p>
            Reach out anytime. We're happy to help with product inquiries,
            orders, delivery information, and more.
          </p>

          <div className="contact-list">
            <div>
              <span>Phone</span>
              <strong>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 94433 11007
                </a>
              </strong>
            </div>

            <div>
              <span>Email</span>
              <strong>hello@mahimabread.com</strong>
            </div>

            <div>
              <span>Address</span>
              <strong>Pondicherry, India</strong>
            </div>
          </div>
        </div>

        <form
          className="contact-form reveal"
          ref={register}
          onSubmit={handleSubmit}
        >
          <div className="form-row">
            <label>
              First Name
              <input
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                required
              />
            </label>

            <label>
              Last Name
              <input
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              />
            </label>
          </div>

          <label>
            Mobile Number
            <input
              name="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </label>

          <label>
            Email Address
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what's on your mind..."
              required
            />
          </label>

          <button
            type="submit"
            className="button button--solid button--full"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}