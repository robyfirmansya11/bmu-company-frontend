"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
  duration?: number;
}

const startTransform = {
  up: "translateY(14px)",
  down: "translateY(-14px)",
  left: "translateX(14px)",
  right: "translateX(-14px)",
  zoom: "scale(.98)",
};

export default function AnimateOnScroll({
  children, direction = "up", delay = 0, duration = .5,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !window.IntersectionObserver || !element.animate) return;

    let animation: Animation | undefined;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      if (preference.matches) return;
      animation = element.animate([
        { opacity: .35, transform: startTransform[direction] },
        { opacity: 1, transform: "none" },
      ], { duration: duration * 1000, delay: delay * 1000, fill: "backwards", easing: "cubic-bezier(.2,.7,.3,1)" });
    });
    observer.observe(element);
    const stop = () => {
      if (preference.matches) { observer.disconnect(); animation?.cancel(); }
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stop);
    };
  }, [direction, delay, duration]);

  return <div ref={ref}>{children}</div>;
}
