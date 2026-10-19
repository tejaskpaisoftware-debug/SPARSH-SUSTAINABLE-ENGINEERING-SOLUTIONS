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
            threshold: 0.04,
            rootMargin: "0px 0px 50px 0px",
          }
        );
      }

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50 && rect.bottom > 0) {
          el.classList.add("revealed");
        } else {
          observer?.observe(el);
        }
      });
    };

    // Instant initial check on next animation frame
    const rafId = requestAnimationFrame(setupObserver);

    // Watch for dynamic DOM changes (e.g. interactive tab filtering)
    let debounceTimer: NodeJS.Timeout;
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(setupObserver, 50);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(debounceTimer);
      if (observer) observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
