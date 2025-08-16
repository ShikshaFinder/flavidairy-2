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
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  Mail,
  Phone,
  Building,
  Star,
  Award,
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
    "Flexible working hours",
    "Work from home options",
    "Annual performance bonuses",
    "Team building activities",
    "Free meals and snacks",
    "Transportation allowance",
    "Festival celebrations",
    "Employee recognition programs",
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
                <a href="#openings" className="flex items-center gap-2">
                  View Open Positions
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

          {/* Perks Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-black">
              Additional Perks
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {perks.map((perk, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-black/80 text-sm">{perk}</span>
                </div>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 bg-white">
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
              Explore exciting career opportunities and join our dynamic team
            </p>
          </MotionDiv>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <MotionDiv
                key={job.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200 relative">
                  {job.featured && (
                    <div className="absolute -top-2 -right-2">
                      <Badge className="bg-secondary text-black border-0">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <CardTitle className="text-xl font-bold text-black mb-1">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-black/60">
                          {job.department} • {job.location}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-secondary border-secondary/20"
                      >
                        {job.type}
                      </Badge>
                    </div>

                    <p className="text-black/70 mb-4 text-sm leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-black/60">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-6">
                      <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        Key Requirements:
                      </h4>
                      <div className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-black/70 leading-relaxed">
                              {req}
                            </span>
                          </div>
                        ))}
                        {job.requirements.length > 3 && (
                          <div className="text-sm text-black/50 italic">
                            +{job.requirements.length - 3} more requirements
                          </div>
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-secondary hover:bg-secondary/90 text-black border-0"
                      asChild
                    >
                      <a
                        href={`https://wa.me/917202033384?text=${encodeURIComponent(
                          `Hi, I'm interested in applying for the ${job.title} position (${job.department}) at Flavi Dairy. Please share more details about the application process and next steps. My experience: ${job.experience}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Apply Now via WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Simple Application Process
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Our streamlined hiring process ensures you have a smooth
              experience
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Send your resume via WhatsApp or email",
                icon: Mail,
              },
              {
                step: "02",
                title: "Review",
                description: "Initial screening and profile assessment",
                icon: Users,
              },
              {
                step: "03",
                title: "Interview",
                description: "Technical and HR interview rounds",
                icon: Briefcase,
              },
              {
                step: "04",
                title: "Welcome",
                description: "Onboarding and joining formalities",
                icon: CheckCircle,
              },
            ].map((process, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <process.icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-black">
                    {process.title}
                  </h3>
                  <p className="text-sm text-black/70">{process.description}</p>
                </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join our team and be part of the future of dairy and food
              processing technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-white border-0"
                asChild
              >
                <a
                  href={`https://wa.me/917202033384?text=${encodeURIComponent(
                    `Hi, I'm excited to start my journey with Flavi Dairy. I would like to send my resume and learn about current career opportunities in dairy and food processing.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Send Your Resume
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
                asChild
              >
                <a
                  href={`https://wa.me/917202033384?text=${encodeURIComponent(
                    `Hi, I would like to schedule a call to discuss career opportunities at Flavi Dairy and learn more about your company culture.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Call
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
