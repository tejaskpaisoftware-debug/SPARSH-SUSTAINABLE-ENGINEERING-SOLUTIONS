"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let isCleanedUp = false;

    const revealInView = () => {
      if (isCleanedUp) return;
      const elements = document.querySelectorAll(
        ".lazy-reveal:not(.revealed), .lazy-scale:not(.revealed)"
      );

      if (elements.length === 0) return;

      const vh = window.innerHeight || document.documentElement.clientHeight || 800;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal if element is anywhere within view or within 100px below view
        if (rect.top < vh + 100 && rect.bottom > -50) {
          el.classList.add("revealed");
          observer?.unobserve(el);
        }
      });
    };

    const setupObserver = () => {
      const elements = document.querySelectorAll(
        ".lazy-reveal:not(.revealed), .lazy-scale:not(.revealed)"
      );

      if (elements.length === 0) return;

      if (!observer && "IntersectionObserver" in window) {
        observer = new IntersectionObserver(
          (entries, obs) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                obs.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: "0px 0px 120px 0px",
          }
        );
      }

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        if (rect.top < vh + 120) {
          el.classList.add("revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    // 1. Initial reveals
    revealInView();
    setupObserver();
    const rafId = requestAnimationFrame(revealInView);
    const t1 = setTimeout(revealInView, 80);
    const t2 = setTimeout(revealInView, 350);

    // Safety fallback: reveal all remaining elements after 1.5s so nothing stays blank on slow devices
    const safetyTimer = setTimeout(() => {
      document
        .querySelectorAll(".lazy-reveal:not(.revealed), .lazy-scale:not(.revealed)")
        .forEach((el) => el.classList.add("revealed"));
    }, 1500);

    // 2. Mobile-friendly scroll & touch listeners
    let ticking = false;
    const onScrollOrTouch = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          revealInView();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrTouch, { passive: true });
    window.addEventListener("touchmove", onScrollOrTouch, { passive: true });
    window.addEventListener("resize", onScrollOrTouch, { passive: true });
    window.addEventListener("orientationchange", onScrollOrTouch, { passive: true });

    return () => {
      isCleanedUp = true;
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(safetyTimer);
      window.removeEventListener("scroll", onScrollOrTouch);
      window.removeEventListener("touchmove", onScrollOrTouch);
      window.removeEventListener("resize", onScrollOrTouch);
      window.removeEventListener("orientationchange", onScrollOrTouch);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
