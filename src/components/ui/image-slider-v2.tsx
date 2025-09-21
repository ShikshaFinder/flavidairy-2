"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion-optimized";

interface ImageSliderProps {
  images: string[];
  basePath: string;
  title: string;
  autoSlide?: boolean;
  slideInterval?: number;
  slidesToShow?: number;
  className?: string;
}

export function ImageSlider({
  images,
  basePath,
  title,
  autoSlide = true,
  slideInterval = 1500,
  slidesToShow = 6,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoSlide);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate responsive slides to show
  const [responsiveSlidesToShow, setResponsiveSlidesToShow] =
    useState(slidesToShow);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setResponsiveSlidesToShow(2);
      } else if (width < 768) {
        setResponsiveSlidesToShow(3);
      } else if (width < 1024) {
        setResponsiveSlidesToShow(4);
      } else if (width < 1280) {
        setResponsiveSlidesToShow(5);
      } else {
        setResponsiveSlidesToShow(slidesToShow);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [slidesToShow]);

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
          // Always move to next slide, reset to 0 when we reach the end
          return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
      }, slideInterval);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    isPlaying,
    isHovered,
    slideInterval,
    images.length,
    responsiveSlidesToShow,
  ]);

  const nextSlide = () => {
    const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
    setCurrentIndex((prevIndex) => {
      // Always move to next slide, reset to 0 when we reach the end
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
    setCurrentIndex((prevIndex) => {
      // Always move to previous slide, go to end when we reach the beginning
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Calculate the transform offset
  const slideWidth = 100 / responsiveSlidesToShow;
  const translateX = -(currentIndex * slideWidth);

  return (
    <MotionDiv
      className={`group relative bg-white rounded-xl p-6 shadow-lg border border-neutral/50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-black">{title}</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="h-8 w-8 p-0 hover:bg-cyan/10 hover:border-cyan/30"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${slideWidth}%` }}
            >
              <MotionDiv
                className="relative group/item"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="aspect-square bg-white rounded-lg border border-neutral p-3 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <Image
                    src={`${basePath}/${image}`}
                    alt={`${title} ${index + 1}`}
                    fill
                    className="object-contain group-hover/item:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        `Failed to load image: ${basePath}/${image}`
                      );
                    }}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              </MotionDiv>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="sm"
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-white/95 hover:bg-white shadow-lg border border-neutral opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-white/95 hover:bg-white shadow-lg border border-neutral opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      {images.length > responsiveSlidesToShow && (
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({
            length: Math.max(1, images.length - responsiveSlidesToShow + 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan w-8"
                  : "bg-neutral hover:bg-neutral/80 w-2"
              }`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mt-4 w-full bg-neutral rounded-full h-1 overflow-hidden">
          <MotionDiv
            className="h-full bg-cyan rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: slideInterval / 1000,
              ease: "linear",
              repeat: Infinity,
            }}
            key={currentIndex} // Reset animation on slide change
          />
        </div>
      )}
    </MotionDiv>
  );
}
