"use client";

import { useState } from "react";
import { MotionDiv, MotionLi } from "@/components/ui/motion-optimized";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: isAnnual ? 999 : 99,
      originalPrice: isAnnual ? 1199 : 119,
      features: [
        "Basic consultation services",
        "Process design support",
        "Equipment recommendations",
        "Email support",
        "Basic documentation",
      ],
      popular: false,
      color: "primary",
    },
    {
      name: "Professional",
      description: "Ideal for growing companies and medium-scale operations",
      price: isAnnual ? 2499 : 249,
      originalPrice: isAnnual ? 2999 : 299,
      features: [
        "Everything in Starter",
        "Detailed project planning",
        "Custom equipment design",
        "On-site consultation",
        "Priority support",
        "Comprehensive documentation",
        "Training sessions",
      ],
      popular: true,
      color: "secondary",
    },
    {
      name: "Enterprise",
      description: "Complete solution for large-scale operations",
      price: isAnnual ? 4999 : 499,
      originalPrice: isAnnual ? 5999 : 599,
      features: [
        "Everything in Professional",
        "Turnkey project execution",
        "Full automation integration",
        "24/7 dedicated support",
        "Custom software development",
        "Performance optimization",
        "Ongoing maintenance",
        "Regular audits & updates",
      ],
      popular: false,
      color: "accent",
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
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Flexible pricing options to meet your business needs and budget
          </p>
        </MotionDiv>

        {/* Billing Toggle */}
        <MotionDiv
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-sm text-foreground-secondary">Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
              isAnnual ? "bg-primary" : "bg-muted"
            }`}
          >
            <MotionDiv
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isAnnual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-sm text-foreground-secondary">
            Annual
            <Badge className="ml-2 bg-green-100 text-green-700 border-green-200">
              Save 20%
            </Badge>
          </span>
        </MotionDiv>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {plan.popular && (
                <MotionDiv
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-4 py-2">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </MotionDiv>
              )}

              <Card
                className={`h-full relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-2 border-primary shadow-lg"
                    : "border border-border"
                }`}
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-12 h-12 ${getColorClasses(
                      plan.color
                    )} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-lg font-bold">{plan.name[0]}</span>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-foreground-secondary">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-foreground">
                        ₹{plan.price.toLocaleString()}
                      </span>
                      <span className="text-foreground-secondary">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    </div>
                    {plan.originalPrice > plan.price && (
                      <p className="text-sm text-foreground-secondary line-through">
                        ₹{plan.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <MotionLi
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-foreground-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: featureIndex * 0.1,
                        }}
                      >
                        <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        {feature}
                      </MotionLi>
                    ))}
                  </ul>

                  <MotionDiv
                    className="pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Button
                      className={`w-full group relative overflow-hidden ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                      asChild
                    >
                      <Link href="https://wa.me/919979132679?text=Hi, I'm interested in a free initial consultation. Please provide details about your services and schedule a consultation.">
                        <span className="relative z-10 flex items-center gap-2">
                          Get Started
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-white" />
                        </span>
                        <MotionDiv
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Link>
                    </Button>
                  </MotionDiv>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Additional Info */}
        <MotionDiv
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-foreground-secondary mb-4">
            Need a custom solution? Contact us for a personalized quote.
          </p>
          <Button variant="outline" asChild>
            <Link href="https://wa.me/919979132679?text=Hi, I'm interested in a free initial consultation. Please provide details about your services and schedule a consultation.">
              Contact Sales Team
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
