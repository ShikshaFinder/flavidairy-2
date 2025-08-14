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
} from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Process Engineer",
      department: "Engineering",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "3-5 years",
      description: "Design and optimize dairy and food processing systems",
      requirements: [
        "B.Tech/M.Tech in Food Technology or Chemical Engineering",
        "Experience in dairy/food processing equipment design",
        "Knowledge of HACCP, FSSAI, and ISO standards",
        "Proficiency in AutoCAD and process simulation software",
      ],
    },
    {
      id: 2,
      title: "Automation Engineer",
      department: "Automation",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Develop and implement automation solutions for processing plants",
      requirements: [
        "B.Tech in Electronics/Instrumentation Engineering",
        "Experience with PLC, SCADA, and HMI systems",
        "Knowledge of industrial communication protocols",
        "Experience in dairy/food industry automation",
      ],
    },
    {
      id: 3,
      title: "Project Manager",
      department: "Project Management",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead turnkey projects from concept to commissioning",
      requirements: [
        "B.Tech/M.Tech in Mechanical/Chemical Engineering",
        "PMP certification preferred",
        "Experience in dairy/food processing projects",
        "Strong leadership and communication skills",
      ],
    },
    {
      id: 4,
      title: "Sales Engineer",
      department: "Sales & Marketing",
      location: "Multiple Locations",
      type: "Full-time",
      experience: "2-4 years",
      description: "Drive sales of processing equipment and solutions",
      requirements: [
        "B.Tech in Mechanical/Food Technology",
        "Experience in B2B sales in food processing industry",
        "Strong technical knowledge and presentation skills",
        "Willingness to travel extensively",
      ],
    },
    {
      id: 5,
      title: "Quality Control Specialist",
      department: "Quality Assurance",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Ensure quality standards in equipment manufacturing and processes",
      requirements: [
        "B.Tech in Food Technology or related field",
        "Experience in quality control and food safety",
        "Knowledge of FSSAI, ISO, and HACCP standards",
        "Attention to detail and analytical skills",
      ],
    },
    {
      id: 6,
      title: "R&D Engineer",
      department: "Research & Development",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      experience: "3-5 years",
      description: "Develop innovative processing solutions and new products",
      requirements: [
        "M.Tech/PhD in Food Technology or Chemical Engineering",
        "Experience in food product development",
        "Knowledge of food processing technologies",
        "Innovative thinking and problem-solving skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous training and skill development opportunities",
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative and supportive work culture",
    },
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Clear career progression and advancement opportunities",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and innovative solutions",
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do",
    },
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards",
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and mutual support",
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
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              Build your career with a leading dairy and food processing
              solutions provider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-secondary"
              >
                <Link href="#openings" className="flex items-center">
                  View Openings
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/contact">Send Resume</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Why Join Flavi Dairy?
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Be part of a team that's transforming the dairy and food
                processing industry
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <MotionDiv
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-background-secondary to-background-tertiary shadow-lg hover-lift"
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

      {/* Company Values */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Our Values
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                The principles that guide our work and shape our culture
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="shadow-lg hover-lift">
                  <CardHeader className="text-center">
                    <CardTitle className="text-primary">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground-secondary text-center">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Current Openings
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Explore exciting career opportunities in dairy and food
                processing
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.1}>
                <MotionDiv
                  className="h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-foreground">
                            {job.title}
                          </CardTitle>
                          <CardDescription className="text-foreground-secondary">
                            {job.department} • {job.location}
                          </CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-primary border-primary"
                        >
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-foreground-secondary mb-4">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-foreground-secondary">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">
                          Requirements:
                        </h4>
                        <div className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-sm text-foreground-secondary">
                                {req}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:bg-gradient-secondary">
                        <Link href="/contact" className="flex items-center">
                          Apply Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Internship & Training Programs
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Building the next generation of food processing professionals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="shadow-lg hover-lift h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Summer Internship</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• 3-6 months program</li>
                    <li>• Hands-on experience in dairy processing</li>
                    <li>• Mentorship from industry experts</li>
                    <li>• Certificate of completion</li>
                    <li>• Potential for full-time conversion</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg hover-lift h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Graduate Trainee Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• 12-month comprehensive training</li>
                    <li>• Rotation across departments</li>
                    <li>• Project-based learning</li>
                    <li>• Industry certifications</li>
                    <li>• Fast-track career progression</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="shadow-lg hover-lift h-full">
                <CardHeader>
                  <CardTitle className="text-primary">Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-foreground-secondary">
                    <li>• Technical skill workshops</li>
                    <li>• Industry best practices training</li>
                    <li>• Certification programs</li>
                    <li>• Professional development courses</li>
                    <li>• Leadership development</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Application Process
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Simple and transparent hiring process
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Send your resume and cover letter",
              },
              {
                step: "02", 
                title: "Initial Screening",
                description: "HR review and phone screening",
              },
              {
                step: "03",
                title: "Technical Interview",
                description: "Technical assessment with team",
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Final round with leadership team",
              },
            ].map((process, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {process.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary">
                    {process.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-background-tertiary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Get in Touch
              </h2>
              <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
                Ready to join our team? Contact us for more information about
                career opportunities
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Email Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  careers@flavidairysolution.com
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Call Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  +91 7202033384
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="text-center p-6 rounded-xl bg-white shadow-lg">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Visit Us
                </h3>
                <p className="text-sm text-foreground-secondary">
                  Ahmedabad, Gujarat
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team and be part of the future of dairy and food
              processing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Link href="/contact" className="flex items-center">
                  Send Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
