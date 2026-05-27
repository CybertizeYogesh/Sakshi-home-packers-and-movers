"use client";

import { useState } from "react";
import { faqs } from "@/data/faqData";
import "./faq.css";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section section-space">
      <div className="small-container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="faq-image"><img src="/original-next/static/media/faq-2.1f457169.webp" alt="" /></div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="title-box mb-35">
              <span className="section-sub-title">Faq's</span>
              <h3 className="section-title mt-10">Frequently Asked Questions</h3>
            </div>
            <div className="clone-accordion">
              {faqs.map(([q, a], index) => (
                <div className="clone-faq-item" key={q}>
                  <button onClick={() => setOpen(open === index ? -1 : index)}>{q}<i className={`fal ${open === index ? "fa-minus" : "fa-plus"}`}></i></button>
                  <p className={open === index ? "show" : ""}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

