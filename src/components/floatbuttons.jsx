import "./floatbuttons.css";

export default function FloatButtons() {
  return (
    <div className="floating-buttons">
      <a href="tel:+919752828166" className="float-btn call-btn" title="Call Now">
        <i className="fas fa-phone-alt"></i>
      </a>
      <a
        href="https://wa.me/919752828166?text=Hii%20%0A%20I%22m%20looking%20For%20Moving%20%0A%20With%20Your%20Company"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
