"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion-optimized";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Factory,
  Cog,
  Layout,
  BarChart3,
  FlaskConical,
  Target,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ConsultancyPage() {
  const services = [
    {
      title: "Turnkey Project Solutions",
      icon: Factory,
      description: "Complete project execution from greenfield to brownfield",
      items: [
        "Greenfield Projects – Complete setup of new dairy/food processing units",
        "Brownfield Projects – Expansion or modernization of existing facilities",
        "Detailed Project Report (DPR)",
        "Tender Preparation (Engineering Documentation)",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Engineering & Technical Consultancy",
      icon: Cog,
      description: "Comprehensive technical design and planning services",
      items: [
        "Project Engineering & Technical Design",
        "Customized Machinery Planning",
        "Process & Instrumentation Diagrams (P&ID)",
        "Bill of Quantity (BoQ)",
        "Equipment Layout Planning",
        "Retrofitting of existing plants",
        "Line expansions/ Products portfolio expansion",
        "Automation & Mechanization Strategy (Dairy & Food Industry)",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      title: "Facility and Operational Setup",
      icon: Layout,
      description: "Complete facility design and operational guidance",
      items: [
        "Facility Layout Design & Optimization",
        "Production Line Planning (Dairy & Food)",
        "Installation & Commissioning Support",
        "Maintenance and Operational Guidance",
        "Lab Setup (Quality Control & R&D)",
        "Technical Training & Internship Programs",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Business and Technical Advisory",
      icon: BarChart3,
      description: "Strategic business and technical consulting",
      items: [
        "Business and Product Strategy",
        "Cost & Resource Optimization",
        "Valuation and Due Diligence",
        "Benchmarking and Market Intelligence",
        "Reverse Engineering",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      title: "Research & Development (R&D)",
      icon: FlaskConical,
      description: "Innovation and product development services",
      items: [
        "New Product Development (NPD)",
        "Reverse Engineering / Re-engineering",
        "Functional / Special Ingredient Development",
        "Process Design & Validation",
        "Hurdle Technology Implementation",
        "Shelf-Life Enhancement",
        "Legal & Nutritional Food Claims",
        "Nutrition Labelling Support",
        "Portfolio Expansion (Value-Added Products)",
        "R&D Consulting (On-site and Remote)",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Consultancy Services
            </Badge>
          </MotionDiv>

          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-black"
          >
            Expert Consultancy
            <span className="text-orange-600"> Solutions</span>
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Expert consultation, turnkey execution, and strategic guidance for
            dairy and food processing industries
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link
                href="https://wa.me/919979132679?text=Hi,%20I%20am%20interested%20in%20your%20consultancy%20services.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Get Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Our Consultancy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to commissioning, we provide comprehensive
              consultancy services tailored to your specific needs
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-200">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-black mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let our expert consultants help you optimize your operations and
              achieve your business goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link
                href="https://wa.me/919979132679?text=Hi,%20I%20am%20interested%20in%20your%20consultancy%20services.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Start Your Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
