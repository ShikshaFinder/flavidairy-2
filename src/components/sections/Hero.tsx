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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionDiv
          className="absolute top-20 left-10 w-16 h-16 bg-secondary/10 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-20 h-20 bg-accent/10 rounded-full blur-xl"
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
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-secondary/10 rounded-full blur-xl"
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
          <MotionDiv
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-6 py-3 bg-secondary/10 backdrop-blur-sm text-secondary border border-secondary/20 rounded-full text-sm font-medium shadow-sm">
              Transforming Processing Operations with Expert Solutions
            </span>
          </MotionDiv>

          <MotionH1
            className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your
            <span className="text-secondary"> Processing Operations</span>
            <br />
            <span className="text-secondary font-light">
              With Expert Solutions
            </span>
          </MotionH1>

          <MotionP
            className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From concept to commissioning, we deliver innovative dairy and food
            processing solutions with 20+ years of expertise.
          </MotionP>

          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <MotionButton
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-black px-8 py-4 text-lg font-medium group relative overflow-hidden border-0 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </MotionButton>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-black px-8 py-4 text-lg font-medium bg-white/60 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link href="/about">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Learn More
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
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span>100+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
