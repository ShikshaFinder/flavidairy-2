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
  Milk,
  Apple,
  Coffee,
  Carrot,
  Settings,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      id: "dairy",
      title: "Dairy Processing",
      icon: Milk,
      color: "primary",
      description:
        "End-to-end dairy processing solutions from milk reception to final packaging",
      features: [
        "Milk reception, clarification & storage",
        "Pasteurization & homogenization",
        "Curd, yogurt & cheese production",
        "Butter & ghee processing",
        "Ice cream & milk powder plants",
        "Automated CIP systems",
      ],
      products: [
        "Raw milk, bottled milk, Flavoured milk",
        "Powder Plant (SMP, WMP, Whey Powder)",
        "Paneer, Dahi, Yogurt, Lassi, Kefir",
        "Butter, Ghee, Cream, Buttermilk",
        "Sweetened Condensed Milk",
        "Dairy based sweets & Ice Cream",
        "Cheese (Cheddar, Mozzarella, Feta, etc.)",
      ],
      strengths: [
        "Energy-efficient processing solutions",
        "Compliant with 3A, EHEDG standards",
        "Real-time monitoring & SCADA integration",
        "Preventive maintenance alerts",
        "Turnkey project execution",
      ],
    },
    {
      id: "food",
      title: "Food Processing",
      icon: Apple,
      color: "secondary",
      description:
        "Innovative food processing equipment for traditional and modern food products",
      features: [
        "RTE, RTH & RTS food products",
        "Tomato-based products processing",
        "Jams and marmalade preparation",
        "Mayonnaise and emulsified products",
        "Traditional Indian snacks",
        "Non-dairy whipped cream",
      ],
      products: [
        "Ready-to-Eat, Ready-to-Heat, Ready-to-Serve",
        "Ketchup, Sauces, and Gravies",
        "Puran Poli Processing Line",
        "Paratha Production Line",
        "French Fries & Potato Chips",
        "Kachori, Samosa, Gathiya",
        "Custom food processing systems",
      ],
      strengths: [
        "Precision engineering & quality checks",
        "Premium-grade materials",
        "Fully customizable solutions",
        "Latest technology integration",
        "Superior food safety standards",
      ],
    },
    {
      id: "beverage",
      title: "Beverage Manufacturing",
      icon: Coffee,
      color: "accent",
      description:
        "Advanced beverage processing solutions for all types of drinks",
      features: [
        "RTS and RTD beverage production",
        "Carbonated soft drinks (CSD)",
        "Sparkling fruit-based drinks",
        "Energy drinks & tonic waters",
        "Functional beverages",
        "Recipe management systems",
      ],
      products: [
        "Ready-to-Serve (RTS) beverages",
        "Ready-to-Drink (RTD) beverages",
        "Carbonated Soft Beverages (CSD)",
        "Sparkling Fruit-Based Drinks (CFD)",
        "Energy Drinks & Tonic Waters",
        "Functional Beverages",
      ],
      strengths: [
        "Modular to fully integrated lines",
        "Automated & hygienic processing",
        "Energy-efficient systems",
        "Global standards compliance",
        "Seamless packaging integration",
      ],
    },
    {
      id: "fruits-vegetables",
      title: "Fruits & Vegetables Processing",
      icon: Carrot,
      color: "tertiary",
      description:
        "Comprehensive solutions for preserving natural flavor, color, and nutrition",
      features: [
        "Tomato processing (puree, paste, ketchup)",
        "Mango pulp, puree & nectar",
        "Coconut water & milk processing",
        "Tropical fruits processing",
        "Potato flakes, granules & starch",
        "Multi-fruit plant integration",
      ],
      products: [
        "Tomato puree, paste, ketchup, sauces",
        "Mango pulp, puree, nectar, juice",
        "Coconut water, milk, cream, VCO",
        "Banana, guava, pineapple, papaya",
        "Potato flakes, granules, starch",
        "French fries & chips production",
      ],
      strengths: [
        "Natural flavor & color preservation",
        "High productivity & hygiene",
        "Aseptic filling for export",
        "Spray drying capabilities",
        "Flexible multi-fruit design",
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
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Comprehensive processing solutions for dairy, food, beverage, and
              fruits & vegetables industries
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.id} delay={index * 0.2}>
                <MotionDiv
                  className="h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-6">
                      <div
                        className={`w-16 h-16 ${getColorClasses(
                          industry.color
                        )} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <industry.icon className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {industry.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-foreground-secondary">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Settings className="w-5 h-5 mr-2 text-primary" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {industry.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-foreground-secondary">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Products */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-accent" />
                          Products We Handle
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.products.slice(0, 4).map((product, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {product}
                            </Badge>
                          ))}
                          {industry.products.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{industry.products.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Strengths */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-tertiary" />
                          Our Strengths
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {industry.strengths.map((strength, idx) => (
                            <div key={idx} className="flex items-start">
                              <Shield className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-foreground-secondary">
                                {strength}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Button
                          className={`w-full bg-gradient-${
                            industry.color
                          } hover:bg-gradient-${
                            industry.color === "primary"
                              ? "secondary"
                              : industry.color === "secondary"
                              ? "accent"
                              : industry.color === "accent"
                              ? "tertiary"
                              : "primary"
                          }`}
                        >
                          <Link href="/contact" className="flex items-center">
                            Get {industry.title} Solutions
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Flavi Dairy for Your Industry?
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                With 20+ years of experience and 100+ projects commissioned, we
                deliver excellence across all industries
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Turnkey Solutions
                </h3>
                <p className="text-foreground-secondary">
                  Complete project execution from concept to commissioning with
                  minimal client involvement
                </p>
              </MotionDiv>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Automation & Efficiency
                </h3>
                <p className="text-foreground-secondary">
                  Advanced automation systems with SCADA integration for optimal
                  performance and traceability
                </p>
              </MotionDiv>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <MotionDiv
                className="text-center p-6 rounded-xl bg-white shadow-lg hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Quality & Compliance
                </h3>
                <p className="text-foreground-secondary">
                  Food-safe systems compliant with international standards like
                  FSSAI, ISO, HACCP
                </p>
              </MotionDiv>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-multi">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Processing Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experts help you design and implement the perfect
              processing solution for your industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
