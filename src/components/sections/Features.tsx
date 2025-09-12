"use client";

import { MotionDiv } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Shield,
  Zap,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "All equipment meets international standards and undergoes rigorous quality testing to ensure reliability and safety.",
      color: "primary",
    },
    {
      icon: Zap,
      title: "Automation & Efficiency",
      description:
        "Advanced automation systems with SCADA integration for optimal performance, traceability, and reduced operational costs.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "Dedicated team of engineers and technocrats providing comprehensive installation, training, and ongoing support services.",
      color: "accent",
    },
    {
      icon: Target,
      title: "Customized Solutions",
      description:
        "Tailored processing solutions designed to meet your specific production requirements and operational constraints.",
      color: "tertiary",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description:
        "Continuous monitoring and optimization to maximize efficiency, productivity, and return on investment for your operations.",
      color: "primary",
    },
    {
      icon: CheckCircle,
      title: "Compliance & Safety",
      description:
        "Full compliance with FSSAI, ISO, HACCP standards ensuring food safety and regulatory requirements are met.",
      color: "secondary",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary border-primary/20 bg-primary/10";
      case "secondary":
        return "text-accent border-accent/20 bg-accent/10";
      case "accent":
        return "text-cyan border-cyan/20 bg-cyan/10";
      case "tertiary":
        return "text-primary border-primary/20 bg-primary/5";
      default:
        return "text-primary border-primary/20 bg-primary/10";
    }
  };

  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our Key Strengths
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Discover what sets us apart in the dairy and food processing
            industry with our trusted and reliable solutions
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div
                    className={`w-16 h-16 ${getColorClasses(
                      feature.color
                    )} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black text-center">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-black leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-black mb-6">
            Experience the difference with our comprehensive solutions and
            expert support.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
