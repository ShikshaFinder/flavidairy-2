"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/ui/motion";

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
  slideInterval = 3000,
  slidesToShow = 6,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoSlide);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, images.length - responsiveSlidesToShow);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideWidth = 100 / responsiveSlidesToShow;
  const translateX = -(currentIndex * slideWidth);

  return (
    <MotionDiv
      className={`relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            className="h-8 w-8 p-0"
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
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
            width: `${(images.length / responsiveSlidesToShow) * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="px-2"
              style={{ width: `${100 / images.length}%` }}
            >
              <MotionDiv
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-square bg-white rounded-lg border border-gray-200 p-4 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <Image
                    src={`${basePath}/${image}`}
                    alt={`${title} ${index + 1}`}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500 p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
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
          className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-white/90 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-white/90 hover:bg-white shadow-lg border-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          disabled={
            currentIndex >= Math.max(0, images.length - responsiveSlidesToShow)
          }
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({
          length: Math.max(1, images.length - responsiveSlidesToShow + 1),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="mt-3 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <MotionDiv
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: slideInterval / 1000,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </div>
      )}
    </MotionDiv>
  );
}
