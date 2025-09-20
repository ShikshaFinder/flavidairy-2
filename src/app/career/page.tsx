"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import Height from "@/components/height";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  Building,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function CareerPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    position: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
🌟 Career Application - Flavi Dairy 🌟

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
💼 Position of Interest: ${formData.position}

Thank you for your interest in joining Flavi Dairy! We will review your application and get back to you soon.
    `.trim();

    const whatsappUrl = `https://wa.me/917202033384?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form after submission
    setFormData({
      name: "",
      phone: "",
      email: "",
      position: "",
    });
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Mechanical Engineer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2+ years",
      salary: "Competitive",
      description:
        "Install, align and commission machinery at clients' site. Conduct pre-installation checks, test and validate equipment performance.",
      requirements: [
        "Diploma/degree in mechanical, electrical or dairy technology",
        "2+ years' experience in machinery installation/commissioning",
        "PNID and plant layout skills are must",
        "Ability to read technical drawings/manuals",
        "Willingness to travel extensively",
        "Good communication and customer-handling skills",
        "Exposure to PLCs, automation and control systems",
      ],
      responsibilities: [
        "Install, align and commission machinery at clients' site",
        "Conduct pre-installation checks",
        "Test, calibrate and validate equipment performance",
        "Troubleshoot and resolve technical issues",
        "Train customer on operation, maintenance and safety",
        "Prepare reports and maintain documentation",
        "Provide after sales service",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Business Development",
      department: "Business Development",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2+ years",
      salary: "Competitive",
      description:
        "Identify and develop new business opportunities. Build and maintain strong relationships with clients.",
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "Minimum 2 years' experience in business development/sales",
        "Strong communication, negotiation, and presentation skills",
        "Ability to work independently",
        "Willingness to travel if required",
      ],
      responsibilities: [
        "Identify and develop new business opportunities",
        "Build and maintain strong relationships with clients",
        "Understand customer needs and propose suitable solutions",
        "Prepare proposals, presentations, and sales reports",
        "Coordinate with internal teams for smooth project execution",
      ],
      featured: false,
    },
    {
      id: 3,
      title: "AutoCAD Engineer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "Fresher/Entry-level",
      salary: "Competitive",
      description:
        "Create and modify technical drawings and layouts using AutoCAD and SolidWorks. Support engineering team with design and drafting requirements.",
      requirements: [
        "Proficiency in AutoCAD software (2D/3D), SolidWorks and other design tools",
        "Ability to read and understand technical drawings",
        "Good communication and teamwork skills",
        "Internship or academic project experience in CAD (Preferred)",
      ],
      responsibilities: [
        "Create and modify technical drawings and layouts using AutoCAD and SolidWorks",
        "Support engineering team with design and drafting requirements",
        "Interpret technical specifications and convert them into CAD drawings",
        "Ensure accuracy and quality in all drafting work",
        "Maintain proper documentation of drawings and revisions",
      ],
      featured: false,
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, medical check-ups, and wellness programs for you and your family",
      color: "text-red-500",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description:
        "Continuous training, skill development opportunities, and industry certifications",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths, mentorship programs, and leadership development",
      color: "text-green-500",
    },
    {
      icon: Shield,
      title: "Job Security",
      description:
        "Stable employment, performance bonuses, and long-term career stability",
      color: "text-purple-500",
    },
  ];

  const perks = [
    "Networking opportunity",
    "Transport allowance",
    "Annual bonuses",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-white via-secondary/5 to-white">
        <Height />
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary/10 text-black border-secondary/20">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Build Your Career with
              <span className="text-secondary block mt-2">
                Flavi Dairy Solutions
              </span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Join a leading dairy and food processing solutions provider and be
              part of innovative projects that shape the future of the industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black hover:text-white"
                asChild
              >
                <a
                  href={`https://wa.me/917202033384?text=${encodeURIComponent(
                    `Hi, I'm interested in career opportunities at Flavi Dairy. I would like to send my resume and discuss available positions.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Resume via WhatsApp
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Current Openings
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Explore our current job opportunities and find the perfect role
              for your career
            </p>
          </MotionDiv>

          <div className="grid gap-8">
            {jobOpenings.map((job, index) => (
              <MotionDiv
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-black mb-2 flex items-center gap-3">
                          {job.title}
                          {job.featured && (
                            <Badge className="bg-secondary/20 text-secondary border-secondary/20">
                              Featured
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-black/70">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <Building className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.experience}
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <Badge
                          variant="outline"
                          className="text-secondary border-secondary/30"
                        >
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-base text-black/70">
                      {job.description}
                    </CardDescription>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <li
                              key={reqIndex}
                              className="flex items-start gap-2 text-sm text-black/70"
                            >
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-black mb-3 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start gap-2 text-sm text-black/70"
                            >
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="text-sm text-black/70">
                          <span className="font-medium">Salary: </span>
                          {job.salary}
                        </div>
                        <Button
                          className="bg-secondary hover:bg-secondary/90 text-black border-0"
                          asChild
                        >
                          <a
                            href={`https://wa.me/917202033384?text=${encodeURIComponent(
                              `Hi, I'm interested in the ${job.title} position at Flavi Dairy. I would like to apply and discuss this opportunity.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Apply for this Position
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why Choose Flavi Dairy Solutions?
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth,
              innovation, and making a real impact in the industry
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-black">
                      {benefit.title}
                    </h3>
                    <p className="text-black/70 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Get in Touch
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Ready to join our team? Contact our HR department for more
              information
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Email Us
                  </h3>
                  <p className="text-sm text-black/70">
                    contact@flavidairysolution.com{" "}
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Call Us
                  </h3>
                  <p className="text-sm text-black/70">+91 7202033384</p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Visit Us
                  </h3>
                  <p className="text-sm text-black/70">Ahmedabad, Gujarat</p>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Get in Touch Form Section */}
      <section id="get-in-touch" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Apply Now
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Submit your application details below. Your information will be
              shared via WhatsApp, and you can follow up with your resume.
            </p>
          </MotionDiv>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-black font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    className="mt-2"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-black font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="mt-2"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-black font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="mt-2"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="position" className="text-black font-medium">
                  Position of Interest
                </Label>
                <Textarea
                  id="position"
                  placeholder="Mention the position you're interested in or describe your preferences"
                  className="mt-2"
                  rows={3}
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-black border-0"
                >
                  Submit Application via WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
