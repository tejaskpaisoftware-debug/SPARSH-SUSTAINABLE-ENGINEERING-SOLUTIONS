"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const elements = document.querySelectorAll(
        ".lazy-reveal:not(.revealed), .lazy-scale:not(.revealed)"
      );

      if (elements.length === 0) return;

      if (!observer) {
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
            threshold: 0.02,
            rootMargin: "0px 0px 80px 0px",
          }
        );
      }

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 80) {
          el.classList.add("revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    // Instant check
    setupObserver();
    const rafId = requestAnimationFrame(setupObserver);
    const timer = setTimeout(setupObserver, 120);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
