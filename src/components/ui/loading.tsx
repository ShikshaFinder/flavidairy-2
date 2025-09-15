"use client";

import { MotionDiv } from "@/components/ui/motion-optimized";
import { Loader2 } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export function Loading({ size = "md", text, className = "" }: LoadingProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <MotionDiv
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Loader2 className={`${sizeClasses[size]} text-primary`} />
      </MotionDiv>
      {text && <p className="text-sm text-gray-600 animate-pulse">{text}</p>}
    </div>
  );
}

// Page-level loading component
export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Loading size="lg" text="Loading..." />
    </div>
  );
}

// Inline loading component
export function InlineLoading({ text }: { text?: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Loading size="sm" />
      {text && <span>{text}</span>}
    </div>
  );
}

