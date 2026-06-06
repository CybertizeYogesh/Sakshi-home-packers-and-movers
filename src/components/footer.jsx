import "./footer.css";

const quickLinks = [
  ["About Us", "/about"],
  ["Our Delivery", "/projects"],
  ["Our Services", "/services"],
  ["Latest Blog", "/blog-grid"],
  ["Contact Us", "/contact"]
];

const services = [
  ["Home Shifting", "/home-shifting"],
  ["Office Shifting", "/office-shifting"],
  ["Loading And Unloading", "/loading-unloading"],
  ["Packing And Unpacking", "/packing-unpacking"],
  ["Warehouse services", "/warehouse-services"],
  ["Insurance Services", "/insurance-services"]
];

const gallery = [
  "/original-next/static/media/footer-1.22796860.png",
  "/original-next/static/media/footer-2.3a3ab4f4.png",
  "/original-next/static/media/footer-3.bff73fb9.png",
  "/original-next/static/media/footer-4.f249c736.png"
];

export default function Footer() {
  return (
    <footer className="footer-1-section p-relative">
      <div className="shape-1" style={{ backgroundImage: "url(/assets/imgs/footer/shape-f-1.png)" }}></div>
      <div className="shape-2" style={{ backgroundImage: "url(/assets/imgs/footer/shape-f-2.png)" }}></div>
      <div className="small-container">
        <div className="footer-main pt-80 pb-80">
          <div className="row g-4">
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget-1">
                <div className="footer-logo mb-30">
                  <a href="/"><img src="/assets/img/logo-white.svg" alt="Sakshi Home Packers and Movers logo" width="96" height="85" /></a>
                </div>
                <p>Professional shifting service available for home office and transport trusted movers ensure safety</p>
                <h6 className="mt-35">Working Hours:</h6>
                <ul className="footer-working-list">
                  <li>24*7 : 09.00AM - 09.00PM</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget-2">
                <h4 className="footer-title">Quick Links</h4>
                <ul className="footer-links">
                  {quickLinks.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget-3">
                <h4 className="footer-title">Our Services</h4>
                <ul className="footer-links">
                  {services.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget-4">
                <h4 className="footer-title">Our Gallery</h4>
                <div className="footer-gallery">
                  {gallery.map((src, index) => <a key={src} href="/projects"><img src={src} alt={`Gallery image ${index + 1}`} /></a>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Sakshi Home Packers and Movers. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms &amp; Condition</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

