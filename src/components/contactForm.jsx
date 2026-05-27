import "./contactForm.css";

export default function ContactForm() {
  return (
    <form className="clone-form contact-form">
      <div className="row">
        <div className="col-lg-6"><input placeholder="Your Name" /></div>
        <div className="col-lg-6"><input placeholder="Your Phone" /></div>
        <div className="col-lg-12"><input placeholder="Your Email" /></div>
        <div className="col-lg-12"><textarea placeholder="Message"></textarea></div>
      </div>
      <button className="primary-btn-1 btn-hover" type="button">Submit Request <span></span></button>
    </form>
  );
}
