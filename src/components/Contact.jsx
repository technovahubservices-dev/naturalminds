import "../styles/components/Contact.css";
import { useState } from "react";

export default function Contact({ register }) {
  const whatsappNumber = "919443311007";
  const [formError, setFormError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = (formData.get("firstName") || "").toString().trim();
    const lastName = (formData.get("lastName") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!firstName || !lastName || !email || !phone || !message) {
      setFormError("Please fill in all fields before sending your message.");
      return;
    }
    if (!/^[+\d\s().-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Customer";
    const whatsappMessage = encodeURIComponent(
      `Hello Mahimy Foods,\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );

    setFormError("");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section section--contact" id="contact-page" aria-labelledby="contact-page-title">
      <div className="container contact-layout">
        <div className="reveal" ref={register}>
          <p className="eyebrow">Let&apos;s connect</p>
          <h1 id="contact-page-title">Contact Mahimy Foods</h1>
          <p>
            Reach out anytime. We&apos;re happy to help with product details,
            ingredient choices like honey, coconut milk and butter or any
            order and support questions.
          </p>

          <div className="contact-list">
            <div>
              <span className="contact-label-highlight">Phone</span>
              <strong>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer noopener">
                  +91 94433 11007
                </a>
              </strong>
            </div>
            <div>
              <span className="contact-label-highlight">Email</span>
              <strong>
                <a href="mailto:mahimyfoodsin@gmail.com">mahimyfoodsin@gmail.com</a>
              </strong>
            </div>
            <div>
              <span className="contact-label-highlight">Address</span>
              <strong>No 75 76 77 78 SRI BAKKIYAPERUMAL NAGAR PERIYAKAATUPALAYAM Reddichavadi</strong>
              <strong>Cuddalore, Tamil Nadu,607403.</strong>   
            </div>
          </div>
        </div>

        <form className="contact-form reveal" ref={register} onSubmit={handleSubmit}>
          <h2>Send us an enquiry</h2>
          <p>Enter your details below. Continue to WhatsApp to review and send your message to our team.</p>
          {formError && <p className="status-message error-message" role="alert">{formError}</p>}
          <div className="form-row">
            <label>
              First Name
              <input name="firstName" type="text" autoComplete="given-name" required maxLength={80} placeholder="Enter your name" />
            </label>
            <label>
              Last Name
              <input name="lastName" type="text" autoComplete="family-name" required maxLength={80} placeholder="Enter your last name" />
            </label>
          </div>
          <label>
            Email Address
            <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Enter your email address" />
          </label>
          <label>
            Phone Number
            <input name="phone" type="tel" autoComplete="tel" required maxLength={25} placeholder="Enter your phone number" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              maxLength={2000}
              rows="4"
              placeholder="Tell us what&apos;s on your mind..."
            />
          </label>
          <button type="submit" className="button button--solid button--full">
            Continue to WhatsApp
          </button>
        </form>

       
      </div>
    </section>
  );
}
