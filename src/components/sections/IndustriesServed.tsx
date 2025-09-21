"use client";

import { MotionDiv } from "@/components/ui/motion-optimized";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, Package, Filter, Leaf } from "lucide-react";

export function IndustriesServed() {
  const industries = [
    {
      id: "dairy",
      name: "Milk & Allied Products Processing (Dairy)",
      icon: Droplets,
      description:
        "Complete dairy processing solutions for milk, cheese, yogurt, butter, and ice cream production.",
      image: "/images/industries/dairy.jpg",
    },
    {
      id: "agro-food",
      name: "Agro-Food Processing",
      icon: Package,
      description:
        "Advanced food processing equipment for traditional and modern food products.",
      image: "/images/industries/food.jpg",
    },
    {
      id: "beverage",
      name: "Beverage Manufacturing",
      icon: Filter,
      description:
        "Comprehensive beverage processing solutions for juices, soft drinks, and energy drinks.",
      image: "/images/industries/beverages.jpg",
    },
    {
      id: "fruits-vegetables",
      name: "Fruits & Vegetables Processing",
      icon: Leaf,
      description:
        "Specialized processing equipment for fruits, vegetables, and agricultural products.",
      image: "/images/industries/agriculture.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            From dairy to food processing, we provide comprehensive solutions
            across multiple industries
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => (
            <MotionDiv
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full border-2 border-neutral hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-black text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
