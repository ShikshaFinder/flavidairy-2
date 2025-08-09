"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  Factory,
  Users,
  Target,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
    { icon: Award, label: "Industry Awards", value: "15+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards of quality in all our products and services, ensuring customer satisfaction and safety.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuously innovating and adopting latest technologies to provide cutting-edge solutions for our clients.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Our customers are at the heart of everything we do, providing personalized solutions and exceptional support.",
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description:
        "Committed to sustainable practices and environmentally friendly solutions in all our operations.",
    },
  ];

  const team = [
    {
      name: "Rajesh Patel",
      role: "Founder & CEO",
      experience: "25+ years",
      expertise: "Dairy Processing, Business Strategy",
      image: "/images/team/ceo.jpg",
      isFounder: true,
      founderInfo:
        "Founded Flavi Dairy Food Solutions in 2004 with a vision to revolutionize dairy and food processing in India. With over 25 years of experience in the industry, Mr. Patel has been instrumental in establishing the company as a leading solutions provider.",
    },
    {
      name: "Priya Sharma",
      role: "Technical Director",
      experience: "18+ years",
      expertise: "Process Engineering, Automation",
      image: "/images/team/technical-director.jpg",
      isFounder: false,
    },
    {
      name: "Amit Kumar",
      role: "Operations Manager",
      experience: "15+ years",
      expertise: "Project Management, Quality Control",
      image: "/images/team/operations-manager.jpg",
      isFounder: false,
    },
    {
      name: "Sneha Reddy",
      role: "Head of Sales",
      experience: "12+ years",
      expertise: "Client Relations, Market Development",
      image: "/images/team/sales-head.jpg",
      isFounder: false,
    },
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
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Leading Dairy & Food
              <span className="text-secondary"> Processing Solutions</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              With over 20 years of experience, we are the trusted partner for
              dairy and food processing equipment, automation solutions, and
              consultancy services across India.
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

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Our Story
              </h2>
              <div className="space-y-4 text-black/70">
                <p>
                  Founded in 2004, Flavi Dairy Food Solutions began with a
                  simple mission: to provide reliable and efficient processing
                  equipment for the dairy and food industry in India.
                </p>
                <p>
                  What started as a small team of engineers has grown into a
                  comprehensive solutions provider, serving clients across the
                  country with cutting-edge technology and exceptional service.
                </p>
                <p>
                  Today, we are proud to be one of the leading suppliers of
                  dairy and food processing equipment, with a strong focus on
                  quality, innovation, and customer satisfaction.
                </p>
                <p>
                  Our leadership team, led by Mr. Rajesh Patel, brings together
                  decades of experience in dairy and food processing, ensuring
                  that every project meets the highest standards of excellence
                  and innovation.
                </p>
              </div>
              <div className="mt-8">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-black border-0"
                  asChild
                >
                  <Link href="/contact">
                    <span className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Factory className="w-16 h-16 text-secondary" />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Values
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              The principles that guide our business and relationships with
              clients
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {value.title}
                        </h3>
                        <p className="text-black/70">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Leadership Team
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering excellence in
              every project, led by our founder Mr. Rajesh Patel
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="aspect-square bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg font-semibold text-black">
                      {member.name}
                    </CardTitle>
                    <Badge
                      className={`${
                        member.isFounder
                          ? "bg-primary/10 text-primary border-primary/20"
                          : "bg-secondary/10 text-black border-secondary/20"
                      }`}
                    >
                      {member.role}
                    </Badge>
                    {member.isFounder && (
                      <Badge className="bg-green-100 text-green-800 border-green-200 mt-1">
                        Founder
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <p className="text-sm text-black/70">
                      <span className="font-medium">Experience:</span>{" "}
                      {member.experience}
                    </p>
                    <p className="text-sm text-black/70">
                      <span className="font-medium">Expertise:</span>{" "}
                      {member.expertise}
                    </p>
                    {member.isFounder && member.founderInfo && (
                      <div className="mt-3 p-3 bg-primary/5 rounded-lg">
                        <p className="text-xs text-black/80 leading-relaxed">
                          {member.founderInfo}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Get in Touch
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Ready to discuss your processing needs? Contact our team for
                expert guidance and customized solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-black">+91 7202033384</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-black">
                    contact@flavidairysolution.com
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1" />
                  <span className="text-black">
                    403, 4th Floor, Samruddhi Complex, Ahmedabad-380014,
                    Gujarat, India
                  </span>
                </div>
              </div>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "20+ years of industry experience",
                    "Complete turnkey solutions",
                    "Quality certified equipment",
                    "24/7 technical support",
                    "Customized solutions",
                    "Competitive pricing",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-black/70">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
