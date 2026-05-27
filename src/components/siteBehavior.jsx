"use client";

import { useEffect } from "react";

export default function SiteBehavior() {
  useEffect(() => {
    document
      .querySelectorAll('meta[name="viewport"]')
      .forEach((meta) => meta.setAttribute("content", "width=device-width, initial-scale=1, shrink-to-fit=no"));

    const header = document.querySelector("#header-sticky");
    const offcanvas = document.querySelector(".offcanvas__info");
    const overlay = document.querySelector(".offcanvas__overlay");
    const openButtons = document.querySelectorAll(".sidebar__toggle, .offcanvas-open-btn, .bar-icon");
    const closeButtons = document.querySelectorAll(".offcanvas__close button");
    const expanders = document.querySelectorAll(".mean-expand");

    const onScroll = () => {
      if (header) header.classList.toggle("sticky", window.scrollY > 200);
    };

    const openMenu = (event) => {
      event.preventDefault();
      offcanvas?.classList.add("info-open");
      overlay?.classList.add("overlay-open");
      document.body.style.overflow = "hidden";
    };

    const closeMenu = (event) => {
      event?.preventDefault();
      offcanvas?.classList.remove("info-open");
      overlay?.classList.remove("overlay-open");
      document.body.style.overflow = "";
    };

    const toggleSubmenu = (event) => {
      event.preventDefault();
      const button = event.currentTarget;
      const submenu = button.previousElementSibling;
      const icon = button.querySelector("i");
      const isOpen = submenu && getComputedStyle(submenu).display !== "none";
      if (submenu) submenu.style.display = isOpen ? "none" : "block";
      button.classList.toggle("mean-clicked", !isOpen);
      if (icon) {
        icon.classList.toggle("fa-plus", isOpen);
        icon.classList.toggle("fa-minus", !isOpen);
      }
    };

    const setupSwipers = () => {
      const timers = [];
      const disposers = [];
      const controllers = [];

      const activateSlide = (slides, index) => {
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("swiper-slide-active", slideIndex === index);
          slide.classList.toggle("swiper-slide-visible", slideIndex === index);
          slide.classList.toggle("swiper-slide-fully-visible", slideIndex === index);
          slide.classList.toggle("swiper-slide-prev", slideIndex === (index - 1 + slides.length) % slides.length);
          slide.classList.toggle("swiper-slide-next", slideIndex === (index + 1) % slides.length);
        });
      };

      const sizeBanner = () => {
        const swiper = document.querySelector(".banner-active");
        const wrapper = swiper?.querySelector(".swiper-wrapper");
        const slides = wrapper?.querySelectorAll(".swiper-slide") || [];
        if (!swiper || !wrapper || !slides.length) return;
        const width = swiper.getBoundingClientRect().width;
        swiper.classList.add("swiper-initialized", "swiper-horizontal", "swiper-watch-progress", "swiper-backface-hidden", "swiper-fade");
        wrapper.style.display = "flex";
        wrapper.style.width = `${width}px`;
        slides.forEach((slide, index) => {
          slide.style.width = `${width}px`;
          slide.style.flex = "0 0 auto";
          slide.style.marginRight = "0px";
          slide.style.transform = `translate3d(-${index * width}px, 0, 0)`;
          slide.style.transition = "opacity 1000ms ease";
        });
      };

      const sizeProject = () => {
        const swiper = document.querySelector(".project-active-1");
        const wrapper = swiper?.querySelector(".swiper-wrapper");
        const slides = wrapper?.querySelectorAll(".swiper-slide") || [];
        if (!swiper || !wrapper || !slides.length) return;
        const width = swiper.getBoundingClientRect().width;
        const perView = width >= 992 ? 3 : width >= 576 ? 2 : 1;
        const gap = 30;
        const slideWidth = (width - gap * (perView - 1)) / perView;
        swiper.classList.add("swiper-initialized", "swiper-horizontal", "swiper-backface-hidden");
        wrapper.style.display = "flex";
        wrapper.style.width = `${width}px`;
        slides.forEach((slide) => {
          slide.style.width = `${slideWidth}px`;
          slide.style.flex = "0 0 auto";
          slide.style.marginRight = `${gap}px`;
        });
      };

      const sizeTestimonials = () => {
        const swiper = document.querySelector(".testimonial-active-1");
        const wrapper = swiper?.querySelector(".swiper-wrapper");
        const slides = wrapper?.querySelectorAll(".swiper-slide") || [];
        if (!swiper || !wrapper || !slides.length) return;
        const width = swiper.getBoundingClientRect().width;
        swiper.classList.add("swiper-initialized", "swiper-horizontal");
        wrapper.style.display = "flex";
        wrapper.style.width = `${width}px`;
        slides.forEach((slide) => {
          slide.style.width = `${width}px`;
          slide.style.flex = "0 0 auto";
          slide.style.marginRight = "0px";
        });
      };

      const sizeAll = () => {
        sizeBanner();
        sizeProject();
        sizeTestimonials();
      };

      sizeAll();
      window.addEventListener("resize", sizeAll);
      disposers.push(() => window.removeEventListener("resize", sizeAll));

      const createTransformSlider = (selector, delay) => {
        const wrapper = document.querySelector(`${selector} .swiper-wrapper`);
        const slides = wrapper?.querySelectorAll(".swiper-slide") || [];
        if (!wrapper || slides.length < 2) return null;
        let index = 0;
        wrapper.style.transition = "transform 1000ms ease";
        const currentIndex = () => {
          const transform = getComputedStyle(wrapper).transform;
          const translate = transform && transform !== "none" ? Number(transform.split(",")[4]) || 0 : 0;
          let nearest = 0;
          let smallest = Number.POSITIVE_INFINITY;
          slides.forEach((slide, slideIndex) => {
            const distance = Math.abs(slide.offsetLeft + translate);
            if (distance < smallest) {
              smallest = distance;
              nearest = slideIndex;
            }
          });
          return nearest;
        };
        const go = (nextIndex) => {
          index = (nextIndex + slides.length) % slides.length;
          const slide = slides[index];
          activateSlide(slides, index);
          wrapper.style.transform = `translate3d(-${slide.offsetLeft}px, 0, 0)`;
        };
        const timer = window.setInterval(() => {
          index = (index + 1) % slides.length;
          go(index);
        }, delay);
        timers.push(timer);
        const controller = { go, next: () => go(currentIndex() + 1), prev: () => go(currentIndex() - 1) };
        controllers.push(controller);
        return controller;
      };

      const createFadeSlider = (selector, delay) => {
        const wrapper = document.querySelector(`${selector} .swiper-wrapper`);
        const slides = wrapper?.querySelectorAll(".swiper-slide") || [];
        if (!wrapper || slides.length < 2) return null;
        let index = [...slides].findIndex((slide) => slide.classList.contains("swiper-slide-active"));
        if (index < 0) index = 0;
        wrapper.style.transform = "translate3d(0, 0, 0)";
        const go = (nextIndex) => {
          index = (nextIndex + slides.length) % slides.length;
          activateSlide(slides, index);
          slides.forEach((slide, slideIndex) => {
            slide.style.opacity = slideIndex === index ? "1" : "0";
            slide.style.pointerEvents = slideIndex === index ? "auto" : "none";
          });
        };
        go(index);
        const timer = window.setInterval(() => go(index + 1), delay);
        timers.push(timer);
        const controller = { go, next: () => go(index + 1), prev: () => go(index - 1) };
        controllers.push(controller);
        return controller;
      };

      createFadeSlider(".banner-active", 4500);
      createTransformSlider(".project-active-1", 3000);
      const testimonialController = createTransformSlider(".testimonial-active-1", 3000);
      const prev = document.querySelector(".testimonial-1-button-prev");
      const next = document.querySelector(".testimonial-1-button-next");
      const onPrev = (event) => {
        event.preventDefault();
        testimonialController?.prev();
      };
      const onNext = (event) => {
        event.preventDefault();
        testimonialController?.next();
      };
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);
      disposers.push(() => {
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
      });

      return () => {
        timers.forEach((timer) => window.clearInterval(timer));
        disposers.forEach((dispose) => dispose());
      };
    };

    const setupServiceTabs = () => {
      const tabs = [...document.querySelectorAll(".service-tab-btn-area .nav-link")];
      const panes = [...document.querySelectorAll(".service-tab-content")].map((content) => content.closest(".tab-pane"));
      if (!tabs.length || !panes.length) return undefined;

      const activate = (index) => {
        tabs.forEach((tab, tabIndex) => {
          tab.classList.toggle("active", tabIndex === index);
          tab.setAttribute("aria-selected", tabIndex === index ? "true" : "false");
        });
        panes.forEach((pane, paneIndex) => {
          const active = paneIndex === index;
          pane.classList.toggle("show", active);
          pane.classList.toggle("active", active);
          pane.style.display = active ? "block" : "none";
          pane.style.opacity = active ? "1" : "0";
        });
      };

      const listeners = tabs.map((tab, index) => {
        const onClick = (event) => {
          event.preventDefault();
          activate(index);
        };
        tab.addEventListener("click", onClick);
        return () => tab.removeEventListener("click", onClick);
      });
      activate(tabs.findIndex((tab) => tab.classList.contains("active")) || 0);
      return () => listeners.forEach((dispose) => dispose());
    };

    const setupCounters = () => {
      const counterTargets = [
        { value: 3000, display: "3,000", suffix: "+" },
        { value: 450, display: "450", suffix: "+" },
        { value: 3150, display: "3,150", suffix: "" },
        { value: 6561, display: "6,561", suffix: "" }
      ];
      const statBoxes = [...document.querySelectorAll(".icon-box-counter-area")];
      let observeExperience;
      statBoxes.forEach((box, index) => {
        const target = counterTargets[index];
        const counter = box.querySelector(".counter");
        const h3 = box.querySelector("h3");
        if (!target || !counter || !h3) return;
        counter.textContent = "0";
        if (target.suffix && !h3.textContent.includes(target.suffix)) h3.append(target.suffix);
      });

      const animateCounter = (counter, target) => {
        if (counter.dataset.counted === "true") return;
        counter.dataset.counted = "true";
        const start = performance.now();
        const duration = 1800;
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target.value * eased);
          counter.textContent = value.toLocaleString("en-IN");
          if (progress < 1) requestAnimationFrame(tick);
          else counter.textContent = target.display;
        };
        requestAnimationFrame(tick);
      };

      const observeStats = () => {
        statBoxes.forEach((box, index) => {
          const target = counterTargets[index];
          const counter = box.querySelector(".counter");
          if (!target || !counter) return;
          const rect = box.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) animateCounter(counter, target);
        });
      };

      const experience = document.querySelector(".working-area .counter");
      if (experience) {
        experience.textContent = "0";
        observeExperience = () => {
          const rect = experience.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
            animateCounter(experience, { value: 25, display: "25" });
          }
        };
        window.addEventListener("scroll", observeExperience, { passive: true });
        observeExperience();
        window.addEventListener("resize", observeExperience);
      }

      window.addEventListener("scroll", observeStats, { passive: true });
      window.addEventListener("resize", observeStats);
      observeStats();
      return () => {
        window.removeEventListener("scroll", observeStats);
        window.removeEventListener("resize", observeStats);
        if (observeExperience) {
          window.removeEventListener("scroll", observeExperience);
          window.removeEventListener("resize", observeExperience);
        }
      };
    };

    const applyAccessibilityAttributes = () => {
      document
        .querySelectorAll(".offcanvas__close button")
        .forEach((button) => button.setAttribute("aria-label", "Close menu"));
      document
        .querySelectorAll(".testimonial-1-button-prev")
        .forEach((button) => button.setAttribute("aria-label", "Previous testimonial"));
      document
        .querySelectorAll(".testimonial-1-button-next")
        .forEach((button) => button.setAttribute("aria-label", "Next testimonial"));
      document
        .querySelectorAll('input[type="date"]:not([aria-label])')
        .forEach((input) => input.setAttribute("aria-label", "Moving date"));
      document
        .querySelectorAll(".project-slider-two-box .content a.icon-1")
        .forEach((link) => link.setAttribute("aria-label", "View project"));
      document.querySelectorAll("a.blog-image").forEach((link) => {
        const title = link.parentElement?.querySelector("h3, h4")?.textContent?.trim();
        link.setAttribute("aria-label", title || "Read blog post");
      });
      document.querySelectorAll(".footer-socials a").forEach((link, index) => {
        const labels = ["Facebook", "Instagram", "LinkedIn", "YouTube"];
        link.setAttribute("aria-label", labels[index] || "Social link");
        if (link.getAttribute("href") === "#") link.setAttribute("href", "/");
      });
      document.querySelectorAll("a").forEach((link) => {
        const hasText = link.innerText?.trim();
        const hasNamedImage = link.querySelector('img[alt]:not([alt=""])');
        if (hasText || hasNamedImage || link.getAttribute("aria-label")) return;
        const nearbyTitle = link.parentElement?.querySelector("h2, h3, h4, h5")?.textContent?.trim();
        link.setAttribute("aria-label", link.getAttribute("title") || nearbyTitle || "Open link");
      });
      document.querySelectorAll("button").forEach((button) => {
        if (button.textContent?.trim() || button.getAttribute("aria-label")) return;
        button.setAttribute("aria-label", button.getAttribute("title") || "Button");
      });
      document.querySelectorAll('ul[role="tablist"]').forEach((list) => {
        list.querySelectorAll("button, a").forEach((tab, index) => {
          tab.setAttribute("role", "tab");
          tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    openButtons.forEach((button) => button.addEventListener("click", openMenu));
    closeButtons.forEach((button) => button.addEventListener("click", closeMenu));
    overlay?.addEventListener("click", closeMenu);
    expanders.forEach((button) => button.addEventListener("click", toggleSubmenu));
    const cleanupSwipers = setupSwipers();
    const cleanupTabs = setupServiceTabs();
    const cleanupCounters = setupCounters();
    applyAccessibilityAttributes();

    return () => {
      window.removeEventListener("scroll", onScroll);
      openButtons.forEach((button) => button.removeEventListener("click", openMenu));
      closeButtons.forEach((button) => button.removeEventListener("click", closeMenu));
      overlay?.removeEventListener("click", closeMenu);
      expanders.forEach((button) => button.removeEventListener("click", toggleSubmenu));
      cleanupSwipers?.();
      cleanupTabs?.();
      cleanupCounters?.();
      document.body.style.overflow = "";
    };
  }, []);

  return null;
}
