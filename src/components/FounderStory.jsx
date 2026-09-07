import { ArrowLeft, ArrowRight, Leaf, ShieldCheck, Star, Users } from "lucide-react";
import "../styles/components/FounderStory.css";

const statistics = [
  { value: "35K+", label: "Happy Customers", icon: Users },
  { value: "4.9/5", label: "Customer Rating", icon: Star, rating: true },
  { value: "2", label: "Signature Breads", icon: ShieldCheck },
  { value: "Quality", label: "You Can Trust", icon: Leaf },
];
const testimonial = { quote: "The bread is so fresh and tasty! My family loves it. Finally a bread that’s both wholesome and delicious.", author: "A Happy Customer" };
const Stars = () => <span className="founder-story__stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, index) => <Star key={index} size={14} fill="currentColor" aria-hidden="true" />)}</span>;

export default function FounderStory({ onNavigate }) {
  return <section className="founder-story" aria-labelledby="founder-story-heading" style={{ "--founder-art": "url('/images/mahimy-founder-story-bg.png')" }}>
    <div className="founder-story__top">
      <div className="founder-story__visual" role="img" aria-label="A baker preparing bread in the bakery" />
      <div className="founder-story__copy">
        <span className="founder-story__label">OUR STORY</span>
        <h2 id="founder-story-heading">Crafted with Passion<br />by Mahimy Foods.</h2>
        <p>Mahimy Foods began with a simple belief — everyday bread can be made more thoughtfully. Inspired by traditional ingredients and driven by a passion for quality, we created Tuni Breads to bring wholesome goodness to everyday family meals.</p>
        <button className="founder-story__cta" onClick={() => onNavigate("about")}>LEARN MORE ABOUT US <ArrowRight size={18} aria-hidden="true" /></button>
      </div>
      <blockquote className="founder-story__quote"><p>“Good food has the power<br />to bring people together<br />and create brighter days.”</p><cite>— Team Mahimy Foods</cite></blockquote>
    </div>
    <div className="founder-story__bottom">
      <div className="founder-story__stats">{statistics.map(({ value, label, icon: Icon, rating }) => <div className="founder-story__stat" key={label}><Icon size={28} strokeWidth={1.4} aria-hidden="true" /><strong>{value}</strong><span>{label}</span>{rating && <Stars />}</div>)}</div>
      <div className="founder-story__testimonial">
        <blockquote><p>“{testimonial.quote}”</p><cite>— {testimonial.author}</cite></blockquote>
        <div className="founder-story__testimonial-bottom"><Stars /><div className="founder-story__controls"><button disabled aria-label="Previous testimonial"><ArrowLeft size={17} /></button><button disabled aria-label="Next testimonial"><ArrowRight size={17} /></button></div></div>
      </div>
    </div>
  </section>;
}
