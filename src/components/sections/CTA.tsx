"use client";

import { MotionDiv, MotionButton } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <MotionDiv
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(239, 119, 34, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(250, 165, 51, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(11, 166, 223, 0.05) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Ready for Comprehensive
            <span className="text-primary"> End-to-End Solutions?</span>
          </h2>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Trust our dedicated team of engineers and technocrats to deliver
            customized processing solutions backed by 20+ years of reliability
            and expertise.
          </p>

          <MotionDiv
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MotionButton
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group relative overflow-hidden border-0"
              asChild
            >
              <Link href="https://wa.me/917202033384?text=Hi, I'm interested in your services. Please provide details about your services.">
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <MotionDiv
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </MotionButton>

          
          </MotionDiv>

         
        </MotionDiv>
      </div>
    </section>
  );
}
