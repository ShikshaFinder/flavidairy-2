"use client";

import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionButton,
} from "@/components/ui/motion-optimized";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Height from "../height";
import { APP_CONFIG } from "@/config/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Geometric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        {/* Animated geometric shapes */}
        <MotionDiv
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <MotionDiv
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <MotionDiv
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full opacity-15"
          animate={{
            x: [0, 20, 0],
            y: [0, -15, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating geometric elements */}
        <MotionDiv
          className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-300 rounded-lg opacity-30"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <MotionDiv
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-orange-300 rounded-lg opacity-30"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <MotionDiv
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 text-blue-800 border border-blue-200 rounded-full text-sm font-medium shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                Trusted by 1600+ Companies Worldwide
              </span>
            </MotionDiv>

            <MotionH1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Engineering
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                Excellence
              </span>
              <br />
              <span className="text-gray-800 text-4xl md:text-5xl">
                From Farm to Factory
              </span>
            </MotionH1>

            <MotionP
              className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your dairy and food processing operations with our
              cutting-edge solutions, backed by 20+ years of industry expertise
              and 1600+ successful projects.
            </MotionP>

            <MotionDiv
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link
                  href={`https://wa.me/${
                    APP_CONFIG.CONTACT.WHATSAPP.NUMBER
                  }?text=${encodeURIComponent(
                    APP_CONFIG.CONTACT.WHATSAPP.MESSAGE
                  )}`}
                  onClick={() => trackWhatsAppClick("hero_cta")}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <Play className="w-5 h-5 text-white" />
                    Get Expert Consultation
                  </span>
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View Our Solutions
              </Button>
            </MotionDiv>

            {/* Stats Grid */}
            <MotionDiv
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">20+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-orange-100">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  1600+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </MotionDiv>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <MotionDiv
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Hero Image Container */}
              <div className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm">
                <Image
                  src="/hero-image.png"
                  alt="Flavi Dairy Solutions | Euronova Food Solutions - Engineering Excellence"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20"></div>

                {/* Floating service cards over the image */}
                <MotionDiv
                  className="absolute top-6 left-6 w-20 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-semibold text-gray-700">
                      Dairy
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  className="absolute top-12 right-8 w-20 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <div className="text-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-semibold text-gray-700">
                      Food
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  className="absolute bottom-16 left-8 w-20 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  <div className="text-center">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-semibold text-gray-700">
                      Auto
                    </div>
                  </div>
                </MotionDiv>

                <MotionDiv
                  className="absolute bottom-6 right-6 w-20 h-14 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  <div className="text-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs font-semibold text-gray-700">
                      SCADA
                    </div>
                  </div>
                </MotionDiv>
              </div>

              {/* Floating badges */}
              <MotionDiv
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✓ Certified
              </MotionDiv>

              <MotionDiv
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                🚀 Innovation
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
