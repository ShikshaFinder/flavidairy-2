"use client";

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
  const jobOpenings = [
    {
      id: 1,
      title: "Process Engineer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8-12 LPA",
      description:
        "Design and optimize dairy and food processing systems with cutting-edge technology",
      requirements: [
        "B.Tech/M.Tech in Food Technology or Chemical Engineering",
        "Experience in dairy/food processing equipment design",
        "Knowledge of HACCP, FSSAI, and ISO standards",
        "Proficiency in AutoCAD and process simulation software",
        "Strong analytical and problem-solving skills",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Automation Engineer",
      department: "Automation",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹6-10 LPA",
      description:
        "Develop and implement automation solutions for modern processing plants",
      requirements: [
        "B.Tech in Electronics/Instrumentation Engineering",
        "Experience with PLC, SCADA, and HMI systems",
        "Knowledge of industrial communication protocols",
        "Experience in dairy/food industry automation",
        "Programming skills in ladder logic and structured text",
      ],
      featured: false,
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Project Management",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹12-18 LPA",
      description:
        "Lead turnkey projects from concept to commissioning with excellence",
      requirements: [
        "B.Tech/M.Tech in Mechanical/Chemical Engineering",
        "PMP certification preferred",
        "Experience in dairy/food processing projects",
        "Strong leadership and communication skills",
        "Project management tools proficiency",
      ],
      featured: true,
    },
    {
      id: 4,
      title: "Sales Engineer",
      department: "Sales & Marketing",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹5-8 LPA + Incentives",
      description:
        "Drive sales of processing equipment and build lasting client relationships",
      requirements: [
        "B.Tech in Mechanical/Food Technology",
        "Experience in B2B sales in food processing industry",
        "Strong technical knowledge and presentation skills",
        "Willingness to travel extensively",
        "Excellent communication and negotiation skills",
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
              <span className="text-secondary block mt-2">Flavi Dairy</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Join a leading dairy and food processing solutions provider and be
              part of innovative projects that shape the future of the industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <a href="#get-in-touch" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
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
              Why Choose Flavi Dairy?
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

      {/* Build Career PDF Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Build Your Career
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto mb-8">
              Download our comprehensive career guide and opportunities brochure
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-black border-0"
              asChild
            >
              <a
                href="/career-guide.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Download Career Guide PDF
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </MotionDiv>
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
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    Email Us
                  </h3>
                  <p className="text-sm text-black/70">
                    careers@flavidairy.com
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
                    <Phone className="w-6 h-6 text-secondary" />
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
                    <Building className="w-6 h-6 text-secondary" />
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
              Get in Touch
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Ready to join our team? Submit your details and resume below
            </p>
          </MotionDiv>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="career-name" className="text-black font-medium">
                    Career Name
                  </Label>
                  <Input
                    id="career-name"
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone-no" className="text-black font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone-no"
                    placeholder="Enter your phone number"
                    className="mt-2"
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
                />
              </div>

              <div>
                <Label htmlFor="shortlist" className="text-black font-medium">
                  Position of Interest / Shortlist
                </Label>
                <Textarea
                  id="shortlist"
                  placeholder="Mention the position you're interested in or describe your preferences"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="resume" className="text-black font-medium">
                  Upload Resume
                </Label>
                <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="space-y-2">
                    <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div>
                      <Button variant="outline" className="mb-2">
                        Choose File
                      </Button>
                      <p className="text-sm text-gray-500">
                        Upload your resume (PDF, DOC, DOCX - Max 5MB)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-black border-0"
                >
                  Submit Application
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
