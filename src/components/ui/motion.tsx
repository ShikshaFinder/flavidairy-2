"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Dynamically import motion components to avoid client boundary issues
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

const MotionForm = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.form })),
  { ssr: false }
) as ComponentType<any>;

const MotionInput = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.input })),
  { ssr: false }
) as ComponentType<any>;

const MotionTextarea = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.textarea })),
  { ssr: false }
) as ComponentType<any>;

const MotionLabel = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.label })),
  { ssr: false }
) as ComponentType<any>;

const MotionArticle = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.article })),
  { ssr: false }
) as ComponentType<any>;

const MotionHeader = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.header })),
  { ssr: false }
) as ComponentType<any>;

const MotionFooter = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.footer })),
  { ssr: false }
) as ComponentType<any>;

const MotionMain = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.main })),
  { ssr: false }
) as ComponentType<any>;

const MotionAside = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.aside })),
  { ssr: false }
) as ComponentType<any>;

const MotionSpan = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.span })),
  { ssr: false }
) as ComponentType<any>;

const MotionA = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.a })),
  { ssr: false }
) as ComponentType<any>;

const MotionBlockquote = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.blockquote })),
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

const MotionH4 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h4 })),
  { ssr: false }
) as ComponentType<any>;

const MotionH5 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h5 })),
  { ssr: false }
) as ComponentType<any>;

const MotionH6 = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.h6 })),
  { ssr: false }
) as ComponentType<any>;

const MotionImg = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.img })),
  { ssr: false }
) as ComponentType<any>;

const MotionSvg = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.svg })),
  { ssr: false }
) as ComponentType<any>;

const MotionPath = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.path })),
  { ssr: false }
) as ComponentType<any>;

const MotionCircle = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.circle })),
  { ssr: false }
) as ComponentType<any>;

const MotionRect = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.rect })),
  { ssr: false }
) as ComponentType<any>;

const MotionLine = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.line })),
  { ssr: false }
) as ComponentType<any>;

const MotionPolygon = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.polygon })),
  { ssr: false }
) as ComponentType<any>;

const MotionPolyline = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.polyline })),
  { ssr: false }
) as ComponentType<any>;

const MotionEllipse = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.ellipse })),
  { ssr: false }
) as ComponentType<any>;

const MotionDefs = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.defs })),
  { ssr: false }
) as ComponentType<any>;

const MotionStop = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.stop })),
  { ssr: false }
) as ComponentType<any>;

const MotionLinearGradient = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.linearGradient,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionRadialGradient = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.radialGradient,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeBlend = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feBlend })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeColorMatrix = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feColorMatrix,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeComponentTransfer = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feComponentTransfer,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeComposite = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feComposite,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeConvolveMatrix = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feConvolveMatrix,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeDiffuseLighting = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feDiffuseLighting,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeDisplacementMap = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feDisplacementMap,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeDistantLight = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feDistantLight,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeDropShadow = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feDropShadow,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeFlood = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feFlood })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeFuncA = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feFuncA })),
  { ssr: false }
) as ComponentType<any>;

const MotionFuncR = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feFuncR })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeFuncG = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feFuncG })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeFuncB = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feFuncB })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeGaussianBlur = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feGaussianBlur,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeImage = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feImage })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeMerge = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feMerge })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeMergeNode = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feMergeNode,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeMorphology = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feMorphology,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeOffset = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.feOffset })),
  { ssr: false }
) as ComponentType<any>;

const MotionFePointLight = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.fePointLight,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeSpecularLighting = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feSpecularLighting,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeSpotLight = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feSpotLight,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeTile = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.feTile })),
  { ssr: false }
) as ComponentType<any>;

const MotionFeTurbulence = dynamic(
  () =>
    import("framer-motion").then((mod) => ({
      default: mod.motion.feTurbulence,
    })),
  { ssr: false }
) as ComponentType<any>;

const MotionFilter = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.filter })),
  { ssr: false }
) as ComponentType<any>;

const MotionMask = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.mask })),
  { ssr: false }
) as ComponentType<any>;

const MotionMetadata = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.metadata })),
  { ssr: false }
) as ComponentType<any>;

const MotionPattern = dynamic(
  () =>
    import("framer-motion").then((mod) => ({ default: mod.motion.pattern })),
  { ssr: false }
) as ComponentType<any>;

const MotionStyle = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.style })),
  { ssr: false }
) as ComponentType<any>;

const MotionTitle = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.title })),
  { ssr: false }
) as ComponentType<any>;

const MotionView = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion.view })),
  { ssr: false }
) as ComponentType<any>;

// Export all motion components
export {
  MotionDiv,
  MotionSection,
  MotionH1,
  MotionP,
  MotionButton,
  MotionNav,
  MotionUl,
  MotionLi,
  MotionForm,
  MotionInput,
  MotionTextarea,
  MotionLabel,
  MotionArticle,
  MotionHeader,
  MotionFooter,
  MotionMain,
  MotionAside,
  MotionSpan,
  MotionA,
  MotionBlockquote,
  MotionH2,
  MotionH3,
  MotionH4,
  MotionH5,
  MotionH6,
  MotionImg,
  MotionSvg,
  MotionPath,
  MotionCircle,
  MotionRect,
  MotionLine,
  MotionPolygon,
  MotionPolyline,
  MotionEllipse,
  MotionDefs,
  MotionStop,
  MotionLinearGradient,
  MotionRadialGradient,
  MotionFeBlend,
  MotionFeColorMatrix,
  MotionFeComponentTransfer,
  MotionFeComposite,
  MotionFeConvolveMatrix,
  MotionFeDiffuseLighting,
  MotionFeDisplacementMap,
  MotionFeDistantLight,
  MotionFeDropShadow,
  MotionFeFlood,
  MotionFeFuncA,
  MotionFuncR,
  MotionFeFuncG,
  MotionFeFuncB,
  MotionFeGaussianBlur,
  MotionFeImage,
  MotionFeMerge,
  MotionFeMergeNode,
  MotionFeMorphology,
  MotionFeOffset,
  MotionFePointLight,
  MotionFeSpecularLighting,
  MotionFeSpotLight,
  MotionFeTile,
  MotionFeTurbulence,
  MotionFilter,
  MotionMask,
  MotionMetadata,
  MotionPattern,
  MotionStyle,
  MotionTitle,
  MotionView,
};
