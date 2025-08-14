"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import Height from "@/components/height";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useState, useEffect } from "react";

interface EquipmentItem {
  name: string;
  images: string[];
  description: string;
  category: string;
}

export default function MachineryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [equipmentData, setEquipmentData] = useState<EquipmentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await fetch("/output.json");
        const data = await response.json();
        setEquipmentData(data);
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEquipmentData();
  }, []);

  const categories = [
    {
      id: "all",
      name: "All Equipment",
      icon: Factory,
      description: "Complete range of processing equipment",
    },
    {
      id: "MILK PROCESSING EQUIPMENTS",
      name: "Milk Processing",
      icon: Droplets,
      description: "Milk processing and dairy equipment",
    },
    {
      id: "ICECREAM & KULFI EQUIPMENT",
      name: "Ice Cream & Kulfi Equipment",
      icon: Package,
      description: "Ice cream and kulfi manufacturing equipment",
    },
    {
      id: "GRINDERS, MILLS AND MIXERS",
      name: "Grinders, Mills & Mixes",
      icon: Cog,
      description: "Grinding, milling and mixing equipment",
    },
    {
      id: "PANEER AND CHEESE MAKING EQUIPMENT",
      name: "Paneer & Cheese Making Equipment",
      icon: Database,
      description: "Paneer and cheese processing equipment",
    },
    {
      id: "STERILIZER",
      name: "Sterilizers & Heating Units",
      icon: Thermometer,
      description: "Sterilization and heating equipment",
    },
    {
      id: "SWEET AND DESSERT PROCESSING EQUIPMENT",
      name: "Sweet & Dessert Processing Equipment",
      icon: Filter,
      description: "Sweet and dessert manufacturing equipment",
    },
    {
      id: "PACKAGING AND FILLING MACHINE",
      name: "Packaging & Filling",
      icon: Package,
      description: "Packaging and filling machinery",
    },
    {
      id: "OTHER ESSENTIAL MACHINERY",
      name: "Cooking & Frying Units",
      icon: Zap,
      description: "Cooking and frying equipment",
    },
    {
      id: "CURD EQUIPMENTS",
      name: "Lab Support",
      icon: Monitor,
      description: "Laboratory and curd processing equipment",
    },
    {
      id: "EQUIPMENTS FOR FAT RICH PRODUCTS",
      name: "Pumps, Sensors & Instruments",
      icon: Gauge,
      description: "Pumps, sensors and instrumentation",
    },
  ];

  const filteredEquipment =
    selectedCategory === "all"
      ? equipmentData
      : equipmentData.filter((item) => item.category === selectedCategory);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading equipment data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-secondary/5 to-white">
        <Height />
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
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                className={`h-auto p-4 flex flex-col items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-secondary text-black border-0"
                    : "border-gray-300 text-black hover:bg-gray-100"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-xs opacity-70">
                    {category.description}
                  </div>
                </div>
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
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                  <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
                    {equipment.images && equipment.images.length > 0 ? (
                      <img
                        src={equipment.images[0]}
                        alt={equipment.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          target.nextElementSibling?.classList.remove("hidden");
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full bg-gradient-to-br from-secondary/10 to-secondary/5 flex items-center justify-center">
                      <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Factory className="w-10 h-10 text-secondary" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl font-semibold text-black">
                          {equipment.name}
                        </CardTitle>
                        <Badge className="mt-2 bg-secondary/10 text-black border-secondary/20">
                          {equipment.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-black/70 text-sm">
                      {equipment.description}
                    </p>

                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          className="bg-secondary hover:bg-secondary/90 text-black border-0"
                          asChild
                        >
                          <Link href="/contact">
                            <span className="flex items-center gap-1">
                              Get Free Consultation
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

      {/* CTA Section - Moved to end */}
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
