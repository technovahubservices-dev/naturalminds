export default function About({ register }) {
  return (
    <section className="section container" id="about">
      <div className="about-layout">
        <div className="about-layout__media reveal" ref={register}>
          <img
            src="/farm.svg"
            alt="Our Farm"
          />
        </div>
        <div className="about-layout__copy reveal" ref={register}>
          <p className="eyebrow">Our Heritage</p>
          <h2>Nurturing life through pure organics</h2>
          <p>
            Founded on the principle of radical transparency, Nature&apos;s Fresh
            brings you back to the roots of nutrition. We believe what you put
            into your body should be as pure as the earth intended.
          </p>
          <ul className="checklist">
            <li>Commitment to quality with every batch tested</li>
            <li>Sustainable sourcing and regenerative farming</li>
          </ul>
          <a className="button button--solid" href="#contact">
            Read Our Story
          </a>
        </div>
      </div>
    </section>
  );
}
