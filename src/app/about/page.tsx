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
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      description:
        "We do what we say—honestly, ethically, and transparently—no shortcuts, no compromises.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Commitment to Quality",
      description:
        "From design to delivery, we maintain the highest standards to ensure reliable, food-safe systems every time.",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Client-Centric Thinking",
      description:
        "We treat every project like a partnership, listening closely and acting in our clients' best interest—always.",
      color: "accent",
    },
    {
      icon: TrendingUp,
      title: "Accountability at Every Step",
      description:
        "We take ownership of outcomes, ensuring clarity, timely delivery, and performance you can count on.",
      color: "tertiary",
    },
    {
      icon: Heart,
      title: "Long-Term Reliability",
      description:
        "We don't just build systems—we build relationships, offering continued support well beyond commissioning.",
      color: "primary",
    },
    {
      icon: Target,
      title: "Continuous Improvement",
      description:
        "We constantly evolve—adapting technologies, processes, and ideas to stay ahead of your expectations.",
      color: "secondary",
    },
  ];

  const services = [
    {
      domain: "Consultation & Turnkey Execution",
      coreFocus: "Strategy, design, project management, commissioning",
      keyValue: "End-to-end delivery with minimal client involvement",
    },
    {
      domain: "Machinery Supply & Automation",
      coreFocus: "Equipment supply, operational automation, SCADA/PLC",
      keyValue: "High performance, compliance, efficiency, traceability",
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
              About Flavi Dairy Food Solutions
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              With over 20 years of proven experience, we are a trusted partner
              in engineering and automation for the dairy and food production
              sector
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  With over 20 years of proven experience, we have helped build
                  a strong reputation as a trusted partner in the field of
                  engineering and automation for the dairy and food production
                  sector. Our commitment to quality, integrity, and innovation
                  has positioned us as a reliable solutions provider for
                  businesses seeking sustainable growth and operational
                  excellence.
                </p>
                <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
                  We work closely with clients not just to design strong systems
                  but also to take them through strategic consultation and new
                  product development, ensuring their offerings meet evolving
                  market demands and regulatory standards.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
                    <div className="text-3xl font-bold text-primary mb-2">
                      20+
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-secondary/10">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      100+
                    </div>
                    <div className="text-sm text-foreground-secondary">
                      Projects Commissioned
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <MotionDiv
                    key={index}
                    className="p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg hover-lift"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {service.domain}
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-foreground">
                          Core Focus:
                        </span>
                        <span className="text-foreground-secondary ml-2">
                          {service.coreFocus}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Key Value:
                        </span>
                        <span className="text-foreground-secondary ml-2">
                          {service.keyValue}
                        </span>
                      </div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary leading-relaxed">
                    To deliver innovative and reliable engineering solutions for
                    the dairy and food processing industry. We empower clients
                    through expert consultation, automation, and turnkey
                    execution. Our goal is to drive efficiency, compliance, and
                    long-term success. Empowering rural development through
                    Value addition of Agro-Food Resources in Sustainable ways.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground-secondary leading-relaxed">
                    We aim to set new benchmarks in quality, efficiency, and
                    sustainability. Our vision is to be the first choice
                    globally for future-ready dairy and food product
                    entrepreneurs through innovation and engineering excellence.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Core Values
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`w-12 h-12 ${getColorClasses(
                          value.color
                        )} rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <value.icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground-secondary text-center leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Choose Flavi Dairy?
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Our commitment to excellence and innovation sets us apart
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
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Proven Track Record
                </h3>
                <p className="text-sm text-foreground-secondary">
                  20+ years of experience with 100+ successful projects across
                  various industries
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
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Quality Assurance
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Commitment to highest standards ensuring reliable, food-safe
                  systems every time
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
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Client Partnership
                </h3>
                <p className="text-sm text-foreground-secondary">
                  We treat every project as a partnership, acting in our
                  clients' best interest always
                </p>
              </MotionDiv>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Ready to discuss your project? Contact our team of experts
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Call Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  +91 7202033384
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Email Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  contact@flavidairysolution.com
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Visit Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  403, 4th Floor, Samruddhi Complex, Ahmedabad-380014
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-multi">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you transform your dairy and food
              processing operations
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
