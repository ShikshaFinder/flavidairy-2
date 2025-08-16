"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Grid,
  List,
} from "lucide-react";
import { useState } from "react";

export default function MagazinesPage() {
  const [selectedPdf, setSelectedPdf] = useState("flavi-42.pdf");
  const [viewMode, setViewMode] = useState<"grid" | "viewer">("viewer");

  const magazines = [
    {
      id: "flavi-42",
      title: "Flavi Dairy Magazine - Issue 42",
      filename: "flavi-42.pdf",
      description: "Latest insights and innovations in dairy processing",
      publishDate: "2024",
    },
    {
      id: "flavi-43",
      title: "Flavi Dairy Magazine - Issue 43",
      filename: "flavi-43.pdf",
      description: "Advanced food processing technologies and trends",
      publishDate: "2024",
    },
    {
      id: "flavi-44",
      title: "Flavi Dairy Magazine - Issue 44",
      filename: "flavi-44.pdf",
      description: "Industry best practices and case studies",
      publishDate: "2024",
    },
    {
      id: "flavi-45",
      title: "Flavi Dairy Magazine - Issue 45",
      filename: "flavi-45.pdf",
      description: "Automation and digitalization in dairy industry",
      publishDate: "2024",
    },
    {
      id: "flavi-46",
      title: "Flavi Dairy Magazine - Issue 46",
      filename: "flavi-46.pdf",
      description: "Sustainable processing solutions and innovations",
      publishDate: "2024",
    },
    {
      id: "flavi-47",
      title: "Flavi Dairy Magazine - Issue 47",
      filename: "flavi-47.pdf",
      description: "Quality control and regulatory compliance",
      publishDate: "2024",
    },
    {
      id: "flavi-48",
      title: "Flavi Dairy Magazine - Issue 48",
      filename: "flavi-48.pdf",
      description: "Future of dairy and food processing",
      publishDate: "2024",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-green-50/30 to-white">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              <BookOpen className="w-4 h-4 mr-2" />
              Digital Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Flavi
              <span className="text-green-600"> Updates</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest insights, innovations, and industry
              trends in dairy and food processing technology
            </p>
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setViewMode("viewer")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "viewer"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <List className="w-4 h-4" />
                Viewer Mode
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <Grid className="w-4 h-4" />
                Grid View
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {viewMode === "viewer" ? (
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Magazine List Sidebar */}
              <div className="lg:col-span-1">
                <MotionDiv
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-2xl font-bold text-black mb-6">
                    Available Issues
                  </h2>
                  <div className="space-y-4">
                    {magazines.map((magazine, index) => (
                      <Card
                        key={magazine.id}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                          selectedPdf === magazine.filename
                            ? "border-green-500 bg-green-50/50"
                            : "border-gray-200 hover:border-green-300"
                        }`}
                        onClick={() => setSelectedPdf(magazine.filename)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-black text-sm leading-tight mb-1">
                                Issue {magazine.id.split("-")[1]}
                              </h3>
                              <p className="text-xs text-gray-600 mb-2">
                                {magazine.description}
                              </p>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs text-black">
                                  {magazine.publishDate}
                                </Badge>
                                <a
                                  href={`/${magazine.filename}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-green-600 hover:text-green-700"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Download className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </MotionDiv>
              </div>

              {/* PDF Viewer */}
              <div className="lg:col-span-3">
                <MotionDiv
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card className="h-full border-gray-200">
                    <CardHeader className="border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold text-black flex items-center gap-2">
                          <FileText className="w-5 h-5 text-green-600" />
                          {magazines.find((m) => m.filename === selectedPdf)
                            ?.title || "Magazine Viewer"}
                        </CardTitle>
                        <div className="flex items-center gap-2">
                          <a
                            href={`/${selectedPdf}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in New Tab
                          </a>
                          <a
                            href={`/${selectedPdf}`}
                            download
                            className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div
                        className="relative w-full"
                        style={{ height: "800px" }}
                      >
                        <iframe
                          src={`/${selectedPdf}#toolbar=1&navpanes=1&scrollbar=1&page=1&view=FitH`}
                          className="w-full h-full border-0 rounded-b-lg"
                          title={`Flavi Dairy Magazine - ${selectedPdf}`}
                          loading="lazy"
                          onError={(e) => {
                            console.log(
                              "PDF iframe failed to load:",
                              selectedPdf
                            );
                          }}
                        />
                        {/* Fallback message */}
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-b-lg"
                          style={{ zIndex: -1 }}
                        >
                          <div className="text-center p-8">
                            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">
                              PDF Viewer
                            </h3>
                            <p className="text-gray-500 mb-4">
                              If the PDF doesn't load, you can download it
                              directly or open in a new tab.
                            </p>
                            <div className="flex items-center justify-center gap-4">
                              <a
                                href={`/${selectedPdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                Open in New Tab
                              </a>
                              <a
                                href={`/${selectedPdf}`}
                                download
                                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                              >
                                <Download className="w-4 h-4" />
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              </div>
            </div>
          ) : (
            /* Grid View */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {magazines.map((magazine, index) => (
                <MotionDiv
                  key={magazine.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                        <FileText className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-bold text-black text-lg mb-2 text-center">
                        Issue {magazine.id.split("-")[1]}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 text-center">
                        {magazine.description}
                      </p>
                      <div className="text-center mb-4">
                        <Badge variant="outline" className="text-xs">
                          {magazine.publishDate}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-2">
                        <a
                          href={`/${magazine.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Open PDF
                        </a>
                        <a
                          href={`/${magazine.filename}`}
                          download
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm"
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
          )}
        </div>
      </section>

      {/* Download All Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Download All Issues
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get access to our complete collection of magazines featuring
              industry insights, case studies, and technical articles.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {magazines.map((magazine, index) => (
                <MotionDiv
                  key={magazine.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={`/${magazine.filename}`}
                    download
                    className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                      <FileText className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-black text-sm mb-1">
                      Issue {magazine.id.split("-")[1]}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3">
                      {magazine.publishDate}
                    </p>
                    <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
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
