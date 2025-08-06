"use client";

import { MotionDiv } from "@/components/ui/motion";
import { ReactNode } from "react";

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
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        delay: 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </MotionDiv>
  );
}
