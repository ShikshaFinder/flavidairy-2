"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  Factory,
  Droplets,
  Package,
  Filter,
  Leaf,
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Award,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      id: "dairy",
      name: "Dairy Processing",
      icon: Droplets,
      description:
        "Complete dairy processing solutions for milk, cheese, yogurt, butter, and ice cream production.",
      image: "/images/industries/dairy.jpg",
      products: [
        "Milk & Milk Products",
        "Cheese & Curd",
        "Butter & Ghee",
        "Ice Cream",
        "Milk Powder",
        "Whey Products",
      ],
      equipment: [
        "Pasteurizers & Homogenizers",
        "Cream Separators",
        "Cheese Vats",
        "Butter Churns",
        "Ice Cream Freezers",
        "Spray Dryers",
      ],
      benefits: [
        "FSSAI compliant processing",
        "Energy efficient systems",
        "Automated control",
        "Hygienic design",
      ],
    },
    {
      id: "food",
      name: "Food Processing",
      icon: Package,
      description:
        "Specialized equipment for fruits, vegetables, grains, and ready-to-eat food processing.",
      image: "/images/industries/food.jpg",
      products: [
        "Fruits & Vegetables",
        "Grains & Cereals",
        "Snack Foods",
        "Ready-to-Eat",
        "Bakery Products",
        "Confectionery",
      ],
      equipment: [
        "Sorting & Grading Systems",
        "Washing & Peeling Machines",
        "Cooking & Processing Units",
        "Packaging Lines",
        "Quality Control Equipment",
        "Material Handling Systems",
      ],
      benefits: [
        "Preserve nutritional value",
        "Extended shelf life",
        "Consistent quality",
        "High production capacity",
      ],
    },
    {
      id: "beverage",
      name: "Beverage Manufacturing",
      icon: Filter,
      description:
        "Complete beverage production lines for juices, carbonated drinks, and energy drinks.",
      image: "/images/industries/beverage.jpg",
      products: [
        "Fruit Juices",
        "Carbonated Beverages",
        "Energy Drinks",
        "Sports Drinks",
        "Flavored Water",
        "Syrups & Concentrates",
      ],
      equipment: [
        "Juice Extractors",
        "Carbonation Systems",
        "Mixing & Blending Units",
        "Bottling Lines",
        "Canning Systems",
        "Labeling Machines",
      ],
      benefits: [
        "High extraction efficiency",
        "Precise carbonation control",
        "Automated filling",
        "Quality assurance",
      ],
    },
    {
      id: "pharma",
      name: "Pharmaceutical",
      icon: Leaf,
      description:
        "Hygienic processing equipment for pharmaceutical and nutraceutical products.",
      image: "/images/industries/pharma.jpg",
      products: [
        "Tablets & Capsules",
        "Liquid Formulations",
        "Creams & Ointments",
        "Syrups & Suspensions",
        "Powder Products",
        "Herbal Extracts",
      ],
      equipment: [
        "Granulation Systems",
        "Coating Machines",
        "Filling & Sealing Units",
        "Sterilization Equipment",
        "Quality Testing Systems",
        "Clean Room Equipment",
      ],
      benefits: [
        "GMP compliant",
        "Sterile processing",
        "Precise dosing",
        "Documentation support",
      ],
    },
    {
      id: "chemical",
      name: "Chemical Processing",
      icon: Zap,
      description:
        "Industrial chemical processing equipment for various chemical manufacturing applications.",
      image: "/images/industries/chemical.jpg",
      products: [
        "Industrial Chemicals",
        "Agro Chemicals",
        "Paints & Coatings",
        "Adhesives",
        "Lubricants",
        "Cleaning Products",
      ],
      equipment: [
        "Reaction Vessels",
        "Heat Exchangers",
        "Filtration Systems",
        "Drying Equipment",
        "Mixing & Blending",
        "Storage Tanks",
      ],
      benefits: [
        "Corrosion resistant",
        "High temperature operation",
        "Safety compliance",
        "Process optimization",
      ],
    },
  ];

  const stats = [
    { icon: Users, label: "Industries Served", value: "15+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Years Experience", value: "20+" },
    { icon: Clock, label: "Support Response", value: "24/7" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-secondary/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary/10 text-black border-secondary/20">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Solutions for Every
              <span className="text-secondary"> Industry</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              From dairy and food processing to pharmaceuticals and chemicals,
              we provide comprehensive solutions tailored to your industry's
              specific needs. Our expertise spans across pharma, chemical,
              dairy, food, and beverage processing industries.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </h3>
                <p className="text-black/70">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Industries We Serve
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Comprehensive solutions for diverse processing industries
            </p>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <MotionDiv
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                      <industry.icon className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-black">
                      {industry.name}
                    </CardTitle>
                    <p className="text-black/70">{industry.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-black mb-3">
                        Products
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.products.map((product, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-black/70">
                              {product}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">
                        Equipment
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {industry.equipment.map((equipment, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-black/70">
                              {equipment}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">
                        Key Benefits
                      </h4>
                      <div className="space-y-2">
                        {industry.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-black/70">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        className="w-full bg-secondary hover:bg-secondary/90 text-black border-0"
                        asChild
                      >
                        <Link href="/machinery">
                          <span className="flex items-center justify-center gap-2">
                            View Equipment
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why Choose Us for Your Industry?
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Industry-specific expertise and customized solutions for optimal
              results
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Industry Expertise",
                description:
                  "Deep understanding of industry-specific requirements and regulations",
              },
              {
                icon: Target,
                title: "Customized Solutions",
                description:
                  "Tailored equipment and processes for your specific needs",
              },
              {
                icon: Award,
                title: "Quality Assurance",
                description:
                  "Compliance with industry standards and quality certifications",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "On-time project completion with minimal disruption",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Dedicated technical support and maintenance services",
              },
              {
                icon: Zap,
                title: "Innovation",
                description: "Latest technology and continuous improvement",
              },
            ].map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black/70 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Get industry-specific solutions and expert guidance for your
              processing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get Industry Solutions
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/machinery">View Equipment</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
