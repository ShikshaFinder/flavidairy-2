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
    { name: "Machinery & Equipment", href: "/machinery" },
    { name: "Flavi Updates", href: "/magazines" },
    { name: "Career", href: "/career" },
  ];

  return (
    <MotionNav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg"
          : "md:bg-transparent bg-white border-b border-gray-200 shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <MotionDiv
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src="/logo.png"
              alt="Flavi Dairy Solutions"
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold text-black">
              Flavi Dairy Food Sol
            </span>
          </MotionDiv>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <MotionA
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium text-sm"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </MotionA>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <Button className="group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white border-0">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <MotionDiv
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </Link>
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
                  <MotionA
                    key={index}
                    href={item.href}
                    className="block text-gray-600 hover:text-black transition-colors duration-300 font-medium py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </MotionA>
                ))}
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <Link href="/contact">
                    <Button className="w-full group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white border-0">
                      <span className="relative z-10 flex items-center gap-2">
                        Contact Us
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <MotionDiv
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </MotionNav>
  );
}
