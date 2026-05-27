import { testimonials } from "@/data/testimonialData";
import "./testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonial-section section-space p-relative" style={{ backgroundImage: "url(/assets/imgs/bg/testimonial-bg.png)" }}>
      <div className="small-container">
        <div className="title-box text-center mb-60">
          <span className="section-sub-title">Reviews</span>
          <h3 className="section-title mt-10">Customer Feedback</h3>
        </div>
        <div className="row g-4">
          {testimonials.map((item) => (
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" key={item.name}>
              <div className="testimonial-area">
                <div className="author-info">
                  <img src={item.image} alt="" />
                  <div><h5>{item.name}</h5><span>{item.role}</span></div>
                </div>
                <ul className="rating">{[1, 2, 3, 4, 5].map((star) => <li key={star}><i className="fas fa-star"></i></li>)}</ul>
                <p>“ {item.text} ”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
