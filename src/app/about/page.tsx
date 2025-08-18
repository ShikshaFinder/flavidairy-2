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
  Droplets,
  Package,
  Filter,
  Leaf,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { icon: Clock, label: "Years of Experience", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "2500+" },
    { icon: Target, label: "Projects Completed", value: "1000+" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description:
        "We do what we say—honestly, ethically, and transparently—no shortcuts, no compromises.",
    },
    {
      icon: Award,
      title: "Commitment to Quality",
      description:
        "From design to delivery, we maintain the highest standards to ensure reliable, food-safe systems every time.",
    },
    {
      icon: Heart,
      title: "Client-Centric Thinking",
      description:
        "We treat every project like a partnership, listening closely and acting in our clients' best interest—always.",
    },
    {
      icon: CheckCircle,
      title: "Accountability at Every Step",
      description:
        "We take ownership of outcomes, ensuring clarity, timely delivery, and performance you can count on.",
    },
    {
      icon: Clock,
      title: "Long-Term Reliability",
      description:
        "We don't just build systems—we build relationships, offering continued support well beyond commissioning.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "We constantly evolve—adapting technologies, processes, and ideas to stay ahead of your expectations.",
    },
  ];

  const team = [
    {
      name: "Mr. Kirit Patel",
      role: "CEO, Flavi Dairy Solutions",
      education:
        "Bachelor of Technology in Dairy Technology from Anand Agricultural University, Anand. 2000-04.",
      experience: "20+ years",
      expertise: "Dairy Processing, Consultancy Services",
      image: "/kirit.png",
      isFounder: true,
      workExperience: [
        "Amul: 2004-2008 in the Cheese & Paneer",
        "Jain Dairy: 2008-2009 as Plant Head for Milk, Paneer, Cheese, Fermented Milks, Sweets",
        "Siddharth Milk Foods: 2009-2010 in Cheese",
        "Flavi Dairy Solutions: Since 2010 as Founder & CEO for Consultancy Services",
      ],
      achievements: [
        "Torch Bearer & Role Model for Young Consultants against Retired Staff as Consultants",
        "Huge Network across the globe",
        "Known for Challenging Status Quo in the Dairy Operations",
        "3 Patents on Paneer related fields",
      ],
    },
    {
      name: "Dr. Hasmukh Patel",
      role: "Director, Flavi Dairy Solutions & President, US Dairy and Foods Consulting LLC",
      education:
        "Ph.D (Dairy Technology) from Massey University, New Zealand; B.Tech. (Dairy Technology) from Anand Agricultural University, Anand (Gujarat)",
      experience: "20+ years",
      expertise: "R&D, Global Dairy Operations, Academia",
      image: "/hasmukh.png",
      isFounder: false,
      workExperience: [
        "Sr. Director, Global R&D, Mengniu Dairy Group, Hong Kong",
        "Vice-President, R&D, Whitehall Specialties Inc., WI",
        "Technical Director, R&D, Dairy Foods, Land O'Lakes, USA",
        "Ass. Professor, South Dakota State University, USA",
        "Scientist & Project Leader, Ingredient Innovations, Fonterra, New Zealand",
        "Ex-GCMMF-AMUL, Anand",
      ],
      achievements: [
        "20+ Years of International Experience working in Dairy and Food Industry, FMCG Industry, as well as in Academia across the World",
        "10 Patents, 100+ Research-review & other Publications",
      ],
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
              consultancy services across Globe.
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
                About Flavi Dairy Solutions
              </h2>
              <div className="space-y-4 text-black/70">
                <p>
                  With over 20 years of proven experience have helped us build a
                  strong reputation as a trusted partner in the field of
                  engineering and automation for the dairy and food production
                  sector. Our commitment to quality, integrity, and innovation
                  has positioned us as a reliable solutions provider for
                  businesses seeking sustainable growth and operational
                  excellence.
                </p>
                <p>
                  We work closely with clients not just design strong system but
                  also take them through strategic consultation and new product
                  development, ensuring their offerings meet evolving market
                  demands and regulatory standards.
                </p>
              </div>

              {/* Domain Table */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">
                  Our Domain Expertise
                </h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="font-semibold text-black border-b border-gray-300 pb-2 mb-2">
                      Domain
                    </div>
                    <div className="font-semibold text-black border-b border-gray-300 pb-2 mb-2">
                      Core Focus
                    </div>
                    <div className="font-semibold text-black border-b border-gray-300 pb-2 mb-2">
                      Key Value to Client
                    </div>

                    <div className="text-gray-700 py-2">
                      Consultation & Turnkey Execution
                    </div>
                    <div className="text-gray-700 py-2">
                      Strategy, design, project management, commissioning
                    </div>
                    <div className="text-gray-700 py-2">
                      End-to-end delivery with minimal client involvement
                    </div>

                    <div className="text-gray-700 py-2">
                      Machinery Supply & Automation
                    </div>
                    <div className="text-gray-700 py-2">
                      Equipment supply, operational automation, SCADA/PLC
                    </div>
                    <div className="text-gray-700 py-2">
                      High performance, compliance, efficiency, traceability
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-black border-0"
                  asChild
                >
                  <Link href="https://wa.me/917202033384">
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

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Mission & Vision
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Our purpose and aspirations that drive everything we do
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <MotionDiv
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed">
                    To deliver innovative and reliable engineering solutions for
                    the dairy and food processing industry. We empower clients
                    through expert consultation, automation, and turnkey
                    execution. Our goal is to drive efficiency, compliance, and
                    long-term success. Empowering rural development through
                    Value addition of Agro-Food Resources in Sustainable ways.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-black">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 text-center leading-relaxed">
                    We aim to set new benchmarks in quality, efficiency, and
                    sustainability. Our vision is to be the first choice
                    globally for future-ready dairy and food product
                    entrepreneurs through innovation and engineering excellence.
                  </p>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>

          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Values
            </h3>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              The principles that guide our business and relationships with
              clients
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Domains Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Domain Expertise
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Comprehensive solutions across multiple dairy and food processing
              domains
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Dairy Processing
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Milk Processing & Treatment</li>
                    <li>• Cheese & Paneer Manufacturing</li>
                    <li>• Yogurt & Fermented Products</li>
                    <li>• Ice Cream Production</li>
                    <li>• Milk Powder & Spray Drying</li>
                    <li>• Butter & Ghee Processing</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Food Processing
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fruit & Vegetable Processing</li>
                    <li>• Grain & Cereal Processing</li>
                    <li>• Snack Food Manufacturing</li>
                    <li>• Ready-to-Eat Products</li>
                    <li>• Bakery & Confectionery</li>
                    <li>• Spice & Seasoning Processing</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Filter className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Beverage Manufacturing
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Fruit Juice Extraction</li>
                    <li>• Carbonated Beverages</li>
                    <li>• Energy & Sports Drinks</li>
                    <li>• Flavored Water Production</li>
                    <li>• Concentrate & Syrup Manufacturing</li>
                    <li>• Packaging & Bottling Systems</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Agro Processing
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Oil Extraction & Refining</li>
                    <li>• Pulse & Grain Processing</li>
                    <li>• Spice Grinding & Packaging</li>
                    <li>• Agricultural Waste Management</li>
                    <li>• Value-Added Products</li>
                    <li>• Post-Harvest Processing</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Factory className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Process Engineering
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Plant Design & Layout</li>
                    <li>• Process Optimization</li>
                    <li>• Automation & Control Systems</li>
                    <li>• Quality Management Systems</li>
                    <li>• Energy Efficiency Solutions</li>
                    <li>• Maintenance & Support</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Consultancy Services
                  </h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Turnkey Project Solutions</li>
                    <li>• Technical Documentation</li>
                    <li>• Feasibility Studies</li>
                    <li>• Regulatory Compliance</li>
                    <li>• Training & Development</li>
                    <li>• Business Strategy</li>
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
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
              every project, led by our CEO Mr. Kirit Patel
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">
                      {member.name}
                    </CardTitle>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-sm">
                      {member.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Education:
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {member.education}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-black/70">
                          <span className="font-medium">Experience:</span>{" "}
                          {member.experience}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-black/70">
                          <span className="font-medium">Expertise:</span>{" "}
                          {member.expertise}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Work Experience:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {member.workExperience.map((exp, expIndex) => (
                          <li key={expIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Achievements:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <Award className="w-3 h-3 text-secondary mt-1 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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
                    403, 4th Floor, 'Samruddhi', Opp. Old High Court, B/H
                    Navdeep Bldg., Navrangpura, Ahmedabad-380014
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
