"use client";

import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton,
} from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Height from "../height";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionDiv
          className="absolute top-20 left-10 w-16 h-16 bg-lime-200/40 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionDiv
          className="absolute top-40 right-20 w-20 h-20 bg-lime-300/40 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <MotionDiv
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-lime-200/40 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* <MotionDiv
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 bg-green-100 backdrop-blur-sm text-green-700 border border-green-200 rounded-full text-sm font-medium shadow-sm">
              Transform Your Processing Operations With Trusted Expert Solutions
            </span>
          </MotionDiv> */}

          <MotionH1
            className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Progress
            <span className="text-black"> From Farm to Factory</span>
          </MotionH1>

          <MotionP
            className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive end-to-end solutions for dairy and food processing
            with trusted reliability built on 20+ years of expertise.
          </MotionP>

          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-4 text-lg font-medium group relative overflow-hidden border-0 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="https://wa.me/917202033384?text=Hi, I'm interested in your services.">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Talk to an Expert
                </span>
              </Link>
            </Button>
          </MotionDiv>

          <MotionDiv
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-black/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div>
              <span>20+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div>
              <span>1600+ Projects Commissioned</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div>
              <span>Turnkey & Customized Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-lime-600 rounded-full"></div>
              <span>Scale-up to Industrialization Expertise</span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
