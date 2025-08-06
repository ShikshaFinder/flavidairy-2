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
  Settings,
  Wrench,
  Truck,
  Headphones,
  ArrowRight,
  CheckCircle,
  Factory,
  Cog,
  Shield,
  Zap,
  Package,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function MachineryPage() {
  const machineryCategories = [
    {
      id: "dairy",
      title: "Dairy Processing Machinery",
      icon: Settings,
      color: "primary",
      description: "Complete range of dairy processing equipment",
      equipment: [
        "Milk reception and storage tanks",
        "Pasteurizers and homogenizers",
        "Cream separators and standardizers",
        "Cheese vats and molding equipment",
        "Butter churns and processing units",
        "Yogurt and curd production lines",
        "Ice cream processing equipment",
        "Milk powder spray dryers",
        "CIP cleaning systems",
        "Packaging and filling machines",
      ],
    },
    {
      id: "food",
      title: "Food Processing Equipment",
      icon: Factory,
      color: "secondary",
      description: "Specialized equipment for food product manufacturing",
      equipment: [
        "Tomato processing lines",
        "Jam and marmalade equipment",
        "Mayonnaise production systems",
        "Snack food processing units",
        "Ready-to-eat food lines",
        "Baking and cooking equipment",
        "Packaging and sealing machines",
        "Quality control instruments",
        "Material handling systems",
        "Sanitization equipment",
      ],
    },
    {
      id: "beverage",
      title: "Beverage Manufacturing Equipment",
      icon: Cog,
      color: "accent",
      description: "Complete beverage processing and packaging solutions",
      equipment: [
        "Juice extraction and processing units",
        "Carbonated beverage lines",
        "Energy drink production systems",
        "Water treatment and purification",
        "Syrup preparation equipment",
        "Carbonation systems",
        "Bottling and canning lines",
        "Labeling and packaging machines",
        "Quality testing equipment",
        "Automation and control systems",
      ],
    },
    {
      id: "automation",
      title: "Automation & Control Systems",
      icon: Zap,
      color: "tertiary",
      description: "Advanced automation solutions for process control",
      equipment: [
        "SCADA systems and HMI",
        "PLC programming and integration",
        "Process control systems",
        "Data acquisition and monitoring",
        "Remote monitoring solutions",
        "Alarm and safety systems",
        "Energy management systems",
        "Production tracking software",
        "Quality control automation",
        "Maintenance management systems",
      ],
    },
  ];

  const services = [
    {
      icon: Wrench,
      title: "Customized Machinery Solutions",
      description:
        "Equipment tailored to your specific product and process requirements",
      features: [
        "In-house customization capabilities",
        "Third-party white labeling",
        "Process-specific modifications",
        "Capacity optimization",
        "Integration with existing systems",
      ],
    },
    {
      icon: Truck,
      title: "Machinery Sourcing & Procurement",
      description:
        "Complete sourcing and procurement services for all equipment needs",
      features: [
        "Global supplier network",
        "Quality assurance and testing",
        "Cost optimization",
        "Timely delivery management",
        "Documentation and compliance",
      ],
    },
    {
      icon: Settings,
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning support",
      features: [
        "Expert installation teams",
        "Commissioning and testing",
        "Performance optimization",
        "Operator training",
        "Handover documentation",
      ],
    },
    {
      icon: Headphones,
      title: "After-Sales Support & Maintenance",
      description: "Comprehensive support and maintenance services",
      features: [
        "24/7 technical support",
        "Preventive maintenance",
        "Spare parts supply",
        "Performance monitoring",
        "Upgrade and modernization",
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

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Machinery & Equipment
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Complete supply and customization of processing machinery for
              dairy, food, and beverage industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary"
              >
                <Link href="/contact" className="flex items-center">
                  Get Equipment Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/contact">Download Catalog</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Machinery Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Equipment Categories
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Comprehensive range of processing equipment for all your
                manufacturing needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {machineryCategories.map((category, index) => (
              <ScrollReveal key={category.id} delay={index * 0.1}>
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
                            category.color
                          )} rounded-lg flex items-center justify-center`}
                        >
                          <category.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-foreground-secondary">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-1 gap-2">
                        {category.equipment.map((item, idx) => (
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

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Services
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Complete support from equipment selection to after-sales service
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-xs text-foreground-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose FBFPL for Machinery?
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Trusted partner for reliable, efficient, and cost-effective
                processing equipment
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  Quality Assurance
                </h3>
                <p className="text-sm text-foreground-secondary">
                  All equipment meets international standards and undergoes
                  rigorous quality testing
                </p>
              </MotionDiv>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary">
                  Expert Support
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Dedicated team of engineers and technicians for installation
                  and support
                </p>
              </MotionDiv>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  Customization
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Tailored solutions to meet your specific production
                  requirements and constraints
                </p>
              </MotionDiv>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Equipment Features */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Equipment Features
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Advanced features and technologies for optimal performance and
                efficiency
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-primary">
                    Energy Efficient
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground-secondary text-center">
                    Optimized for energy consumption and operational efficiency
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <CardTitle className="text-secondary">Food Safe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground-secondary text-center">
                    Compliant with food safety standards and hygiene
                    requirements
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-accent">
                    Easy Maintenance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground-secondary text-center">
                    Designed for easy maintenance and quick service access
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cog className="w-6 h-6 text-tertiary" />
                  </div>
                  <CardTitle className="text-tertiary">
                    Automated Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground-secondary text-center">
                    Advanced automation and control systems for precise
                    operation
                  </p>
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
              Ready to Upgrade Your Processing Equipment?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the right machinery for your production needs with expert
              guidance and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Get Equipment Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
