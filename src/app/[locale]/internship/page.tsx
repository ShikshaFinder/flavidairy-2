"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MotionDiv } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cpu,
  Zap,
  Users,
  BookOpen,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
} from "lucide-react";

export default function InternshipPage() {
  const internshipAreas = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Work on embedded systems, IoT applications, and automation software",
      skills: ["C/C++", "Python", "Embedded Linux", "IoT Protocols"],
    },
    {
      icon: Cpu,
      title: "Hardware Design",
      description:
        "Design and develop PCB layouts, circuit schematics, and hardware prototypes",
      skills: ["PCB Design", "Circuit Design", "Prototyping", "Testing"],
    },
    {
      icon: Zap,
      title: "Automation & IoT",
      description:
        "Develop smart automation solutions and IoT integration systems",
      skills: ["SCADA", "PLC Programming", "IoT Integration", "Data Analytics"],
    },
    {
      icon: Users,
      title: "Project Management",
      description:
        "Learn project coordination, client communication, and team collaboration",
      skills: [
        "Agile",
        "Client Management",
        "Documentation",
        "Team Leadership",
      ],
    },
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Learning & Development",
      description:
        "Access to latest technologies and mentorship from industry experts",
    },
    {
      icon: Briefcase,
      title: "Real Project Experience",
      description: "Work on actual client projects and build your portfolio",
    },
    {
      icon: Users,
      title: "Networking",
      description:
        "Connect with professionals and build industry relationships",
    },
    {
      icon: DollarSign,
      title: "Competitive Stipend",
      description:
        "Receive a competitive stipend based on your skills and performance",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-secondary/5 to-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary/10 text-black border-secondary/20">
              Internship Program
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Join Our Team as an
              <span className="text-secondary"> Intern</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Gain hands-on experience in dairy and food processing technology.
              Work on real projects, learn from experts, and kickstart your
              career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-minimal text-black" asChild>
                <a href="mailto:contact@flavidairysolution.com?subject=Internship Application">
                  Apply Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black hover:text-white"
                asChild
              >
                <a href="#details">Learn More</a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Internship Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Areas of Internship
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Choose from various domains and work on cutting-edge technology
              projects
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internshipAreas.map((area, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-neutral">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <area.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-black">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-black/70 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {area.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs border-neutral text-black"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Why Intern With Us?
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Discover the benefits of joining our internship program
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-neutral">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-black mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-black/70">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Ready to Apply?
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Get in touch with us to start your internship journey
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border border-neutral">
                <CardHeader>
                  <CardTitle className="text-black">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">
                      contact@flavidairysolution.com
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">+91 7202033384</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">
                      403, 4th Floor, 'Samruddhi', Opp. Old High Court, B/H
                      Navdeep Bldg., Navrangpura, Ahmedabad-380014
                    </p>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full border border-neutral">
                <CardHeader>
                  <CardTitle className="text-black">
                    Internship Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">
                      Duration: 3-6 months
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">
                      Full-time (40 hours/week)
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">Competitive stipend</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-secondary" />
                    <p className="text-sm text-black/70">Mentorship provided</p>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          <MotionDiv
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="btn-minimal text-black" asChild>
              <a href="mailto:contact@flavidairysolution.com?subject=Internship Application">
                Apply for Internship
              </a>
            </Button>
          </MotionDiv>
        </div>
      </section>
      <Footer />
    </div>
  );
}
