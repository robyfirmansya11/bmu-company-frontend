"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SectionScrollMotion() {
  const pathname = usePathname();
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!Element.prototype.animate) return;
    const seen = new WeakSet<Element>();
    const running = new Set<Animation>();
    let previous = window.scrollY;
    let frame = 0;
    function cancel() {
      cancelAnimationFrame(frame);
      frame = 0;
      running.forEach(animation => animation.cancel());
      running.clear();
    }
    function scroll() {
      const y = window.scrollY;
      const down = y > previous;
      previous = y;
      if (!down || reduced.matches) { cancel(); return; }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        for (const section of document.querySelectorAll("section, footer")) {
          if (seen.has(section)) continue;
          const rect = section.getBoundingClientRect();
          if (rect.bottom <= 0 || rect.top >= window.innerHeight || !rect.height) continue;
          seen.add(section);
          const animation = section.animate([
            { opacity: .65, transform: "translateY(12px)" },
            { opacity: 1, transform: "translateY(0)" },
          ], { duration: 420, easing: "ease-out" });
          running.add(animation);
          animation.onfinish = () => running.delete(animation);
        }
      });
    }
    window.addEventListener("scroll", scroll, { passive: true });
    reduced.addEventListener("change", cancel);
    return () => {
      window.removeEventListener("scroll", scroll);
      reduced.removeEventListener("change", cancel);
      cancel();
    };
  }, [pathname]);
  return null;
}
