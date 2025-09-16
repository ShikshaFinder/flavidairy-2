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
import {
  Factory,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Building2,
  Wrench,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { APP_CONFIG } from "@/config/constants";
import { trackWhatsAppClick } from "@/lib/analytics";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [activeDropdown]);

  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to allow moving to submenu
    setHoverTimeout(timeout);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "#",
      hasDropdown: true,
      icon: Wrench,
      submenu: [
        { name: "Consultancy Services", href: "/consultancy", icon: Building2 },
        { name: "Equipment & Machinery", href: "/machinery", icon: Factory },
        { name: "Industries We Serve", href: "/industries", icon: Factory },
      ],
    },
    {
      name: "Resources",
      href: "/magazines",
      hasDropdown: true,
      icon: FileText,
      submenu: [
        { name: "Flavi Updates", href: "/magazines", icon: FileText },
        { name: "Company Brochures", href: "/brochures", icon: FileText },
      ],
    },
    {
      name: "Career",
      href: "/career",
      icon: Users,
    },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
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
                  alt="Euronova Food Solutions"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-blue-600">
                  Euro<span className="text-orange-600"></span> Nova Food
                  SOLUTIONS ®
                </span>
                <span className="text-sm text-gray-600 font-medium">
                  by Flavi Dairy Solutions
                </span>
              </div>
            </MotionDiv>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 text-black hover:text-blue-600 transition-colors duration-300 font-medium text-sm cursor-pointer py-2"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.name}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                ) : (
                  <Link href={item.href}>
                    <MotionDiv
                      className="flex items-center gap-1 text-black hover:text-blue-600 transition-colors duration-300 font-medium text-sm cursor-pointer py-2"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      {item.name}
                    </MotionDiv>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <MotionDiv
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral/20 py-2 z-50"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.submenu?.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href}>
                        <MotionDiv
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {subItem.name}
                          </span>
                        </MotionDiv>
                      </Link>
                    ))}
                  </MotionDiv>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
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
              <div className="py-4 space-y-2 px-4">
                {navItems.map((item, index) => (
                  <div key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <div
                          className="flex items-center justify-between text-black hover:text-blue-600 transition-colors duration-300 font-medium py-3 cursor-pointer border-b border-neutral/20"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.name ? null : item.name
                            )
                          }
                        >
                          <div className="flex items-center gap-2">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            {item.name}
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <MotionDiv
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-6 space-y-2 py-2">
                                {item.submenu?.map((subItem, subIndex) => (
                                  <Link key={subIndex} href={subItem.href}>
                                    <MotionDiv
                                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium py-2 cursor-pointer"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: subIndex * 0.1 }}
                                      onClick={() => {
                                        setIsOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      <subItem.icon className="w-4 h-4" />
                                      {subItem.name}
                                    </MotionDiv>
                                  </Link>
                                ))}
                              </div>
                            </MotionDiv>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={item.href}>
                        <MotionDiv
                          className="flex items-center gap-2 text-black hover:text-blue-600 transition-colors duration-300 font-medium py-3 cursor-pointer border-b border-neutral/20"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          {item.name}
                        </MotionDiv>
                      </Link>
                    )}
                  </div>
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
