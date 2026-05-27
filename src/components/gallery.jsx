import { galleryItems } from "@/data/galleryData";
import "./gallery.css";

export default function Gallery({ limit = 5 }) {
  return (
    <section className="project-section section-space">
      <div className="small-container">
        <div className="project-title-area mb-60">
          <div className="title-box wow fadeInLeft" data-wow-delay=".5s">
            <span className="section-sub-title">delivery</span>
            <h3 className="section-title mt-10">Our Latest Delivery</h3>
          </div>
          <a className="primary-btn-1 btn-hover" href="/projects">all DELIVERY &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
        </div>
        <div className="row g-4">
          {galleryItems.slice(0, limit).map((item) => (
            <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={item.image}>
              <div className="project-area">
                <div className="project-image"><img src={item.image} alt="" /></div>
                <div className="project-content">
                  <span>{item.label}</span>
                  <h5><a href="/projects">{item.title}</a></h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
