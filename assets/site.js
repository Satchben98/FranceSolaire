(function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      menu.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) closeMenu();
    });
  }

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (slides.length > 1 && !reducedMotion.matches) {
    let activeSlide = 0;
    let sliderTimer;

    const showNextSlide = () => {
      slides[activeSlide].classList.remove("is-active");
      activeSlide = (activeSlide + 1) % slides.length;
      slides[activeSlide].classList.add("is-active");
    };

    const startSlider = () => {
      window.clearInterval(sliderTimer);
      sliderTimer = window.setInterval(showNextSlide, 5000);
    };

    startSlider();

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) window.clearInterval(sliderTimer);
      else startSlider();
    });
  }
})();
