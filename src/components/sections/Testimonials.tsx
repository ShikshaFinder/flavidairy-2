"use client";

import { useState } from "react";
import {
  MotionDiv,
  MotionBlockquote,
  MotionButton,
} from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      role: "CEO, Gujarat Dairy Co.",
      company: "Gujarat Dairy Co.",
      content:
        "Flavi Dairy transformed our processing facility with their innovative automation solutions. The SCADA integration has improved our efficiency by 40% and reduced operational costs significantly. Their expertise in dairy processing and commitment to quality has made them our trusted partner for all processing needs.",
      rating: 5,
      image: "https://via.placeholder.com/60x60",
      category: "Dairy Processing",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Operations Manager",
      company: "Fresh Foods Ltd.",
      content:
        "Their turnkey project execution was exceptional. From concept to commissioning, they handled everything professionally. Our new food processing line is running smoothly.",
      rating: 5,
      image: "https://via.placeholder.com/60x60",
      category: "Food Processing",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Technical Director",
      company: "Beverage Solutions",
      content:
        "The automation systems they implemented have revolutionized our production. Real-time monitoring and predictive maintenance features are game-changers for our industry.",
      rating: 5,
      image: "https://via.placeholder.com/60x60",
      category: "Beverage Manufacturing",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Plant Manager",
      company: "Organic Fruits Co.",
      content:
        "Their expertise in fruits and vegetables processing helped us preserve natural flavors while improving shelf life. The equipment quality and after-sales support are outstanding.",
      rating: 5,
      image: "https://via.placeholder.com/60x60",
      category: "Fruits & Vegetables",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Production Head",
      company: "Modern Dairy Products",
      content:
        "Flavi Dairy's consultancy services helped us optimize our entire production process. Their technical expertise and industry knowledge are unmatched in the market.",
      rating: 5,
      image: "https://via.placeholder.com/60x60",
      category: "Consultancy",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-8 bg-gradient-to-br from-background-secondary to-background-tertiary">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Trusted by leading companies across dairy, food, and beverage
            industries
          </p>
        </MotionDiv>

        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <MotionDiv
                className="absolute top-6 right-6 text-primary/20"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Quote className="w-16 h-16" />
              </MotionDiv>

              <MotionDiv
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {currentTestimonial.company}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="ml-auto text-xs border-green-200 text-green-700"
                >
                  {currentTestimonial.category}
                </Badge>
              </MotionDiv>

              <MotionBlockquote
                className="text-lg md:text-xl text-foreground-secondary leading-relaxed mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                "{currentTestimonial.content}"
              </MotionBlockquote>

              <MotionDiv
                className="flex items-center gap-1 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-green-500 text-green-500"
                  />
                ))}
              </MotionDiv>

              <MotionDiv
                className="flex items-center justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <MotionButton
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-green-200 text-green-700 hover:bg-green-600 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft className="w-4 h-4" />
                </MotionButton>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <MotionDiv
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? "bg-green-600" : "bg-green-200"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setCurrentIndex(index)}
                    />
                  ))}
                </div>

                <MotionButton
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full w-12 h-12 p-0 border-green-200 text-green-700 hover:bg-green-600 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </MotionButton>
              </MotionDiv>
            </CardContent>
          </Card>
        </MotionDiv>
      </div>
    </section>
  );
}
