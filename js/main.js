/**
 * SPARSH Sustainable Engineering Solutions
 * Apple Light Silver & Liquid Glass Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // 1. Mobile Menu Toggle & Smooth Interaction
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("open")) {
        if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
          mobileMenu.classList.remove("open");
          mobileToggle.setAttribute("aria-expanded", "false");
        }
      }
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Auto-close on resize to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // 2. Section Active State in Nav on Scroll
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  const updateActiveNav = () => {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });

  // 3. Lazy Scroll Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll(".lazy-reveal, .lazy-scale");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // 4. Counter Animation for Stats Ribbon
  const statNumbers = document.querySelectorAll(".counter-val");
  let countersStarted = false;

  const countUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          statNumbers.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const duration = 1800; // ms
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, stepTime);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsContainer = document.querySelector(".stats-glass-container");
  if (statsContainer) {
    countUpObserver.observe(statsContainer);
  }

  // 5. Liquid Specular Hover / Mousemove Reflection on Glass Cards
  const cards = document.querySelectorAll(".liquid-card, .pillar-glass-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });

  // 6. Service Category Filter Tabs (Glitch-Free, Container-Scoped & Smooth Transition)
  const filterNavs = document.querySelectorAll(".service-filter-nav");

  filterNavs.forEach((nav) => {
    const parentSection = nav.closest("section") || nav.parentElement;
    const servicesGrid = parentSection ? parentSection.querySelector(".services-grid") : document.querySelector(".services-grid");
    const serviceCards = parentSection ? parentSection.querySelectorAll(".service-category-card") : document.querySelectorAll(".service-category-card");
    const filterBtns = nav.querySelectorAll(".filter-btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-filter");

        // Center single card in single-view mode
        if (servicesGrid) {
          if (category === "all") {
            servicesGrid.classList.remove("single-view");
          } else {
            servicesGrid.classList.add("single-view");
          }
        }

        serviceCards.forEach((card) => {
          // Clear any conflicting inline styles
          card.style.display = "";
          card.style.opacity = "";
          card.style.transform = "";

          const cardCategory = card.getAttribute("data-category");
          if (category === "all" || cardCategory === category) {
            card.classList.remove("is-hidden");
            card.classList.add("is-visible");
          } else {
            card.classList.remove("is-visible");
            card.classList.add("is-hidden");
          }
        });
      });
    });
  });

  // 7. Interactive Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const formSuccessAlert = document.getElementById("formSuccessAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending Request...</span>`;
      submitBtn.style.opacity = "0.7";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.opacity = "1";
        submitBtn.disabled = false;
        contactForm.reset();

        if (formSuccessAlert) {
          formSuccessAlert.style.display = "block";
          setTimeout(() => {
            formSuccessAlert.style.display = "none";
          }, 6000);
        }
      }, 1200);
    });
  }

  // 8. 4P Liquid Reactor Stage: Pure Ambient Glow & Stationary Precision
  const coreSphere = document.getElementById("coreSphere");

  // 9. Interactive 4P Orbit Node Click / Hover Highlights
  const orbitNodes = document.querySelectorAll(".orbit-node");
  const pillarCards = document.querySelectorAll(".pillar-glass-card");

  const pillarDetails = {
    people: { title: "PEOPLE", label: "ZERO-HARM FOCUS", color: "#0071e3" },
    process: { title: "PROCESS", label: "PSM & HIRA CONTROL", color: "#d97706" },
    property: { title: "PROPERTY", label: "FIRE & ASSET DEFENSE", color: "#dc2626" },
    planet: { title: "PLANET", label: "ESG & SUSTAINABILITY", color: "#107c41" },
  };

  orbitNodes.forEach((node, index) => {
    node.addEventListener("mouseenter", () => {
      const pillarKey = node.getAttribute("data-pillar");
      if (coreSphere && pillarDetails[pillarKey]) {
        const brand = coreSphere.querySelector(".core-sphere-brand");
        const sub = coreSphere.querySelector(".core-sphere-label");
        if (brand && sub) {
          brand.textContent = pillarDetails[pillarKey].title;
          sub.textContent = pillarDetails[pillarKey].label;
          sub.style.color = pillarDetails[pillarKey].color;
        }
      }

      // Highlight corresponding card below
      pillarCards.forEach((card, cIdx) => {
        if (cIdx === index) {
          card.style.borderColor = pillarDetails[pillarKey].color;
          card.style.transform = "translateY(-8px)";
        }
      });
    });

    node.addEventListener("mouseleave", () => {
      if (coreSphere) {
        const brand = coreSphere.querySelector(".core-sphere-brand");
        const sub = coreSphere.querySelector(".core-sphere-label");
        if (brand && sub) {
          brand.textContent = "SPARSH";
          sub.textContent = "4P CORE";
          sub.style.color = "var(--text-secondary)";
        }
      }

      pillarCards.forEach((card) => {
        card.style.borderColor = "";
        card.style.transform = "";
      });
    });
  });
});
