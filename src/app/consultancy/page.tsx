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
} from "lucide-react";
import Link from "next/link";

export default function ConsultancyPage() {
  const services = [
    {
      id: "turnkey",
      title: "Turnkey Project Solutions",
      icon: Building2,
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
      icon: Settings,
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
        "Automation & Mechanization Strategy",
      ],
    },
    {
      id: "facility",
      title: "Facility and Operational Setup",
      icon: Wrench,
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
      icon: Lightbulb,
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
      icon: TestTube,
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
        return "text-primary border-primary bg-primary/5";
      case "secondary":
        return "text-secondary border-secondary bg-secondary/5";
      case "accent":
        return "text-accent border-accent bg-accent/5";
      case "tertiary":
        return "text-tertiary border-tertiary bg-tertiary/5";
      default:
        return "text-primary border-primary bg-primary/5";
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
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Consultancy Services
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Expert consultation, turnkey execution, and strategic guidance for
              dairy and food processing industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary"
              >
                <Link href="/contact" className="flex items-center">
                  Get Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Consultancy Services
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
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
                          <CardTitle className="text-xl font-bold text-foreground">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="text-foreground-secondary">
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
                            <span className="text-sm text-foreground-secondary">
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
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Our Consultancy?
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
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
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Consultancy Process
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                A systematic approach to delivering successful projects and
                sustainable solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Discovery & Analysis
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Understanding your requirements, challenges, and objectives
                  through detailed analysis
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Strategy & Planning
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Developing comprehensive strategies and detailed project plans
                  tailored to your needs
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Implementation
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Executing the plan with precision, ensuring quality and timely
                  delivery
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-tertiary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Support & Optimization
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Ongoing support, monitoring, and continuous improvement for
                  long-term success
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Areas of Expertise
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Specialized knowledge across all aspects of dairy and food
                processing
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <Card className="shadow-lg hover-lift">
                <CardHeader>
                  <CardTitle className="text-primary">
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
                  <CardTitle className="text-secondary">
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
                  <CardTitle className="text-accent">
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
      <section className="py-16 bg-gradient-multi">
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
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
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
