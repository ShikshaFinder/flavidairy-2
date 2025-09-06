"use client";

import { MotionDiv } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      {/* Soft gradient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <MotionDiv
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 45%),
              radial-gradient(circle at 90% 80%, rgba(2, 132, 199, 0.05) 0%, transparent 45%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand and blurb */}
            <MotionDiv
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 md:h-20 lg:h-24 w-auto relative max-w-full">
                  <Image
                    src="/logo.png"
                    alt="Flavi Dairy Solutions"
                    width={240}
                    height={96}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-xl leading-relaxed">
                Leading provider of dairy and food processing solutions with 20+
                years of experience. We deliver innovative, reliable, and
                efficient processing equipment and consultancy services.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white border-0"
                  asChild
                >
                  <a
                    href={`https://wa.me/917202033384?text=${encodeURIComponent(
                      "Hi, I'm interested in your services. Please provide details about your services."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    aria-label="Contact us on WhatsApp"
                  >
                    Contact Us on WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                <div className="flex items-center gap-3 ml-1" aria-label="Social links">
                  <Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:text-black hover:border-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </MotionDiv>

            {/* Quick Links */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-black mb-6">Quick Links</h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link href="#services" className="hover:text-black transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#industries" className="hover:text-black transition-colors">
                    Industries We Serve
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-black transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-black transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </MotionDiv>

            {/* Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-lg font-semibold text-black mb-6">Contact Info</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+91 7202033384</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>contact@flavidairysolution.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>
                    403, 4th Floor, 'Samruddhi', Opp. Old High Court, B/H Navdeep Bldg.,
                    Navrangpura, Ahmedabad-380014
                  </span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>

        {/* Bottom Bar */}
        <MotionDiv
          className="border-t border-gray-200 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Flavi Dairy Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </MotionDiv>
      </div>
    </footer>
  );
}
