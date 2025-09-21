"use client";

import { MotionDiv } from "@/components/ui/motion-optimized";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { scrollRevealVariants, defaultTransition } from "@/lib/motionVariants";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-100px",
  });

  const variants = scrollRevealVariants[direction] || scrollRevealVariants.up;

  return (
    <MotionDiv
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
