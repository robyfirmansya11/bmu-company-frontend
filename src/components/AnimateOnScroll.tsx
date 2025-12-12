"use client";

import { motion, useAnimation, Variants, easeInOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
  duration?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  direction = "up",
  delay = 0.1,
  duration = 0.6,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  // Hitung offset berdasarkan arah
  const offset = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { y: 0, x: 20 },
    right: { y: 0, x: -20 },
    zoom: { y: 0, x: 0 },
  }[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
      scale: direction === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: easeInOut, // FIX TRANSITION EASING
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnScroll;
