import "./hero.css";

const slides = [
  ["PROVIDE THE BEST RELOCATION", "Our Best Relocation Services & Consulting", "We handle safe professional relocation and support clients who need smooth", "packing and moving for all types of homes."],
  ["RELIABLE MOVING SOLUTIONS", "Our Trusted Moving Services & Consulting", "We provide reliable moving solutions and support families who are fully", "prepared for secure packing and transport of belongings."],
  ["PROVIDE THE BEST SERVICES", "Our Professional Relocation Services", "We ensure safe office relocation and support teams who are fully", "trained and experienced for smooth business shifting nationwide."]
];

export default function Hero() {
  return (
    <section className="banner-section-2 p-relative fix">
      <div className="swiper banner-active clone-hero-slider">
        <div className="swiper-wrapper">
          {slides.map(([kicker, title, line1, line2], index) => (
            <div className="swiper-slide clone-slide" key={title}>
              <div className="banner-main-2" style={{ backgroundImage: "url(/assets/imgs/banner/banner-3.webp)" }}>
                <div className="large-container">
                  <div className="banner-area-2 p-relative z-3 wow img-custom-anim-left animated" style={{ animationDelay: `${index * 6}s` }}>
                    <span className="p-relative banner-sub-title">{kicker}</span>
                    <h1 className="banner-title">{title}</h1>
                    <p className="banner-text">{line1}<br /> {line2}</p>
                    <div className="banner-btn-area-2">
                      <a className="primary-btn-1 btn-hover" href="/services">VIEW SERVICES &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
                      <div className="round-image-area">
                        <div className="image-1"><img alt="" width="158" height="50" src="/original-next/static/media/clients-group.322db630.png" /></div>
                      </div>
                      <h6>satisfied clients</h6>
                    </div>
                  </div>
                  <div className="socials-area">
                    <ul>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                    <span>FOLLOW US</span>
                  </div>
                </div>
              </div>
              <div className="shape-area-2">
                {[18, 19, 20, 21, 22, 23].map((n, i) => (
                  <div key={n} className={`shape-${i + 1}`} style={{ backgroundImage: `url(/assets/imgs/shapes/shape-${n}.png)` }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="banner-dot-inner"><div className="banner-dot"></div></div>
    </section>
  );
}

