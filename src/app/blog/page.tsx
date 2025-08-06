"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/ui/motion";
import {
  Factory,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Dairy Processing: Automation and AI Integration",
      excerpt:
        "Discover how artificial intelligence and advanced automation are revolutionizing dairy processing operations, improving efficiency, and ensuring product quality.",
      content:
        "The dairy industry is undergoing a significant transformation with the integration of artificial intelligence and advanced automation technologies. These innovations are not just improving efficiency but also ensuring consistent product quality and reducing operational costs...",
      author: "Rajesh Patel",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "technology",
      tags: ["Automation", "AI", "Dairy Processing", "Innovation"],
      image: "/images/blog/ai-dairy.jpg",
      featured: true,
    },
    {
      id: 2,
      title:
        "Sustainable Food Processing: Green Technologies for a Better Tomorrow",
      excerpt:
        "Explore sustainable practices and green technologies that are making food processing more environmentally friendly while maintaining efficiency.",
      content:
        "Sustainability has become a crucial focus in the food processing industry. Companies are increasingly adopting green technologies and sustainable practices to reduce their environmental impact while maintaining operational efficiency...",
      author: "Priya Sharma",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "sustainability",
      tags: [
        "Sustainability",
        "Green Technology",
        "Food Processing",
        "Environment",
      ],
      image: "/images/blog/sustainable-processing.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Quality Control in Food Processing: Best Practices and Standards",
      excerpt:
        "Learn about the essential quality control measures and standards that ensure food safety and product consistency in processing operations.",
      content:
        "Quality control is the backbone of any successful food processing operation. Implementing robust quality control measures ensures food safety, maintains product consistency, and builds consumer trust...",
      author: "Amit Kumar",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "quality",
      tags: ["Quality Control", "Food Safety", "Standards", "Best Practices"],
      image: "/images/blog/quality-control.jpg",
      featured: false,
    },
    {
      id: 4,
      title:
        "Energy Efficiency in Processing Plants: Cost Savings and Environmental Benefits",
      excerpt:
        "Discover how energy-efficient technologies can significantly reduce operational costs while contributing to environmental sustainability.",
      content:
        "Energy efficiency is not just about cost savings; it's about creating a sustainable future for the processing industry. Modern processing plants are adopting energy-efficient technologies that offer both economic and environmental benefits...",
      author: "Sneha Reddy",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "efficiency",
      tags: [
        "Energy Efficiency",
        "Cost Savings",
        "Sustainability",
        "Technology",
      ],
      image: "/images/blog/energy-efficiency.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "SCADA Systems: Revolutionizing Process Control and Monitoring",
      excerpt:
        "Understand how SCADA systems are transforming process control and monitoring in modern processing facilities.",
      content:
        "SCADA (Supervisory Control and Data Acquisition) systems have become indispensable in modern processing facilities. These systems provide real-time monitoring, control, and data acquisition capabilities that enhance operational efficiency...",
      author: "Vikram Singh",
      date: "2023-12-20",
      readTime: "8 min read",
      category: "technology",
      tags: ["SCADA", "Process Control", "Monitoring", "Automation"],
      image: "/images/blog/scada-systems.jpg",
      featured: false,
    },
    {
      id: 6,
      title:
        "Food Safety Regulations: Staying Compliant in a Changing Landscape",
      excerpt:
        "Navigate the complex world of food safety regulations and learn how to maintain compliance in an evolving regulatory environment.",
      content:
        "Food safety regulations are constantly evolving to address new challenges and ensure consumer protection. Staying compliant requires a proactive approach and understanding of current and emerging regulations...",
      author: "Anjali Patel",
      date: "2023-12-15",
      readTime: "5 min read",
      category: "compliance",
      tags: ["Food Safety", "Regulations", "Compliance", "Standards"],
      image: "/images/blog/food-safety.jpg",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Posts", count: blogPosts.length },
    {
      id: "technology",
      name: "Technology",
      count: blogPosts.filter((post) => post.category === "technology").length,
    },
    {
      id: "sustainability",
      name: "Sustainability",
      count: blogPosts.filter((post) => post.category === "sustainability")
        .length,
    },
    {
      id: "quality",
      name: "Quality Control",
      count: blogPosts.filter((post) => post.category === "quality").length,
    },
    {
      id: "efficiency",
      name: "Efficiency",
      count: blogPosts.filter((post) => post.category === "efficiency").length,
    },
    {
      id: "compliance",
      name: "Compliance",
      count: blogPosts.filter((post) => post.category === "compliance").length,
    },
  ];

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              Blog & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Industry Insights &
              <span className="text-secondary"> Expert Knowledge</span>
            </h1>
            <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trends, technologies, and best
              practices in dairy and food processing
            </p>
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
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <MotionDiv
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Featured Article
              </h2>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="max-w-4xl mx-auto hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center">
                  <div className="w-32 h-32 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Factory className="w-16 h-16 text-secondary" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-secondary/10 text-black border-secondary/20">
                      {
                        categories.find(
                          (cat) => cat.id === featuredPost.category
                        )?.name
                      }
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-black/60">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-black/60">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">
                    {featuredPost.title}
                  </CardTitle>
                  <p className="text-black/70">{featuredPost.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-black/70 mb-6">{featuredPost.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-black/60">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <Button
                      className="bg-secondary hover:bg-secondary/90 text-black border-0"
                      asChild
                    >
                      <Link href={`/blog/${featuredPost.id}`}>
                        <span className="flex items-center gap-2">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
              Latest Articles
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Insights, trends, and expert knowledge from the processing
              industry
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <MotionDiv
                key={post.id}
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
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-secondary/10 text-black border-secondary/20">
                        {
                          categories.find((cat) => cat.id === post.category)
                            ?.name
                        }
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-black/60">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-black">
                      {post.title}
                    </CardTitle>
                    <p className="text-black/70 text-sm">{post.excerpt}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-gray-300 text-black"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-black/60">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-black border-0"
                        asChild
                      >
                        <Link href={`/blog/${post.id}`}>
                          <span className="flex items-center gap-1">
                            Read
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <MotionDiv
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Stay Updated
            </h2>
            <p className="text-xl text-black/70 mb-8">
              Subscribe to our newsletter for the latest industry insights and
              updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-black border-0"
                asChild
              >
                <Link href="/contact">
                  <span className="flex items-center gap-2">
                    Subscribe Now
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
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <Footer />
    </main>
  );
}
