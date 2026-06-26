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
    const message = (formData.get("message") || "").toString().trim();

    if (!firstName || !lastName || !email || !message) {
      setFormError("Please fill in all fields before sending your message.");
      return;
    }

    const fullName = [firstName, lastName].filter(Boolean).join(" ") || "Customer";
    const whatsappMessage = encodeURIComponent(
      `Hello mahimy foods,\n\nName: ${fullName}\nEmail: ${email || "Not provided"}\nMessage: ${message || "No message entered"}`
    );

    setFormError("");
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-layout">
        <div className="reveal" ref={register}>
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Have questions about our breads and natural ingredients?</h2>
          <p>
            Reach out anytime. We&apos;re happy to help with product details,
            ingredient choices like honey, coconut milk, and butter, or any
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
          {formError && <p className="status-message error-message">{formError}</p>}
          <div className="form-row">
            <label>
              First Name
              <input name="firstName" type="text" placeholder="Enter your name" />
            </label>
            <label>
              Last Name
              <input name="lastName" type="text" placeholder="Enter your last name" />
            </label>
          </div>
          <label>
            Email Address
            <input name="email" type="email" placeholder="Enter your email address" />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what&apos;s on your mind..."
            />
          </label>
          <button type="submit" className="button button--solid button--full">
            Send on WhatsApp
          </button>
        </form>

       
      </div>
    </section>
  );
}
