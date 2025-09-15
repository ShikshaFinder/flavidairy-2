"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  MotionNav,
  MotionDiv,
  MotionA,
  MotionButton,
} from "@/components/ui/motion-optimized";
import { Button } from "@/components/ui/button";
import { Factory, Menu, X, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { APP_CONFIG } from "@/config/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

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
    { name: "Brochures", href: "/brochures" },
    { name: "Career", href: "/career" },
  ];

  return (
    <MotionNav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-neutral shadow-lg"
            : "bg-white border-b border-neutral shadow-sm"
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
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-600">
                  FLAVI<span className="text-orange-600"></span> DAIRY SOLUTIONS
                  ®
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  Euronova Food Solutions
                </span>
              </div>
            </MotionDiv>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <MotionDiv
                  className="text-black hover:text-blue-600 transition-colors duration-300 font-medium text-sm cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </MotionDiv>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href={`https://wa.me/${
                APP_CONFIG.CONTACT.WHATSAPP.NUMBER
              }?text=${encodeURIComponent(
                APP_CONFIG.CONTACT.WHATSAPP.MESSAGE
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("navbar_desktop")}
            >
              <Button className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white border-0">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us on WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
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
            className="md:hidden p-2 rounded-lg hover:bg-neutral/50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-blue-600" />
            ) : (
              <Menu className="w-6 h-6 text-blue-600" />
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
              className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-neutral shadow-lg"
            >
              <div className="py-4 space-y-4 px-4">
                {navItems.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <MotionDiv
                      className="block text-black hover:text-blue-600 transition-colors duration-300 font-medium py-2 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </MotionDiv>
                  </Link>
                ))}
                <div className="pt-4 space-y-3 border-t border-neutral">
                  <LanguageSwitcher className="mb-3" />
                  <a
                    href={`https://wa.me/${
                      APP_CONFIG.CONTACT.WHATSAPP.NUMBER
                    }?text=${encodeURIComponent(
                      APP_CONFIG.CONTACT.WHATSAPP.MESSAGE
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("navbar_mobile")}
                  >
                    <Button className="w-full group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white border-0">
                      <span className="relative z-10 flex items-center gap-2">
                        Contact Us on WhatsApp
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
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
