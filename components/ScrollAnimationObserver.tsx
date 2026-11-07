"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    let isCleanedUp = false;

    const getTargetElements = () => {
      return document.querySelectorAll<HTMLElement>(
        ".scroll-reveal, .lazy-reveal, .scroll-scale, .lazy-scale, [data-scroll-reveal]"
      );
    };

    const updateInViewStates = () => {
      if (isCleanedUp) return;

      const elements = getTargetElements();
      if (elements.length === 0) return;

      const vh = window.innerHeight || document.documentElement.clientHeight || 800;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // Element is visible in viewport trigger zone (between top edge and 92% of screen height)
        const isVisible = rect.top < vh * 0.92 && rect.bottom > 20;

        if (isVisible) {
          el.classList.add("in-view");
        } else {
          // When scrolling up and element drops below view (or scrolling away):
          // "on scroll up it does get close"
          if (rect.top >= vh * 0.92 || rect.bottom <= 0) {
            el.classList.remove("in-view");
          }
        }
      });
    };

    // Fast IntersectionObserver for modern browser performance
    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add("in-view");
            } else {
              // When leaving viewport, close / reset so it can come back one by one
              el.classList.remove("in-view");
            }
          });
        },
        {
          threshold: [0, 0.15],
          rootMargin: "0px 0px -40px 0px",
        }
      );

      getTargetElements().forEach((el) => observer?.observe(el));
    }

    // High-precision scroll listener for smooth mobile touch & trackpad scrolling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateInViewStates();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    // Initial check
    updateInViewStates();
    const t1 = setTimeout(updateInViewStates, 100);
    const t2 = setTimeout(updateInViewStates, 400);

    return () => {
      isCleanedUp = true;
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("resize", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
