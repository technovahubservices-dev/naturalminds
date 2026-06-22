import "../styles/components/AboutPage.css";

export default function AboutPage({ onNavigate, register }) {
  return (
    <section className="section container">
      <div className="section-heading reveal" ref={register}>
        <p className="eyebrow">About Us</p>
        <h2>Nurturing a warm premium bakery experience</h2>
      </div>

      <div className="page-banner reveal delay-1" ref={register}>
        <div>
          <strong>Our story</strong>
          <p>
            mahimy foods is designed to echo the elegant bakery storefront style:
            soft cream surfaces, golden highlights, rounded cards, and a layout
            that stays beautiful from large desktop screens to compact phones.
          </p>
        </div>
        <div className="page-banner__actions">
          <button type="button" className="button button--ghost" onClick={() => onNavigate("home")}>
            Home
          </button>
          <button type="button" className="button button--solid" onClick={() => onNavigate("products")}>
            View Products
          </button>
        </div>
      </div>

      <div className="about-layout about-layout--page">
        <div className="about-layout__media reveal delay-1" ref={register}>
          <img src="/farm.svg" alt="Nature's Fresh farm" />
        </div>
        <div className="about-layout__copy reveal delay-2" ref={register}>
          <ul className="checklist">
            <li>Premium cream and gold palette inspired by the reference theme</li>
            <li>Responsive sections that stay balanced across screen sizes</li>
            <li>Soft shadows, rounded panels, and polished storefront spacing</li>
          </ul>
          <p>
            The goal is a storefront that feels inviting, modern, and easy to
            browse while still keeping a handcrafted bakery look.
          </p>
        </div>
      </div>
    </section>
  );
}
