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
import {
  Settings,
  Wrench,
  Truck,
  Headphones,
  ArrowRight,
  CheckCircle,
  Factory,
  Cog,
  Shield,
  Zap,
  Package,
  Users,
  Filter,
  Droplets,
  Thermometer,
  Gauge,
  Cpu,
  Database,
  Monitor,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MachineryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const equipmentData = [
    {
      id: 1,
      name: "Milk Pasteurizer HTST",
      category: "dairy",
      image: "/images/equipment/pasteurizer.jpg",
      description:
        "High-Temperature Short-Time pasteurizer for milk processing with automatic temperature control and CIP cleaning system.",
      specifications: {
        capacity: "1000-5000 LPH",
        temperature: "72°C for 15 seconds",
        material: "Stainless Steel 316L",
        power: "15-25 kW",
      },
      features: [
        "Automatic temperature control",
        "CIP cleaning system",
        "Energy efficient",
        "FSSAI compliant",
        "Easy maintenance",
      ],
      price: "₹8,50,000 - ₹25,00,000",
    },
    {
      id: 2,
      name: "Cream Separator",
      category: "dairy",
      image: "/images/equipment/separator.jpg",
      description:
        "High-speed cream separator for separating cream from milk with adjustable fat content control.",
      specifications: {
        capacity: "500-2000 LPH",
        speed: "6000-8000 RPM",
        material: "Stainless Steel 316L",
        power: "5-10 kW",
      },
      features: [
        "Adjustable fat content",
        "Self-cleaning system",
        "Low noise operation",
        "High efficiency",
        "Compact design",
      ],
      price: "₹3,50,000 - ₹12,00,000",
    },
    {
      id: 3,
      name: "Cheese Vat",
      category: "dairy",
      image: "/images/equipment/cheese-vat.jpg",
      description:
        "Double-jacketed cheese vat with temperature control and agitation system for cheese production.",
      specifications: {
        capacity: "500-2000 L",
        temperature: "30-90°C",
        material: "Stainless Steel 316L",
        power: "8-15 kW",
      },
      features: [
        "Double-jacketed design",
        "Temperature control",
        "Agitation system",
        "CIP cleaning",
        "Digital controls",
      ],
      price: "₹4,50,000 - ₹18,00,000",
    },
    {
      id: 4,
      name: "Yogurt Production Line",
      category: "dairy",
      image: "/images/equipment/yogurt-line.jpg",
      description:
        "Complete yogurt production line including fermentation tanks, filling machines, and packaging equipment.",
      specifications: {
        capacity: "1000-5000 L/day",
        fermentation: "6-8 hours",
        material: "Stainless Steel 316L",
        power: "20-40 kW",
      },
      features: [
        "Automated filling",
        "Temperature monitoring",
        "Hygienic design",
        "Easy cleaning",
        "High production rate",
      ],
      price: "₹25,00,000 - ₹75,00,000",
    },
    {
      id: 5,
      name: "Tomato Processing Line",
      category: "food",
      image: "/images/equipment/tomato-line.jpg",
      description:
        "Complete tomato processing line for ketchup, puree, and sauce production with sorting and washing.",
      specifications: {
        capacity: "2-10 TPH",
        sorting: "Automated",
        material: "Stainless Steel 316L",
        power: "30-60 kW",
      },
      features: [
        "Automated sorting",
        "Washing system",
        "Crushing and pulping",
        "Evaporation system",
        "Packaging line",
      ],
      price: "₹50,00,000 - ₹2,00,00,000",
    },
    {
      id: 6,
      name: "Jam Production Unit",
      category: "food",
      image: "/images/equipment/jam-unit.jpg",
      description:
        "Complete jam production unit with cooking kettles, filling machines, and labeling system.",
      specifications: {
        capacity: "500-2000 kg/day",
        cooking: "Vacuum cooking",
        material: "Stainless Steel 316L",
        power: "15-30 kW",
      },
      features: [
        "Vacuum cooking",
        "Automatic filling",
        "Labeling system",
        "Temperature control",
        "Hygienic design",
      ],
      price: "₹15,00,000 - ₹45,00,000",
    },
    {
      id: 7,
      name: "Juice Extraction System",
      category: "beverage",
      image: "/images/equipment/juice-extractor.jpg",
      description:
        "High-efficiency juice extraction system for fruits and vegetables with pulp separation.",
      specifications: {
        capacity: "1-5 TPH",
        extraction: "95-98%",
        material: "Stainless Steel 316L",
        power: "25-50 kW",
      },
      features: [
        "High extraction rate",
        "Pulp separation",
        "Easy cleaning",
        "Low maintenance",
        "Energy efficient",
      ],
      price: "₹20,00,000 - ₹60,00,000",
    },
    {
      id: 8,
      name: "Carbonated Beverage Line",
      category: "beverage",
      image: "/images/equipment/carbonated-line.jpg",
      description:
        "Complete carbonated beverage production line with mixing, carbonation, and bottling.",
      specifications: {
        capacity: "2000-10000 bottles/hour",
        carbonation: "2.5-4.0 volumes",
        material: "Stainless Steel 316L",
        power: "40-80 kW",
      },
      features: [
        "Automated mixing",
        "Carbonation control",
        "Bottling system",
        "Quality monitoring",
        "High speed production",
      ],
      price: "₹75,00,000 - ₹3,00,00,000",
    },
    {
      id: 9,
      name: "SCADA Control System",
      category: "automation",
      image: "/images/equipment/scada-system.jpg",
      description:
        "Advanced SCADA system for process monitoring and control with real-time data visualization.",
      specifications: {
        points: "1000-10000 I/O",
        redundancy: "Hot standby",
        material: "Industrial grade",
        power: "2-5 kW",
      },
      features: [
        "Real-time monitoring",
        "Data logging",
        "Alarm management",
        "Remote access",
        "Customizable HMI",
      ],
      price: "₹10,00,000 - ₹50,00,000",
    },
    {
      id: 10,
      name: "PLC Control Panel",
      category: "automation",
      image: "/images/equipment/plc-panel.jpg",
      description:
        "Programmable Logic Controller panel for automated process control and monitoring.",
      specifications: {
        iopoints: "32-512 I/O",
        processor: "32-bit",
        material: "IP65 enclosure",
        power: "1-3 kW",
      },
      features: [
        "Modular design",
        "Ethernet communication",
        "Fault diagnostics",
        "Easy programming",
        "Reliable operation",
      ],
      price: "₹2,50,000 - ₹15,00,000",
    },
  ];

  const categories = [
    { id: "all", name: "All Equipment", icon: Factory },
    { id: "dairy", name: "Dairy Processing", icon: Droplets },
    { id: "food", name: "Food Processing", icon: Package },
    { id: "beverage", name: "Beverage Manufacturing", icon: Filter },
    { id: "automation", name: "Automation & Control", icon: Cpu },
  ];

  const filteredEquipment =
    selectedCategory === "all"
      ? equipmentData
      : equipmentData.filter((item) => item.category === selectedCategory);

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
              Equipment & Machinery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Processing Equipment
              <span className="text-secondary"> Solutions</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Complete range of dairy, food, and beverage processing equipment
              with advanced automation and control systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get Equipment Quote
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/contact">Download Catalog</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`${
                  selectedCategory === category.id
                    ? "bg-secondary text-black border-0"
                    : "border-gray-300 text-black hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Equipment Range
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              High-quality processing equipment designed for efficiency,
              reliability, and food safety
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((equipment, index) => (
              <MotionDiv
                key={equipment.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Factory className="w-8 h-8 text-secondary" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-black">
                          {equipment.name}
                        </CardTitle>
                        <Badge className="mt-2 bg-secondary/10 text-black border-secondary/20">
                          {
                            categories.find(
                              (cat) => cat.id === equipment.category
                            )?.name
                          }
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-black/70 text-sm">
                      {equipment.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {Object.entries(equipment.specifications).map(
                          ([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-black/60 capitalize">
                                {key}:
                              </span>
                              <span className="text-black font-medium">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">
                        Key Features
                      </h4>
                      <div className="space-y-1">
                        {equipment.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-xs text-black/70">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-black">
                          {equipment.price}
                        </span>
                        <Button
                          size="sm"
                          className="bg-secondary hover:bg-secondary/90 text-black border-0"
                          asChild
                        >
                          <Link href="/contact">
                            <span className="flex items-center gap-1">
                              Get Quote
                              <ArrowRight className="w-3 h-3" />
                            </span>
                          </Link>
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Our Services
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Complete support from equipment selection to after-sales service
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: "Customization",
                description:
                  "Tailored equipment solutions for your specific requirements",
              },
              {
                icon: Truck,
                title: "Installation",
                description:
                  "Professional installation and commissioning services",
              },
              {
                icon: Headphones,
                title: "Support",
                description: "24/7 technical support and maintenance services",
              },
              {
                icon: Shield,
                title: "Warranty",
                description: "Comprehensive warranty and after-sales support",
              },
            ].map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-black/70 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to Upgrade Your Processing Equipment?
            </h2>
            <p className="text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Get the right machinery for your production needs with expert
              guidance and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Get Equipment Quote
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black/20 text-black hover:bg-black hover:text-white"
                asChild
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
