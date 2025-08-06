"use client";

import { MotionDiv } from "@/components/ui/motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from "lucide-react";

// Static data for selected interns
const selectedInterns = [
  {
    id: 1,
    name: "Priya Sharma",
    qualification: "B.Tech Electronics & Communication",
    skills: "C/C++, Arduino, PCB Design, IoT",
    photoUrl: "",
    github: "https://github.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
    portfolio: "https://priyasharma.dev",
    selectedAt: "2024-01-15",
    adminNotes:
      "Excellent problem-solving skills and strong foundation in embedded systems. Led the smart home automation project.",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    qualification: "M.Tech VLSI Design",
    skills: "Verilog, FPGA, Digital Design, Python",
    photoUrl: "",
    github: "https://github.com/rahulkumar",
    linkedin: "https://linkedin.com/in/rahulkumar",
    portfolio: "",
    selectedAt: "2024-02-01",
    adminNotes:
      "Specialized in FPGA-based system design. Contributed significantly to our high-speed data processing module.",
  },
  {
    id: 3,
    name: "Anjali Patel",
    qualification: "B.Tech Computer Science",
    skills: "Python, Machine Learning, Embedded Linux, Docker",
    photoUrl: "",
    github: "https://github.com/anjali-patel",
    linkedin: "https://linkedin.com/in/anjali-patel",
    portfolio: "https://anjalipatel.tech",
    selectedAt: "2024-01-20",
    adminNotes:
      "Strong background in AI/ML with focus on edge computing. Developed our intelligent sensor fusion algorithm.",
  },
];

export function SelectedInterns() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <MotionDiv
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Meet Our Selected Interns
          </h2>
          <p className="text-xl text-black/70 max-w-3xl mx-auto">
            Talented individuals who have joined our team to work on exciting
            embedded systems and IoT projects
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedInterns.map((intern, index) => (
            <MotionDiv
              key={intern.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                    {intern.photoUrl ? (
                      <img
                        src={intern.photoUrl}
                        alt={intern.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-secondary">
                        {intern.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold text-black">
                    {intern.name}
                  </CardTitle>
                  <CardDescription className="text-black/70">
                    {intern.qualification}
                  </CardDescription>
                  {intern.selectedAt && (
                    <Badge className="bg-green-100 text-green-800 mt-2 border-green-200">
                      Joined {formatDate(intern.selectedAt)}
                    </Badge>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {intern.skills.split(",").map((skill, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-gray-300 text-black"
                        >
                          {skill.trim()}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {intern.adminNotes && (
                    <div>
                      <h4 className="font-semibold text-black mb-2">About</h4>
                      <p className="text-sm text-black/70">
                        {intern.adminNotes}
                      </p>
                    </div>
                  )}

                  <div className="flex justify-center gap-2 pt-4">
                    {intern.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 text-black hover:bg-gray-50"
                      >
                        <a
                          href={intern.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {intern.linkedin && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 text-black hover:bg-gray-50"
                      >
                        <a
                          href={intern.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {intern.portfolio && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-gray-300 text-black hover:bg-gray-50"
                      >
                        <a
                          href={intern.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        <MotionDiv
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-black/70 mb-4">Want to join our team?</p>
          <Button asChild size="lg" className="btn-minimal text-black">
            <a href="/internship">Apply for Internship</a>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}
