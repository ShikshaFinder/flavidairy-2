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
        "End-to-end processing lines and machinery for comprehensive dairy solutions.",
      image: "/images/industries/dairy.jpg",
      sections: [
        {
          title: "Core Dairy Solutions",
          items: [
            "Reception, clarification, storage, pasteurization, homogenization, and standardization of liquid milk",
            "Production of pasteurized UHT milk and milk-based beverages like curd, lassi, flavoured milk, and ice cream mix",
            "Full product lines for curd, lassi, stirred/set yoghurt (including Greek yogurt), paneer, butter, ghee, cheese (Mozzarella, Cheddar), and other milk derivatives",
          ],
        },
        {
          title: "Specialized Processing Equipment & Lines",
          items: [
            "Milk Fat & Cream Processing: Equipment for standardization, ripening, churning, melting, storage and filling to produce butter or ghee with high yield and consistency",
            "Paneer & Cheese Lines: Stainless-steel vats, coagulation units, cheddaring systems, moulding, brining, cooling, and pressing solutions",
          ],
        },
        {
          title: "Automation & Control",
          items: [
            "Fully integrated dairy automation systems from milk intake to final packaging",
            "Real-time monitoring, performance tracking, MIS reporting, remote support, preventive maintenance alerts, and seamless SCADA integration",
          ],
        },
        {
          title: "Cleaning & Efficiency",
          items: [
            "Automated CIP (Cleaning In Place) systems designed to manage detergent concentration, temperature, flow and contact time",
            "Minimizing downtime and utility consumption while ensuring hygiene compliance",
          ],
        },
      ],
      products: [
        "Raw milk, bottled milk, Flavoured milk",
        "Powder Plant (Skimmed Milk Powder, Whey Powder, Whole Milk Powder)",
        "Paneer",
        "Dahi, Yogurt, Lassi, Kefir",
        "Butter, Ghee, Cream",
        "Buttermilk",
        "Sweetened Condensed Milk",
        "Dairy based sweets- Basundi, Ras Malia, Khoa",
        "Ice Cream",
        "Cheese (Cheddar, Mozzarella, Feta, Ricotta, Cream cheese, etc.)",
      ],
      keyClients: ["Amul", "Hatsun", "Varun Beverages", "Dabur", "Heritage"],
      benefits: [
        "Energy-efficient, high quality, hygienic processing solutions",
        "Compliant with international standards (3A, EHEDG)",
        "Centralized process engineering and automation control",
        "Cost effective solutions and streamlined operations",
      ],
    },
    {
      id: "food",
      name: "Food Processing",
      icon: Package,
      description:
        "Innovative food processing equipment designed to meet evolving demands of the food industry.",
      image: "/images/industries/food.jpg",
      sections: [
        {
          title: "Ready-to-Eat & Traditional Products",
          items: [
            "RTE (Ready-to-Eat), RTH (Ready-to-Heat), and RTS (Ready-to-Serve) Food Products",
            "Traditional Indian Snacks: Kachori, Samosa, Gathiya",
            "Paratha Production Line (Stuffed/Plain)",
            "Puran Poli Processing Line",
          ],
        },
        {
          title: "Sauce & Condiment Processing",
          items: [
            "Tomato-Based Products: Ketchup, Sauces, and Gravies",
            "Jams and Marmalade Preparation",
            "Mayonnaise and Emulsified Product Preparation",
          ],
        },
        {
          title: "Potato-Based Products",
          items: ["French Fries", "Potato Chips"],
        },
        {
          title: "Specialized Products",
          items: ["Non-Dairy Whipped Cream Processing Plant"],
        },
      ],
      benefits: [
        "Built with precision and undergo rigorous quality checks",
        "Crafted from premium-grade materials",
        "Fully customizable to suit specific production requirements",
        "Latest technology for maximum efficiency and superior food safety standards",
      ],
    },
    {
      id: "beverage",
      name: "Beverage Manufacturing",
      icon: Filter,
      description:
        "Advanced, tailor-made solutions for beverage processing with complete plant setups.",
      image: "/images/industries/beverage.jpg",
      offerings: [
        "Production lines for Ready-to-Serve (RTS) and Ready-to-Drink (RTD) beverages",
        "Systems for manufacturing Carbonated Soft Beverages (CSD)",
        "Processing setups for Sparkling Fruit-Based Drinks (CFD)",
        "Automated lines for Energy Drinks, Tonic Waters, and Functional Beverages",
      ],
      benefits: [
        "Enhance efficiency and maintain product quality",
        "Reduce operational costs",
        "Automated, hygienic, and energy-efficient processing systems",
        "Meet global standards",
        "Recipe management to packaging integration",
      ],
    },
    {
      id: "fruits-vegetables",
      name: "Fruits & Vegetables Processing",
      icon: Leaf,
      description:
        "Comprehensive solutions for processing wide range of fruits and vegetables.",
      image: "/images/industries/agriculture.jpg",
      sections: [
        {
          title: "Tomato Processing",
          items: [
            "Tomato puree, paste, ketchup, sauces, and gravies",
            "Hot break / cold break systems",
            "Vacuum evaporation & homogenization",
            "Pasteurization and aseptic packaging",
          ],
        },
        {
          title: "Mango Processing",
          items: [
            "Mango pulp, puree, nectar, and juice",
            "High-yield extraction & refining systems",
            "Aseptic filling for export",
          ],
        },
        {
          title: "Coconut Processing",
          items: [
            "Coconut water processing & bottling",
            "Coconut Milk, cream, and VCO (virgin coconut oil) extraction",
            "Spray drying for coconut milk powder",
            "Grating, peeling, and deshelling units",
          ],
        },
        {
          title: "Tropical Fruits",
          items: [
            "Juices, concentrates, and smoothies",
            "Banana, guava, pineapple, papaya, etc.",
            "Pulping, blending, and pasteurization lines",
            "Multi-fruit plant integration & flexible design",
          ],
        },
        {
          title: "Potato Processing",
          items: [
            "Potato flakes, granules, starch, French fries, and chips",
            "Vacuum drying and drum drying systems (for flakes & powders)",
            "Precision cutting systems for French fries and chips",
            "Packaging solutions for frozen, dehydrated, and snack products",
          ],
        },
      ],
      benefits: [
        "Preserve natural flavour, colour, and nutrition",
        "High productivity and hygiene across the entire process",
        "From raw material handling to final packaging",
      ],
    },
  ];

  const stats = [
    { icon: Users, label: "Industries Served", value: "10+" },
    { icon: Target, label: "Projects Completed", value: "500+" },
    { icon: Award, label: "Years Experience", value: "20+" },
    { icon: Clock, label: "Support Response", value: "24/7" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Industries Grid - Starting directly from Industries We Serve */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-white via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary/10 text-black border-secondary/20">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Industries We
              <span className="text-secondary"> Serve</span>
            </h1>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Comprehensive solutions for diverse processing industries with
              innovative technology and expertise
            </p>

            {/* Decorative Elements */}
            <div className="mt-8 flex justify-center space-x-8">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center">
                <Factory className="w-8 h-8 text-secondary" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center">
                <Droplets className="w-8 h-8 text-accent" />
              </div>
            </div>
          </MotionDiv>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <MotionDiv
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardHeader className="border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center relative overflow-hidden">
                        <industry.icon className="w-8 h-8 text-secondary relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 -translate-x-full animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl font-bold text-black">
                          {industry.name}
                        </CardTitle>
                        <p className="text-lg text-black/70 mt-2">
                          {industry.description}
                        </p>
                      </div>
                      {/* Decorative pattern */}
                      <div className="hidden md:flex space-x-2">
                        <div className="w-2 h-8 bg-gradient-to-b from-secondary to-secondary/50 rounded-full"></div>
                        <div className="w-2 h-6 bg-gradient-to-b from-secondary/70 to-secondary/30 rounded-full"></div>
                        <div className="w-2 h-4 bg-gradient-to-b from-secondary/50 to-secondary/20 rounded-full"></div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Sections for detailed industries */}
                    {industry.sections && (
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {industry.sections.map((section, sectionIdx) => (
                          <div key={sectionIdx}>
                            <h4 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center">
                                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                              </div>
                              <span className="border-b-2 border-gradient-to-r from-secondary to-transparent pb-1">
                                {section.title}
                              </span>
                            </h4>
                            <div className="space-y-3">
                              {section.items.map((item, itemIdx) => (
                                <div
                                  key={itemIdx}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                                  <span className="text-sm text-gray-700 leading-relaxed">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Offerings for beverages */}
                    {industry.offerings && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          </div>
                          <span className="border-b-2 border-secondary pb-1">
                            Our Specialized Offerings
                          </span>
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {industry.offerings.map((offering, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                              <span className="text-sm text-gray-700 leading-relaxed">
                                {offering}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Products section */}
                    {industry.products && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          </div>
                          <span className="border-b-2 border-secondary pb-1">
                            Products We Handle
                          </span>
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {industry.products.map((product, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {product}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Clients for dairy */}
                    {industry.keyClients && (
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold text-black mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center">
                            <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          </div>
                          <span className="border-b-2 border-secondary pb-1">
                            Key Clients
                          </span>
                        </h4>
                        <div className="flex flex-wrap gap-3 text-black">
                          {industry.keyClients.map((client, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-gradient-to-r from-secondary/10 to-secondary/5 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors"
                            >
                              {client}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
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
                <a
                  href={`https://wa.me/917202033384?text=${encodeURIComponent(
                    `Hi, I'm interested in industry-specific solutions for my processing needs. Please provide me with expert guidance and a free consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Free Consultation on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
