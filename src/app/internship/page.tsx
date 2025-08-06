import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-background via-white to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Work on cutting-edge embedded systems, IoT projects, and innovative
            technology solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>• Hands-on experience with real projects</span>
            <span>• Mentorship from industry experts</span>
            <span>• Flexible work arrangements</span>
            <span>• Potential for full-time opportunities</span>
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-foreground">
                  Internship Application
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Join our team and work on cutting-edge embedded systems and IoT projects
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">What We're Looking For</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Students pursuing Electronics, Computer Science, or related fields</li>
                      <li>• Basic knowledge of C/C++, Python, or similar programming languages</li>
                      <li>• Interest in embedded systems, IoT, or hardware development</li>
                      <li>• Strong problem-solving and analytical skills</li>
                      <li>• Good communication and teamwork abilities</li>
                      <li>• Portfolio or GitHub profile showcasing projects (preferred)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">What You'll Work On</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Microcontroller programming and firmware development</li>
                      <li>• PCB design and hardware prototyping</li>
                      <li>• IoT device development and cloud integration</li>
                      <li>• Sensor integration and data processing</li>
                      <li>• Real-time systems and embedded Linux</li>
                      <li>• Documentation and technical writing</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">How to Apply</h3>
                  <p className="text-muted-foreground mb-4">
                    To apply for our internship program, please send us your resume, portfolio, and a cover letter explaining your interest in embedded systems and IoT development.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="flex-1">
                      <a href="mailto:careers@swasau.com?subject=Internship Application">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Application
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">careers@swasau.com</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What You'll Gain
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning experience in embedded systems and IoT
              development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Practical Experience
              </h3>
              <p className="text-muted-foreground">
                Work on real-world projects with actual hardware and software
                development
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Learn from experienced engineers and industry professionals
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
              <p className="text-muted-foreground">
                Build your portfolio and gain skills that are in high demand
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Contribute to cutting-edge technology solutions and products
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-muted-foreground">
                Connect with professionals in the embedded systems industry
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
              <p className="text-muted-foreground">
                Potential for full-time positions and long-term career
                development
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
