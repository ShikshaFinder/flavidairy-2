"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Only import the motion components that are actually used
// This reduces bundle size significantly

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.div })),
  { ssr: false }
) as ComponentType<any>;

const MotionSection = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.section })),
  { ssr: false }
) as ComponentType<any>;

const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h1 })),
  { ssr: false }
) as ComponentType<any>;

const MotionH2 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h2 })),
  { ssr: false }
) as ComponentType<any>;

const MotionH3 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h3 })),
  { ssr: false }
) as ComponentType<any>;

const MotionP = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.p })),
  { ssr: false }
) as ComponentType<any>;

const MotionButton = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.button })),
  { ssr: false }
) as ComponentType<any>;

const MotionNav = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.nav })),
  { ssr: false }
) as ComponentType<any>;

const MotionUl = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.ul })),
  { ssr: false }
) as ComponentType<any>;

const MotionLi = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.li })),
  { ssr: false }
) as ComponentType<any>;

const MotionA = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.a })),
  { ssr: false }
) as ComponentType<any>;

const MotionSpan = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.span })),
  { ssr: false }
) as ComponentType<any>;

const MotionImg = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.img })),
  { ssr: false }
) as ComponentType<any>;

// Export only the components that are actually used
export {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionP,
  MotionButton,
  MotionNav,
  MotionUl,
  MotionLi,
  MotionA,
  MotionSpan,
  MotionImg,
};

