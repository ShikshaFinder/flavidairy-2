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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MotionDiv } from "@/components/ui/motion";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageSquare,
  Building,
} from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7202033384",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@flavidairysolution.com",
      description: "Send us an email anytime",
      secondary: "founder@flavidairysolution.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "403, 4th Floor, Samruddhi Complex",
      description:
        "opp old high court, b/h Navdeep Building, Navrangpura, Ahmedabad- 380014 (Gujarat, India)",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Get in touch with our team of experts for all your dairy and food
              processing needs
            </p>
          </ScrollReveal>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg hover-lift"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {info.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary mb-1">
                    {info.value}
                  </p>
                  {info.secondary && (
                    <p className="text-sm text-foreground-secondary mb-1">
                      {info.secondary}
                    </p>
                  )}
                  <p className="text-xs text-foreground-secondary">
                    {info.description}
                  </p>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Send Us a Message
                </h2>
                <p className="text-lg text-foreground-secondary mb-8 leading-relaxed">
                  Fill out the form below and our team will get back to you
                  within 24 hours. We're here to help you with all your dairy
                  and food processing requirements.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Quick Response
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                      <Building className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Expert Consultation
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        Free consultation with our experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 rounded-lg bg-white shadow-sm">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Send className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Custom Solutions
                      </h4>
                      <p className="text-sm text-foreground-secondary">
                        Tailored solutions for your needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Contact Form
                  </CardTitle>
                  <CardDescription className="text-foreground-secondary">
                    Tell us about your project requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="purpose" className="text-foreground">
                        Objective/Purpose *
                      </Label>
                      <select
                        id="purpose"
                        className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                        required
                      >
                        <option value="">Select your purpose</option>
                        <option value="dairy-processing">
                          Dairy Processing Equipment
                        </option>
                        <option value="food-processing">
                          Food Processing Equipment
                        </option>
                        <option value="beverage-manufacturing">
                          Beverage Manufacturing
                        </option>
                        <option value="fruits-vegetables">
                          Fruits & Vegetables Processing
                        </option>
                        <option value="consultancy">
                          Consultancy Services
                        </option>
                        <option value="turnkey-project">Turnkey Project</option>
                        <option value="automation">Automation Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="mt-1 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-primary hover:bg-gradient-secondary"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Visit Our Office
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Located in the heart of Ahmedabad, our office is easily
                accessible
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Office Address
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">
                          Flavi Dairy Food Solutions
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          403, 4th Floor, Samruddhi Complex
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          opp old high court, b/h Navdeep Building
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          Navrangpura, Ahmedabad- 380014
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Contact Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-sm text-foreground-secondary">
                          +91 7202033384
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-foreground-secondary">
                          contact@flavidairysolution.com
                        </p>
                        <p className="text-sm text-foreground-secondary">
                          founder@flavidairysolution.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Office Location
                </h3>
                <p className="text-foreground-secondary mb-6">
                  Our office is located in the heart of Ahmedabad, easily
                  accessible from all parts of the city. We welcome visitors
                  during business hours for consultations and project
                  discussions.
                </p>
                <div className="space-y-2 text-sm text-foreground-secondary">
                  <p>
                    <strong>Business Hours:</strong>
                  </p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
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
                <a href="tel:+917202033384" className="flex items-center">
                  Call Now
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a
                  href="mailto:contact@flavidairysolution.com"
                  className="flex items-center"
                >
                  Send Email
                  <Mail className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
