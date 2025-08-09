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
  Send,
  MessageSquare,
  Building,
  CheckCircle,
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
      description: "Navrangpura, Ahmedabad- 380014 (Gujarat, India)",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Saturday: 9:00 AM - 2:00 PM",
    },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Quick Response",
      description: "We respond within 24 hours",
    },
    {
      icon: Building,
      title: "Expert Consultation",
      description: "Free consultation with our experts",
    },
    {
      icon: CheckCircle,
      title: "Custom Solutions",
      description: "Tailored solutions for your needs",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Get in touch with our team of experts for all your dairy and food
              processing needs
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to discuss your project? Contact our team of experts
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {info.title}
                  </h3>
                  <p className="text-sm text-gray-800 mb-1 font-medium">
                    {info.value}
                  </p>
                  {info.secondary && (
                    <p className="text-sm text-gray-800 mb-1 font-medium">
                      {info.secondary}
                    </p>
                  )}
                  <p className="text-xs text-gray-600">{info.description}</p>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Features */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Fill out the form below and our team will get back to you
                  within 24 hours. We're here to help you with all your dairy
                  and food processing requirements.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 rounded-lg bg-white shadow-sm border border-gray-200"
                    >
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Contact Form */}
            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-black">
                    Contact Form
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Tell us about your project requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-black font-medium"
                        >
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
                        <Label
                          htmlFor="phone"
                          className="text-black font-medium"
                        >
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
                      <Label htmlFor="email" className="text-black font-medium">
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
                      <Label
                        htmlFor="purpose"
                        className="text-black font-medium"
                      >
                        Objective/Purpose *
                      </Label>
                      <select
                        id="purpose"
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
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
                      <Label
                        htmlFor="message"
                        className="text-black font-medium"
                      >
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
                      className="w-full bg-secondary hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
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

      {/* Office Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Ahmedabad, our office is easily
                accessible
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-black">
                    Office Address
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-black">
                          Flavi Dairy Food Solutions
                        </p>
                        <p className="text-sm text-gray-700">
                          403, 4th Floor, Samruddhi Complex
                        </p>
                        <p className="text-sm text-gray-700">
                          opp old high court, b/h Navdeep Building
                        </p>
                        <p className="text-sm text-gray-700">
                          Navrangpura, Ahmedabad- 380014
                        </p>
                        <p className="text-sm text-gray-700">Gujarat, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4 text-black">
                    Contact Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-black">Phone</p>
                        <p className="text-sm text-gray-800 font-semibold">
                          +91 7202033384
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-black">Email</p>
                        <p className="text-sm text-gray-800 font-semibold">
                          contact@flavidairysolution.com
                        </p>
                        <p className="text-sm text-gray-800 font-semibold">
                          founder@flavidairysolution.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-8 text-center border border-gray-200">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">
                  Office Location
                </h3>
                <p className="text-gray-700 mb-6">
                  Our office is located in the heart of Ahmedabad, easily
                  accessible from all parts of the city. We welcome visitors
                  during business hours for consultations and project
                  discussions.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-black">Business Hours:</p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-multi">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Let our experienced team help you transform your dairy and food
              processing operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-secondary hover:bg-gray-100 font-semibold px-8 py-3"
              >
                <a href="tel:+917202033384" className="flex items-center">
                  Call Now
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold px-8 py-3"
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
