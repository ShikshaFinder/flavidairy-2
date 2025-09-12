"use client";

import { MotionDiv } from "@/components/ui/motion";
import { ReactNode } from "react";
import { floating, hoverScale } from "@/lib/motionVariants";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingCard({
  children,
  className = "",
  delay = 0,
  duration = 2,
}: FloatingCardProps) {
  return (
    <MotionDiv
      className={className}
      variants={floating}
      animate="animate"
      {...hoverScale}
    >
      {children}
    </MotionDiv>
  );
}
