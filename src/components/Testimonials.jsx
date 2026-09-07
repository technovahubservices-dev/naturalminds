import { useState } from "react";
import { Star } from "lucide-react";
import "../styles/components/Testimonials.css";

const testimonials = [
  { name: "Priya S.", initials: "PS", rating: 5, quote: "Tuni Breads has become part of our everyday breakfast. The bread is soft, fresh and perfect for the whole family." },
  { name: "Arun K.", initials: "AK", rating: 5, quote: "I love the taste and softness. It works perfectly for sandwiches and morning toast." },
  { name: "Divya M.", initials: "DM", rating: 5, quote: "The wheat bread feels wholesome and tastes really good. My family enjoys it regularly." },
  { name: "Meena R.", initials: "MR", rating: 5, quote: "Fresh, soft and easy to enjoy every day. Tuni Breads has become a regular choice in our home." },
  { name: "Karthik P.", initials: "KP", rating: 5, quote: "The flavour is good and the bread stays soft. Great for breakfast and lunchboxes." },
];

export default function Testimonials() {
  const [interacting, setInteracting] = useState(false);
  return <section className="family-proof" id="testimonials" aria-labelledby="family-proof-heading">
    <div className="family-proof__heading">
      <span className="family-proof__label">THE PROOF</span>
      <h2 id="family-proof-heading">Loved by Families.</h2>
      <p>We’re grateful for the trust and kind words shared by families who choose Tuni Breads for their everyday meals.</p>
    </div>
    <div className="family-proof__wrapper" onPointerDown={() => setInteracting(true)} onPointerUp={() => setInteracting(false)} onPointerCancel={() => setInteracting(false)} onPointerLeave={() => setInteracting(false)}>
      <div className="family-proof__track" id="family-proof-track" style={{ animationPlayState: interacting ? "paused" : undefined }}>
        {[false, true].map(duplicate => <div className="family-proof__group" key={String(duplicate)} aria-hidden={duplicate || undefined} inert={duplicate ? true : undefined}>
          {testimonials.map(item => <article className="family-proof__card" key={item.name} tabIndex={duplicate ? -1 : 0} aria-label={`Feedback from ${item.name}`}>
            <blockquote>“{item.quote}”</blockquote>
            <div className="family-proof__customer"><span className="family-proof__avatar" aria-hidden="true">{item.initials}</span><div><strong>{item.name}</strong><span className="family-proof__stars" aria-label={`${item.rating} out of 5 stars`}>{Array.from({ length: item.rating }, (_, index) => <Star key={index} size={15} fill="currentColor" aria-hidden="true" />)}</span></div></div>
          </article>)}
        </div>)}
      </div>
    </div>
  </section>;
}
