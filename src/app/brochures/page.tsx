"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion-optimized";
import { FileText, Download, ExternalLink, Briefcase } from "lucide-react";

export default function BrochuresPage() {
  const brochures = [
    {
      id: "flavi-up",
      title: "Euronova Food Solutions - Main Brochure",
      filename: "flavi-up.pdf",
      description:
        "Complete overview of our dairy processing solutions and services",
      category: "Company Overview",
    },
    {
      id: "flavi-up2",
      title: "Euronova Food Solutions - Services Portfolio",
      filename: "flavi-up2.pdf",
      description:
        "Detailed information about our consultancy and technical services",
      category: "Services",
    },
    {
      id: "flvai-up3",
      title: "Euronova Food Solutions - Equipment Catalog",
      filename: "flvai-up3.pdf",
      description:
        "Comprehensive catalog of dairy processing equipment and machinery",
      category: "Equipment",
    },
    {
      id: "flavi-up4",
      title: "Euronova Food Solutions - Industry Solutions",
      filename: "flavi-up4.pdf",
      description:
        "Specialized solutions for different dairy industry segments",
      category: "Industry Solutions",
    },
    {
      id: "flavi-up5",
      title: "Euronova Food Solutions - Innovation & Technology",
      filename: "flavi-up5.pdf",
      description:
        "Latest innovations and technological advancements in dairy processing",
      category: "Technology",
    },
  ];

  const categories = Array.from(new Set(brochures.map((b) => b.category)));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-primary/5 to-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              <Briefcase className="w-4 h-4 mr-2" />
              Company Resources
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Company
              <span className="text-primary"> Brochures</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive range of dairy processing solutions,
              services, and innovative technologies through our detailed company
              brochures
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brochures.map((brochure, index) => (
              <MotionDiv
                key={brochure.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-neutral hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-black text-lg mb-2 text-center">
                      {brochure.category}
                    </h3>
                    <p className="text-black/70 text-sm mb-4 text-center">
                      {brochure.description}
                    </p>
                    <div className="text-center mb-4">
                      <Badge variant="outline" className="text-xs">
                        Company Resource
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`/${brochure.filename}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open PDF
                      </a>
                      <a
                        href={`/${brochure.filename}`}
                        download
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors text-sm"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview Section */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Brochure Categories
              </h2>
              <p className="text-lg text-black/70 max-w-2xl mx-auto">
                Explore our comprehensive collection of brochures organized by
                category to find the information most relevant to your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => {
                const categoryBrochures = brochures.filter(
                  (b) => b.category === category
                );
                return (
                  <MotionDiv
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full border-neutral hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-black text-lg mb-2 text-center">
                          {category}
                        </h3>
                        <p className="text-black/70 text-sm mb-4 text-center">
                          {categoryBrochures.length} brochure
                          {categoryBrochures.length !== 1 ? "s" : ""} available
                        </p>
                        <div className="space-y-2">
                          {categoryBrochures.map((brochure) => (
                            <a
                              key={brochure.id}
                              href={`/${brochure.filename}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 bg-white rounded-lg border border-neutral hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-black group-hover:text-primary">
                                  {brochure.filename
                                    .replace(".pdf", "")
                                    .replace("flav", "Flav")}
                                </span>
                                <ExternalLink className="w-3 h-3 text-black/50 group-hover:text-primary" />
                              </div>
                            </a>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Download All Brochures
            </h2>
            <p className="text-lg text-black/70 mb-8 max-w-2xl mx-auto">
              Get complete access to all our company brochures featuring our
              services, equipment, and innovative dairy processing solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {brochures.map((brochure, index) => (
                <MotionDiv
                  key={brochure.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={`/${brochure.filename}`}
                    download
                    className="block p-4 bg-white rounded-lg border border-neutral hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-black text-sm mb-1">
                      {brochure.category}
                    </h3>
                    <p className="text-xs text-black/70 mb-3">PDF Document</p>
                    <div className="flex items-center justify-center gap-1 text-primary text-sm">
                      <Download className="w-3 h-3" />
                      Download
                    </div>
                  </a>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
