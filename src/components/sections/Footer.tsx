"use client";

import { MotionDiv } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Factory, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-gray-200 overflow-hidden">
      <div className="absolute inset-0">
        <MotionDiv
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(2, 132, 199, 0.03) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <MotionDiv
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="Flavi Dairy Solutions"
                  className="h-12 w-auto object-contain"
                />
                <span className="text-xl font-bold text-black">
                  Flavi Dairy Food Solutions
                </span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Leading provider of dairy and food processing solutions with 20+
                years of experience. We deliver innovative, reliable, and
                efficient processing equipment and consultancy services.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white border-0"
                  asChild
                >
                  <Link href="/contact">
                    <span className="flex items-center gap-2">
                      Free Initial Consultation
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </MotionDiv>

            {/* Contact Info */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-black mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">+91 7202033384</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="text-gray-600">
                    contact@flavidairysolution.com
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-1" />
                  <span className="text-gray-600">
                       403, 4th Floor, 'Samruddhi', Opp. Old High Court, B/H Navdeep Bldg., Navrangpura, Ahmedabad-380014

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
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 Flavi Dairy Solution. All rights reserved.
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
