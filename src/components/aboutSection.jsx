import "./aboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-2-section p-relative fix section-space">
      <div className="bg-shape-1" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-30.png)" }}></div>
      <div className="bg-shape-2" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-31.png)" }}></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="about-2-image-area p-relative wow fadeInLeft" data-wow-delay="500ms">
              <figure className="main-image m-img"><img alt="" width="452" height="548" src="/original-next/static/media/about-3.3c127553.webp" /></figure>
              <div className="small-image"><img alt="" width="239" height="256" src="/original-next/static/media/about-4.774e4434.webp" /></div>
              <div className="icon-box">
                <div className="icon"><i className="icon-prize-1"></i></div>
                <div className="content"><h3 className="mb-10"><span className="counter">25</span>+</h3><p>World Best Transport Award Won</p></div>
              </div>
              <div className="shape-1" style={{ backgroundImage: "url(/assets/imgs/shapes/shape-29.png)" }}></div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="about-2-content-area pl-50">
              <div className="title-box mb-35 wow fadeInRight" data-wow-delay=".5s">
                <span className="section-sub-title">About Us</span>
                <h3 className="section-title mt-10">Moving Your World With Us, One Box at a Time</h3>
              </div>
              <p className="mb-35">Sakshi Home Packers and Movers in Bangalore is a reliable relocation service provider, known for its professional and efficient moving solutions. Their experienced team ensures the safe and timely delivery of your belongings, making every move stress-free.</p>
              <div className="row mb-45">
                <div className="col-lg-6"><ul className="list-area"><li className="mb-10">Accurate Packing Processes</li><li className="mb-10">100% Moving Guarantee</li><li className="mb-10">Award Winning Company</li></ul></div>
                <div className="col-lg-6"><ul className="list-area"><li className="mb-10">6000+ Successful Relocations done</li><li className="mb-10">Professional Packers Provide</li><li className="mb-10">Damage Free Handling</li></ul></div>
              </div>
              <div className="about-2-btn-area">
                <a className="primary-btn-1 btn-hover" href="/about">about us &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
                <div className="call-us"><div className="icon-1"><i className="fal fa-phone-volume"></i></div><div className="content p-relative"><span>Call Us Now</span><h5><a href="tel:8095500072">8095500072</a></h5></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

