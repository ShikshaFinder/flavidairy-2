"use client";

import { MotionDiv } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Target, Zap } from "lucide-react";
import Link from "next/link";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description:
        "We start by understanding your requirements, challenges, and objectives through detailed analysis of your current operations.",
      icon: Target,
      color: "primary",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "Our experts develop comprehensive strategies and detailed project plans tailored to your specific needs and constraints.",
      icon: Users,
      color: "secondary",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We execute the plan with precision, ensuring quality and timely delivery while maintaining the highest standards.",
      icon: Zap,
      color: "accent",
    },
    {
      number: "04",
      title: "Support & Optimization",
      description:
        "We provide ongoing support, monitoring, and continuous improvement for long-term success and optimal performance.",
      icon: CheckCircle,
      color: "tertiary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-blue-600 border-blue-300 bg-blue-50";
      case "secondary":
        return "text-orange-600 border-orange-300 bg-orange-50";
      case "accent":
        return "text-blue-500 border-blue-300 bg-blue-50";
      case "tertiary":
        return "text-orange-500 border-orange-300 bg-orange-50";
      default:
        return "text-blue-600 border-blue-300 bg-blue-50";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Process
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A systematic approach to delivering successful projects and
            sustainable solutions
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <MotionDiv
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <div
                    className={`w-16 h-16 ${getColorClasses(
                      step.color
                    )} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-foreground/10 mb-2">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow */}
              {index < steps.length - 1 && (
                <MotionDiv
                  className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                >
                  <ArrowRight className="w-8 h-8 text-blue-400" />
                </MotionDiv>
              )}
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-foreground-secondary mb-6">
            Ready to start your project? Let's discuss how we can help you
            achieve your goals.
          </p>
          <Link href="https://wa.me/917202033384?text=Hi, I'm interested in a free initial consultation. Please provide details about your services and schedule a consultation.">
            <button className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
              Get Started Today
            </button>
          </Link>
        </MotionDiv>
      </div>
    </section>
  );
}
