"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import { ImageSlider } from "@/components/ui/image-slider-v2";
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
import Image from "next/image";

export default function AboutPage() {
  // National clients images - using actual files from national-flavidairy folder
  const nationalImages = [
    "0a999b54-26f9-48fb-8b7c-af7cb67423f4.png",
    "1541e1f6-e340-4408-b9ef-e0e975475797.png",
    "4e2ada44-64b4-4589-89cb-f2b5b79ffdb9.png",
    "56d1cbfd-1b5e-40c6-9a27-906de6437c6f.jpg",
    "6c54a3f2-3e80-454a-b459-83aa96ff70db.png",
    "9b66e213-68a5-47b9-8bf9-db838425ccdf.png",
    "9c150e17-4ebb-49fe-abea-06a691bfba99.jpg",
    "a9433333-3c94-46be-9cc1-95691e597172.jpg",
    "b117dc3b-d150-4a53-b8f1-79d556923956.png",
    "b1b69d61-3469-48a4-8f1b-54ff16f0708e.png",
  ];

  // International clients images - using actual files from international-flavidairy folder
  const internationalImages = [
    "0cd95a16-2c59-4c10-bc71-5a578c660a28.png",
    "19387bd7-14df-42b8-8204-0dc62618fa05.jpg",
    "210eedf8-95eb-4845-ae25-a0435f609f4e.jpg",
    "33b06611-e84e-4fd3-a102-a05f0b94baf2.png",
    "39f1a181-1e4b-4057-84e5-8b93e6811886.png",
    "631dcc51-0287-46c5-af14-221c79bb130b.png",
    "63b06f29-c4b7-4950-ab25-9b4d6e2bacd3.png",
    "72d4b5aa-2930-4ee1-b14b-685188a9ca62.png",
    "8b773733-6b8c-482a-b68b-3b338d959a67.jpg",
    "929286f0-6d82-4a8b-9079-dec35f1fdb6e.jpg",
    "b0589db5-b784-4301-8108-24c8d5a824f2.jpg",
    "b5fd1cbb-4cd2-4e86-9f78-4ec5191578eb.jpg",
    "ba22d3f7-b0a4-457f-a468-fad10d549f64.png",
    "bdca9ea8-0ab3-46b4-a564-175ca436c1b4.png",
    "c93d083b-a2d6-4a19-8a7e-13805d1f1b71.png",
    "e2e6e608-20a0-480f-b1b8-240e88487bb9.png",
    "f7a2ee25-3b83-4b98-9c92-40aaa8ae755c.jpg",
    "f850bc0b-a166-4f95-ba72-99aec71e0f3e.jpg",
  ];

  // Other valuable clients images - using actual files from other-flav folder
  const otherValuableImages = [
    "031b325f-8685-44dd-8b5b-85c41e68c628.png",
    "06bfd427-d465-4e94-8626-9cc40fe7df17.jpg",
    "07c472ea-25db-433c-ad3d-197325a2dbc5.png",
    "0a50350c-2925-488c-9378-8347fd8b59ba.jpg",
    "140aae47-2375-4d5e-b3ca-b10d01fea7aa.jpg",
    "17eca424-74e3-4ea6-b9c6-ee637296de3d.png",
    "1ba71d49-b737-4ce4-b43e-a0cba0e04881.png",
    "22dbda29-95de-418c-8518-0cf5bb6714a6.png",
    "247a115c-c472-4996-9428-52f0da70c180.png",
    "2858c902-c5fc-4bab-89f3-6d7300684c8f.png",
    "2e0193e3-173d-496e-8168-5a4452329c96.png",
    "36837356-2585-4da3-a044-cb52e8b954ba.png",
    "3a5ee449-8839-43c9-b040-f2e78316cab7.jpg",
    "3b56cad3-7f1c-476b-a1e5-855656c1c8ad.jpg",
    "3fa685bb-88c5-4bc8-85ad-0db360259c1d.jpg",
    "444a0981-0c2e-40a3-9c76-3c6fc27d86d7.jpg",
    "4700241a-15c0-4394-8554-161e26db3deb.jpg",
    "485108ac-fa10-4166-9344-3d5b1616c724.jpg",
    "48ebb3a9-e2fa-479f-b93a-c33a6da13396.png",
    "4d142126-a778-4d17-bf6f-c151bb593f63.png",
    "5e5e0b91-2fe8-40e4-a84f-69b18ce01f7c.jpg",
    "6223399d-de23-4562-8088-4b193db1c5c4.png",
    "6630293a-981e-49c3-b54a-f148fb07d5e2.png",
    "7f43d4f6-4a32-4262-8f3c-c5c800f16f95.png",
    "8351548c-8827-418a-b33a-3e225c5736be.jpg",
    "87a6eb0e-e3a0-466f-b0bb-0a933780c994.jpg",
    "9041f8d7-8c58-4a90-82ef-d8b3a32ce772.png",
    "90d50707-53e0-4a8d-9e99-a405256f9975.jpg",
    "94c26da2-b8dd-49e9-8103-ccc72c024c80.png",
    "94df8878-2781-406b-abeb-2536cfd2e638.png",
    "9856836f-7be4-4399-b4fc-9ffa660cdde4.png",
    "a83ffda6-02af-4c05-b61e-ead43940fc04.jpg",
    "aa3f8dbe-01bf-4a9a-9564-183648bb5b3b.png",
    "bb1a82e0-40af-4358-8729-f3b1a3fe02f8.png",
    "c23e8a52-9768-4ac1-840e-eac3e701d027.png",
    "cc245964-08a3-4d04-8f04-a81a7cdfa0ab.jpg",
    "d2a3df49-523a-48f7-8357-69c6a5c1d824.png",
    "d3f83c04-4e36-405f-9bf4-256d3dd17288.jpg",
    "db41fa62-4c9d-40c2-9261-4abae5864ae0.png",
    "e42810ef-e1f0-4331-bbbb-2a9f96b43f1c.png",
    "e486decc-361a-44c2-bce8-5d77e3fd20ee.jpg",
    "e5abcf42-f3e7-47b2-a1e3-d11e2c81c506.png",
    "f3bc2e16-a58e-4dd7-a401-465e0719e26a.jpg",
    "fc076743-11cf-476a-9cde-0650fdfbe633.png",
    "fc79e064-66e9-4ff4-a1d2-8a681916daa5.jpg",
  ];

  const stats = [
    { icon: Clock, label: "Years of Experience", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "2500+" },
    { icon: Target, label: "Projects Completed", value: "1600+" },
    { icon: Package, label: "Employees", value: "20+" },
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
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 ">
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
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/milk.jpg"
                  alt="Dairy Processing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
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
                      <Target className="w-8 h-8 text-green-500" />
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
                      <TrendingUp className="w-8 h-8 text-green-500" />
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
                        <value.icon className="w-6 h-6 text-green-500" />
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
                    <Droplets className="w-6 h-6 text-green-500" />
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
                    <Package className="w-6 h-6 text-green-500" />
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
                    <Filter className="w-6 h-6 text-green-500" />
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
                    <Leaf className="w-6 h-6 text-green-500" />
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
                    <Factory className="w-6 h-6 text-green-500" />
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
                    <Target className="w-6 h-6 text-green-500" />
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
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-200 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                        priority={index < 2}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-black">
                      {member.name}
                    </CardTitle>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-sm text-black flex justify-center items-center">
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

      {/* Client Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Client Portfolio
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Showcasing our successful partnerships with national and
              international clients
            </p>
          </MotionDiv>

          {/* National Clients */}
          <div className="mb-16">
            <MotionDiv
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                National Clients
              </h3>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Trusted by leading dairy and food processing companies across
                India
              </p>
            </MotionDiv>

            <ImageSlider
              images={nationalImages}
              basePath="/national-flavidairy"
              title="Our Trusted National Partners"
              autoSlide={true}
              slideInterval={1500}
              slidesToShow={6}
              className="mb-8"
            />
          </div>

          {/* International Clients */}
          <div className="mb-16">
            <MotionDiv
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                International Clients
              </h3>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Expanding our expertise to serve clients around the globe
              </p>
            </MotionDiv>

            <ImageSlider
              images={internationalImages}
              basePath="/international-flavidairy"
              title="Our Global International Partners"
              autoSlide={true}
              slideInterval={1800}
              slidesToShow={6}
              className="mb-8"
            />
          </div>

          {/* Other Valuable Clients */}
          <div>
            <MotionDiv
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                Other Valuable Clients
              </h3>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Building strong partnerships with diverse industry leaders and innovative companies
              </p>
            </MotionDiv>

            <ImageSlider
              images={otherValuableImages}
              basePath="/other-flav"
              title="Our Diverse Portfolio of Valued Partners"
              autoSlide={true}
              slideInterval={2000}
              slidesToShow={6}
              className="mb-8"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
