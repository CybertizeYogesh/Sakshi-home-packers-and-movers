export default function InternalHero({ title }) {
  return (
    <section className="page-title-section p-relative" style={{ backgroundImage: "url(/assets/imgs/resources/page-title-bg-1.webp)" }}>
      <div className="small-container">
        <div className="page-title-content">
          <h1>{title}</h1>
          <ul className="breadcrumb-list">
            <li><a href="/">Home</a></li>
            <li><span>/</span></li>
            <li><span>{title}</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
