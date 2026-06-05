"use client";

import { useEffect, useState } from "react";
import "./navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "Delivery", href: "/projects" },
      { label: "Faq's", href: "/faq" }
    ]
  },
  { label: "Blog", href: "/blog-grid" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header>
        <div className="container-fluid bg-color-1">
          <div className="header-top">
            <div className="header-top-contact-info">
              <span className="email p-relative">
                <a href="mailto:sakshihomepackers@gmail.com">sakshihomepackers@gmail.com</a>
              </span>
              <span className="time p-relative">24*7 : 09.00 AM - 09.00 PM</span>
            </div>
            <div className="header-top-socials">
              <span><a href="#"><i className="fab fa-facebook-f"></i></a></span>
              <span><a href="#"><i className="fab fa-twitter"></i></a></span>
              <span><a href="#"><i className="fab fa-linkedin-in"></i></a></span>
              <span><a href="#"><i className="fab fa-youtube"></i></a></span>
            </div>
          </div>
        </div>

        <div id="header-sticky" className={`header-area header-style-two ${sticky ? "sticky" : ""}`}>
          <div className="large-container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="header-logo">
                    <a href="/"><img alt="Sakshi Home Packers and Movers logo" width="96" height="85" src="/assets/img/logo-white.svg" /></a>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end">
                  <div className="mean__menu-wrapper d-none d-lg-block">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          {navItems.map((item) => (
                            <li key={item.label} className={item.children ? "has-dropdown" : ""}>
                              <a className={item.href === "/" ? "active" : ""} href={item.href}>{item.label}</a>
                              {item.children && (
                                <ul className="submenu">
                                  {item.children.map((child) => (
                                    <li key={child.label}><a href={child.href}>{child.label}</a></li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-action d-none d-xl-inline-flex gap-5">
                    <div className="header-link">
                      <a className="primary-btn-1 btn-hover" href="/contact">GET A QUOTE &nbsp; | <i className="icon-right-arrow"></i><span></span></a>
                    </div>
                  </div>
                  <div className="header-action">
                    <div className="header-link-1">
                      <div className="icon"><i className="fal fa-phone-volume"></i></div>
                      <div className="content">
                        <span>Call Us Now</span>
                        <h6><a href="tel:8095500072">8095500072</a></h6>
                      </div>
                    </div>
                  </div>
                  <div className="header__hamburger d-lg-none my-auto">
                    <div className="sidebar__toggle">
                      <button className={`bar-icon ${open ? "is-open" : ""}`} aria-label="Open menu" onClick={() => setOpen(true)}>
                        <i className="fa-light fa-bars-sort"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="fix">
        <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="/"><img alt="Sakshi Home Packers and Movers logo" width="96" height="85" src="/assets/img/logo-white.svg" /></a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOpen(false)}><i className="fal fa-times"></i></button>
                </div>
              </div>
              <div className="mobile-menu mobile-menu-wrapper fix mb-40 mean-container">
                <div className="mean-bar">
                  <nav className="mean-nav">
                    <ul>
                      {navItems.map((item) => (
                        <li key={item.label} className={item.children ? "has-dropdown" : ""}>
                          <a className={item.href === "/" ? "active" : ""} href={item.href}>{item.label}</a>
                          {item.children && (
                            <>
                              <ul className="submenu" style={{ display: pagesOpen ? "block" : "none" }}>
                                {item.children.map((child) => (
                                  <li key={child.label}><a href={child.href}>{child.label}</a></li>
                                ))}
                              </ul>
                              <button className="mean-expand" onClick={() => setPagesOpen(!pagesOpen)}>
                                <i className={`fal ${pagesOpen ? "fa-minus" : "fa-plus"}`}></i>
                              </button>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={`offcanvas__overlay ${open ? "overlay-open" : ""}`} onClick={() => setOpen(false)} aria-label="Close menu"></button>
      <div className="offcanvas__overlay-white"></div>
    </>
  );
}

