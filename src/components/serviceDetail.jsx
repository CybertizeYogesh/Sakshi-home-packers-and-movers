import InternalHero from "@/components/internalHero";
import { services } from "@/data/serviceData";
import QuoteForm from "@/components/quoteForm";

export default function ServiceDetail({ slug }) {
  const service = services.find((item) => item.slug === slug) || services[0];
  return (
    <>
      <InternalHero title={service.title} />
      <section className="service-details-section section-space">
        <div className="small-container">
          <div className="row g-4">
            <div className="col-xl-8 col-lg-8">
              <div className="service-details-area internal-content">
                <img className="w-100 mb-35" src={service.detailImages[0] || service.image} alt="" />
                <h2>{service.title}</h2>
                <p>{service.excerpt}</p>
                <p>Sakshi Home Packers and Movers provides careful packing, organized loading, safe transport and reliable delivery support for every relocation requirement. The team follows a planned process so shifting stays smooth and goods remain protected.</p>
                <div className="row g-4 mt-20 mb-35">
                  {(service.detailImages || []).slice(1, 4).map((image) => (
                    <div className="col-md-4" key={image}><img className="w-100" src={image} alt="" /></div>
                  ))}
                </div>
                <ul className="list-area">
                  {service.points.map((point) => <li className="mb-10" key={point}>{point}</li>)}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <aside className="service-sidebar">
                <h4>Our Services</h4>
                <ul>
                  {services.map((item) => <li key={item.slug}><a href={`/${item.slug}`}>{item.title}</a></li>)}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <QuoteForm />
    </>
  );
}
