"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import Height from "@/components/height";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import Image from "next/image";
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
import { useState, useEffect, useRef } from "react";

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

  // Track which equipment descriptions are expanded (by index)
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  // Refs to description paragraphs to detect truncation
  const descRefs = useRef<Array<HTMLParagraphElement | null>>([]);
  const [needsTruncate, setNeedsTruncate] = useState<boolean[]>([]);

  // Ref for the equipment section to enable auto-scroll
  const equipmentSectionRef = useRef<HTMLElement>(null);

  const isExpanded = (i: number) => expandedItems.includes(i);
  const toggleExpand = (i: number) =>
    setExpandedItems((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  // Function to handle category selection and auto-scroll
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);

    // Scroll to equipment section after a short delay to allow for state update
    setTimeout(() => {
      if (equipmentSectionRef.current) {
        equipmentSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

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

  // ...truncation measurement moved below where filteredEquipment is defined

  const categories = [
    {
      id: "all",
      name: "All Equipment",
      icon: Factory,
      description: "Complete range of processing equipment",
    },
    {
      id: "MILK PROCESSING EQUIPMENT",
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
  ];

  const filteredEquipment =
    selectedCategory === "all"
      ? equipmentData
      : equipmentData.filter((item) => item.category === selectedCategory);

  // Calculate counts for each category
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return equipmentData.length;
    return equipmentData.filter((item) => item.category === categoryId).length;
  };

  // Measure whether each description is truncated (overflowing its container)
  useEffect(() => {
    const checkTruncate = () => {
      const results = filteredEquipment.map((_, i) => {
        const el = descRefs.current[i];
        if (!el) return false;
        // If element's scrollHeight is greater than clientHeight, it is overflowing
        return el.scrollHeight > el.clientHeight + 1;
      });
      setNeedsTruncate(results);
    };

    // Run after paint
    const raf = requestAnimationFrame(checkTruncate);
    window.addEventListener("resize", checkTruncate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", checkTruncate);
    };
  }, [filteredEquipment, selectedCategory, equipmentData, expandedItems]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
            <p className="text-black/70">Loading equipment data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pb-20 bg-gradient-to-br from-white via-secondary/5 to-white">
        <Height />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-secondary/10 text-black border-secondary/20">
              Equipment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black">
              Processing Equipment
              <span className="text-secondary"> Solutions</span>
            </h1>
            <p className="text-xl text-black/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Complete range of dairy, food, and beverage processing equipment
              with advanced automation and control systems
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <a
                  href={`https://wa.me/919979132679?text=${encodeURIComponent(
                    `Hi, I'm interested in your processing equipment solutions. Please provide me with a detailed quote and information about available machinery.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Equipment Quote on WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 lg:py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category) => {
              const count = getCategoryCount(category.id);
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={`h-auto p-4 flex flex-col items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-secondary text-black border-0 shadow-lg"
                      : "border-neutral text-black hover:bg-neutral/50 hover:border-secondary/50"
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <category.icon className="w-6 h-6" />
                  <div className="text-center">
                    <div className="font-semibold">{category.name}</div>
                    <div className="text-xs opacity-70 mb-1">
                      {category.description}
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        selectedCategory === category.id
                          ? "bg-white/20 text-black"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {count} {count === 1 ? "item" : "items"}
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>

          {selectedCategory !== "all" && (
            <div className="text-center mt-6">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-black transition-colors"
                onClick={() => handleCategorySelect("all")}
              >
                <Filter className="w-4 h-4 mr-2" />
                Show All Equipment ({equipmentData.length} items)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Equipment Grid */}
      <section ref={equipmentSectionRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              {selectedCategory === "all"
                ? "Our Equipment Range"
                : categories.find((cat) => cat.id === selectedCategory)?.name ||
                  "Equipment"}
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              {selectedCategory === "all"
                ? "High-quality processing equipment designed for efficiency, reliability, and food safety"
                : `Showing ${filteredEquipment.length} ${
                    filteredEquipment.length === 1 ? "item" : "items"
                  } in this category`}
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEquipment.map((equipment, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-neutral flex flex-col">
                  <div className="aspect-video bg-neutral/50 rounded-t-lg flex items-center justify-center overflow-hidden">
                    {equipment.images && equipment.images.length > 0 ? (
                      <div className="w-full h-full relative overflow-hidden">
                        {/* Blurred background image */}
                        <Image
                          src={equipment.images[0]}
                          alt=""
                          fill
                          className="object-cover filter blur-md scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 6}
                        />
                        {/* Main image with proper fit */}
                        <Image
                          src={equipment.images[0]}
                          alt={equipment.name}
                          fill
                          className="relative z-10 object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 6}
                        />
                        {/* Overlay to darken the blur for better contrast */}
                        <div className="absolute inset-0 bg-black/10 z-5"></div>
                      </div>
                    ) : (
                      // No placeholder — keep the area blank/neutral when there's no valid image
                      <div className="w-full h-full bg-neutral/50" />
                    )}
                  </div>
                  <CardHeader className="pb-2 p-4">
                    <CardTitle className="text-lg font-semibold text-black line-clamp-2">
                      {equipment.name}
                    </CardTitle>
                    <Badge className="mt-1 bg-secondary/10 text-black border-secondary/20 w-fit text-xs">
                      {equipment.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0 p-4">
                    <div className="space-y-3 flex-1 mb-4">
                      {/* Description text */}
                      {isExpanded(index) ? (
                        <p
                          id={`equipment-desc-${index}`}
                          ref={(el) => {
                            descRefs.current[index] = el;
                            return;
                          }}
                          className="text-black/70 text-sm leading-relaxed"
                        >
                          {equipment.description}
                        </p>
                      ) : (
                        <p
                          id={`equipment-desc-${index}`}
                          ref={(el) => {
                            descRefs.current[index] = el;
                            return;
                          }}
                          className="text-black/70 text-sm leading-relaxed line-clamp-2"
                        >
                          {equipment.description}
                        </p>
                      )}

                      {/* Always show Read more button for descriptions longer than 150 characters */}
                      {(equipment.description.length > 100 ||
                        isExpanded(index)) && (
                        <div className="pt-2 flex justify-start">
                          <button
                            onClick={() => toggleExpand(index)}
                            className="text-xs text-cyan hover:text-cyan/80 hover:underline font-semibold bg-cyan/10 px-2 py-1 rounded-md border border-cyan/30 transition-colors"
                            aria-expanded={isExpanded(index)}
                            aria-controls={`equipment-desc-${index}`}
                          >
                            {isExpanded(index)
                              ? "🔼 Show Less"
                              : "🔽 Read More"}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Quote button section with clear separation */}
                    <div className="pt-3 border-t border-neutral mt-auto">
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-black border-0 w-full"
                        asChild
                      >
                        <a
                          href={`https://wa.me/919979132679?text=${encodeURIComponent(
                            `Hi, I am interested in "${equipment.name}". Please provide a quote and more information.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1"
                        >
                          <span>Get Quote</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral">
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-neutral">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-6 h-6 text-orange-600" />
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
                <a
                  href={`https://wa.me/919979132679?text=${encodeURIComponent(
                    `Hi, I'm ready to upgrade my processing equipment. Please help me choose the right machinery for my production needs and provide a detailed quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Get Equipment Quote on WhatsApp
                  <ArrowRight className="w-5 h-5" />
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
