"use client";

import { MotionSpan } from "@/components/ui/motion-optimized";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({
  children,
  className = "",
  animate = true,
}: GradientTextProps) {
  return (
    <MotionSpan
      className={`gradient-text ${className}`}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : {}
      }
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </MotionSpan>
  );
}
