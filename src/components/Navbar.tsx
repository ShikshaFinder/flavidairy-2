"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  MotionNav,
  MotionDiv,
  MotionA,
  MotionButton,
} from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Factory, Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Consultancy Services", href: "/consultancy" },
    { name: "Equipment", href: "/machinery" },
    { name: "Flavi Updates", href: "/magazines" },
    { name: "Career", href: "/career" },
  ];

  return (
    <MotionNav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "bg-white 2xl:bg-transparent border-b border-gray-200 shadow-sm"
        }
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <MotionDiv
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-12 w-auto relative">
                <Image
                  src="/favicon.ico"
                  alt="Flavi Dairy Solutions"
                  width={55}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-black ">
                Flavi ® Dairy Solutions
              </span>
            </MotionDiv>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <MotionDiv
                  className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </MotionDiv>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://wa.me/917202033384?text=${encodeURIComponent(
                `Hi, I'm interested in your services and would like to get in touch. Please provide more information about your offerings.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white border-0">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <MotionDiv
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <MotionButton
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-black" />
            ) : (
              <Menu className="w-6 h-6 text-black" />
            )}
          </MotionButton>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
            >
              <div className="py-4 space-y-4 px-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <MotionDiv
                      className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </MotionDiv>
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <a
                    href={`https://wa.me/917202033384?text=${encodeURIComponent(
                      `Hi, I'm interested in your services and would like to get in touch. Please provide more information about your offerings.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white border-0">
                      <span className="relative z-10 flex items-center gap-2">
                        Contact Us on WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <MotionDiv
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </MotionNav>
  );
}
