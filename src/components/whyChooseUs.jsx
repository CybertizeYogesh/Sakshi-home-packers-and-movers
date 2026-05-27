import "./whyChooseUs.css";

const features = [
  ["icon-team", "Expert Packers", "Trusted team for safe and secure shifting packing and smooth transport service."],
  ["icon-prize-box", "Safe Transport", "Premium packing ensure full protection for your valuable goods during moving."],
  ["fat fa-phone-volume", "24/7 Support", "Our support team stays ready anytime to guide and assist you through every move."],
  ["icon-watch", "Fast Shifting", "Quick and reliable relocation service for homes offices and vehicles across cities."]
];

export default function WhyChooseUs() {
  return (
    <section className="features-section pt-80 pb-80 bg-color-1 p-relative is-dark">
      <div className="bg-shape-1" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-27.png)" }}></div>
      <div className="bg-shape-2" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-28.png)" }}></div>
      <div className="small-container">
        <div className="row g-4">
          {features.map(([icon, title, text]) => (
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" key={title}>
              <div className="features-box-area p-relative wow fadeInLeft bg-color-3" data-wow-delay="500ms">
                <div className="shape-1" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-24.png)" }}></div>
                <div className="shape-2" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-25.png)" }}></div>
                <div className="shape-3" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-26.png)" }}></div>
                <div className="icon-box"><i className={icon}></i></div>
                <h5 className="mt-20 mb-10"><a href="/services">{title}</a></h5>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
