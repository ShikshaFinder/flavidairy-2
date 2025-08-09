"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Building2,
  Settings,
  FileText,
  Wrench,
  Lightbulb,
  TestTube,
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Shield,
  Factory,
  Cog,
  Layout,
  ClipboardList,
  MapPin,
  Tool,
  GraduationCap,
  BarChart3,
  Search,
  RefreshCw,
  FlaskConical,
  Microscope,
  FileCheck,
  Package,
  Globe,
  Monitor,
  Database,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function ConsultancyPage() {
  const services = [
    {
      id: "turnkey",
      title: "Turnkey Project Solutions",
      icon: Factory,
      color: "primary",
      description: "Complete project execution from greenfield to brownfield",
      services: [
        "Greenfield Projects – Complete setup of new dairy/food processing units",
        "Brownfield Projects – Expansion or modernization of existing facilities",
        "Detailed Project Report (DPR)",
        "Tender Preparation (Engineering Documentation)",
      ],
    },
    {
      id: "engineering",
      title: "Engineering & Technical Consultancy",
      icon: Cog,
      color: "secondary",
      description: "Comprehensive technical design and planning services",
      services: [
        "Project Engineering & Technical Design",
        "Customized Machinery Planning",
        "Process & Instrumentation Diagrams (P&ID)",
        "Bill of Quantity (BoQ)",
        "Equipment Layout Planning",
        "Retrofitting of existing plants",
        "Line expansions/ Products portfolio expansion",
        "Automation & Mechanization Strategy (Dairy & Food Industry)",
      ],
    },
    {
      id: "facility",
      title: "Facility and Operational Setup",
      icon: Layout,
      color: "accent",
      description: "Complete facility design and operational guidance",
      services: [
        "Facility Layout Design & Optimization",
        "Production Line Planning (Dairy & Food)",
        "Installation & Commissioning Support",
        "Maintenance and Operational Guidance",
        "Lab Setup (Quality Control & R&D)",
        "Technical Training & Internship Programs",
      ],
    },
    {
      id: "business",
      title: "Business and Technical Advisory",
      icon: BarChart3,
      color: "tertiary",
      description: "Strategic business and technical consulting",
      services: [
        "Business and Product Strategy",
        "Cost & Resource Optimization",
        "Valuation and Due Diligence",
        "Benchmarking and Market Intelligence",
        "Reverse Engineering",
      ],
    },
    {
      id: "rd",
      title: "Research & Development (R&D)",
      icon: FlaskConical,
      color: "primary",
      description: "Innovation and product development services",
      services: [
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
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-sky-600 border-sky-200 bg-sky-50";
      case "secondary":
        return "text-sky-700 border-sky-300 bg-sky-100";
      case "accent":
        return "text-sky-800 border-sky-400 bg-sky-150";
      case "tertiary":
        return "text-sky-600 border-sky-200 bg-sky-50";
      default:
        return "text-sky-600 border-sky-200 bg-sky-50";
    }
  };

  const benefits = [
    {
      icon: Target,
      title: "End-to-End Delivery",
      description: "Complete project execution with minimal client involvement",
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "High performance, compliance, efficiency, and traceability",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Maintain highest standards for reliable, food-safe systems",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Continued support well beyond commissioning",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-secondary/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Consultancy Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-black/70">
              Expert consultation, turnkey execution, and strategic guidance for
              dairy and food processing industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white"
              >
                <Link href="/contact" className="flex items-center">
                  Get Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-300 text-sky-700 hover:bg-sky-600 hover:text-white"
              >
                <Link href="/contact">Download Brochure</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Our Consultancy Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-black/70">
                From concept to commissioning, we provide comprehensive
                consultancy services tailored to your specific needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 0.1}>
                <MotionDiv
                  className="h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="pb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 ${getColorClasses(
                            service.color
                          )} rounded-lg flex items-center justify-center`}
                        >
                          <service.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-black">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-black/70">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3">
                        {service.services.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-sm text-black/60">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Why Choose Our Consultancy?
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-black/70">
                With 20+ years of experience, we deliver value through
                expertise, innovation, and commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-black/70">
                    {benefit.description}
                  </p>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Our Consultancy Process
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-black/70">
                A systematic approach to delivering successful projects and
                sustainable solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Discovery & Analysis
                </h3>
                <p className="text-sm text-black/70">
                  Understanding your requirements, challenges, and objectives
                  through detailed analysis
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Strategy & Planning
                </h3>
                <p className="text-sm text-black/70">
                  Developing comprehensive strategies and detailed project plans
                  tailored to your needs
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Implementation
                </h3>
                <p className="text-sm text-black/70">
                  Executing the plan with precision, ensuring quality and timely
                  delivery
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black">
                  Support & Optimization
                </h3>
                <p className="text-sm text-black/70">
                  Ongoing support, monitoring, and continuous improvement for
                  long-term success
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Areas of Expertise
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-black/70">
                Specialized knowledge across all aspects of dairy and food
                processing
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-sky-600">
                    Process Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      Process Design
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      P&ID Development
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Equipment Selection
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Layout Planning
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Utility Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-sky-700">
                    Automation & Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      SCADA Systems
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      PLC Programming
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      HMI Design
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Process Control
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Data Acquisition
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-sky-800">
                    Quality & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2 mb-2">
                      FSSAI Compliance
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      ISO Standards
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      HACCP Implementation
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Quality Control
                    </Badge>
                    <Badge variant="outline" className="mr-2 mb-2">
                      Food Safety
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our expert consultants help you achieve operational excellence
              and sustainable growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-sky-600 hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sky-600"
              >
                <Link href="/contact">Download Case Studies</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
