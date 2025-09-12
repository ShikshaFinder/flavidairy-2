"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { MotionDiv } from "@/components/ui/motion";
import { pageTransition } from "@/lib/motionVariants";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

export function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <MotionDiv
        key={pathname}
        variants={pageTransition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}
