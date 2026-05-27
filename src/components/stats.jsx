import "./stats.css";

const stats = [
  ["icon-home-1", "3000", "+", "Successful Delivery"],
  ["icon-team", "450", "+", "Professional Experts"],
  ["icon-prize-box", "3150", "", "Moves Completed"],
  ["icon-team-1", "6561", "", "Satisfied Clients"]
];

export default function Stats() {
  return (
    <section className="icon-box-counter-section section-space">
      <div className="small-container">
        <div className="row g-4">
          {stats.map(([icon, number, suffix, label]) => (
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6" key={label}>
              <div className="icon-box-counter-area">
                <div className="icon-box"><i className={icon}></i></div>
                <div className="content"><h3><span className="counter">{number}</span>{suffix}</h3><span className="text-1">{label}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
