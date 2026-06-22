import "../styles/components/About.css";

export default function About({ register }) {
  return (
    <section className="section container" id="about">
      <div className="about-layout">
        <div className="about-layout__media reveal" ref={register}>
          <img
            src="/farm.svg"
            alt="mahimy foods storefront illustration"
          />
        </div>
        <div className="about-layout__copy reveal" ref={register}>
          <p className="eyebrow">About Us</p>
          <h2>Nurturing a premium bakery look and feel</h2>
          <p>
            mahimy foods brings the warm bakery reference style into a responsive
            storefront system with creamy backgrounds, soft gold accents, and
            polished spacing that scales to every screen size.
          </p>
          <ul className="checklist">
            <li>Elegant premium palette inspired by the reference theme</li>
            <li>Responsive layout choices for desktop and mobile screens</li>
          </ul>
          <a className="button button--solid" href="#contact">
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
