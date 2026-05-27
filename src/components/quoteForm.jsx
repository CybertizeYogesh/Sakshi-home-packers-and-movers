import "./quoteForm.css";

export default function QuoteForm() {
  return (
    <section className="help-form-section p-relative" style={{ backgroundImage: "url(/assets/imgs/bg/help-bg.webp)" }}>
      <div className="small-container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="help-form-image"><img src="/original-next/static/media/help-form.066383ac.webp" alt="" /></div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="help-form-area">
              <span className="section-sub-title">Book Shifting</span>
              <h3 className="section-title mt-10">Moving Services Available</h3>
              <form className="clone-form">
                <input placeholder="Your Name" />
                <input placeholder="Your Phone" />
                <input placeholder="Moving Date" />
                <input placeholder="Shifting From" />
                <input placeholder="Shifting To" />
                <button className="primary-btn-1 btn-hover" type="button">Submit Request<span></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

