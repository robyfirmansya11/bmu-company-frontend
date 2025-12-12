"use client";

import { useEffect } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollFadeIn(
  direction: "up" | "down" | "left" | "right" = "up",
  delay: number = 0,
  duration: number = 0.6
) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const distance = 40; // jarak geser animasi

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration, delay, ease: "easeOut" },
      });
    }
  }, [controls, inView, delay, duration]);

  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return { ref, controls, variants };
}
