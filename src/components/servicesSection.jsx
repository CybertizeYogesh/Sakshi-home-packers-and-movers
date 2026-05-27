import { services } from "@/data/serviceData";
import "./servicesSection.css";

export default function ServicesSection() {
  return (
    <section className="service-tab-section section-space bg-color-1 p-relative">
      <div className="bg-image" style={{ backgroundImage: "url(/assets/imgs/bg/line.png)" }}></div>
      <div className="small-container">
        <div className="service-tab-title-area mb-70">
          <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">WHAT WE DO</span>
            <h3 className="section-title mt-10 text-white">Delivering High Quality<br />Moving Services</h3>
          </div>
          <a className="primary-btn-1 btn-hover" href="/services">all services &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
        </div>
        <div className="row g-4">
          {services.slice(0, 4).map((service) => (
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" key={service.slug}>
              <div className="service-tab-box-area">
                <figure className="image w-img"><img src={service.tabImage} alt="" /></figure>
                <div className="content">
                  <h4><a href={`/${service.slug}`}>{service.title}</a></h4>
                  <p>{service.excerpt}</p>
                  <ul>
                    {service.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                  <a className="primary-btn-5 btn-hover" href={`/${service.slug}`}>Read more &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
