import { useState } from "react";

export default function Contact({ register }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `
*New Contact Form Submission*

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/919443311007?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="container contact-layout">
        <div className="reveal" ref={register}>
          <h2>Contact Us</h2>
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
                type="text"
                name="firstName"
                placeholder="Enter your name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>

          <label>
            Email Address
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message
            <textarea
              rows="4"
              name="message"
              placeholder="Tell us what's on your mind..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button
            type="submit"
            className="button button--solid button--full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}