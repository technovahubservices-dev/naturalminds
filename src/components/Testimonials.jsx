import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/components/Testimonials.css";

const testimonials = [
  {
    name: "Sathish Kumar P.",
    role: "Commercial Insurance",
    initials: "SK",
    rating: 5,
    quote:
      "Your Tuni white bread and wheat bread were great in softness, aroma and flavour.",
  },
  {
    name: "Babu Venkatachalapathy",
    role: "Finance & Insurance",
    initials: "BV",
    rating: 5,
    quote:
      "Recently bought your bread blended with coconut milk, dates and honey. Excellent taste, freshness and quality.",
  },
  {
    name: "Dinesh C.",
    role: "Lawyer",
    initials: "DC",
    rating: 5,
    quote:
      "Quality bread. Fresh, soft and delicious. Highly recommended.",
  },
  {
    name: "Priya Parthiban",
    role: "Gifts",
    initials: "PP",
    rating: 5,
    quote:
      "I recently tried Mahimy Foods products and was impressed by the quality, freshness and taste.",
  },
  {
    name: "Priyanka B",
    role: "Training & Coaching",
    initials: "PB",
    rating: 5,
    quote:
      "Mahimy Foods delivers exceptional quality and taste consistently. Their products are fresh and hygienically prepared.",
  },
  {
    name: "C. Sridharan",
    role: "Customer",
    initials: "CS",
    rating: 5,
    quote:
      "Very tasty and good. Good product and worth eating. This bread can reach many households.",
  },
];

const gradients = [
  "card-1",
  "card-2",
  "card-3",
  "card-4",
  "card-5",
  "card-6",
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="section-heading">
        <span className="eyebrow">CUSTOMER LOVE</span>
        <h2>What Customers Are Saying</h2>
      </div>

      <div className="testimonial-wrapper">
        <button className="arrow-btn" onClick={prevSlide}>
          <ChevronLeft size={28} />
        </button>

        <article
          className={`testimonial-card ${gradients[currentIndex]}`}
        >
          <div className="testimonial-header">
            <div className="avatar">
              {testimonial.initials}
            </div>

            <div>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.role}</span>
            </div>
          </div>

          <div className="rating">
            {"★".repeat(testimonial.rating)}
          </div>

          <p className="quote">
            "{testimonial.quote}"
          </p>

          <div className="quote-icon">❝</div>
        </article>

        <button className="arrow-btn" onClick={nextSlide}>
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              currentIndex === index ? "active-dot" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}