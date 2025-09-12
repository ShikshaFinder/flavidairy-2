"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { 
  Factory, 
  Cog, 
  Layout, 
  BarChart3, 
  FlaskConical,
  Target,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ConsultancyPage() {
  const services = [
    {
      title: "Turnkey Project Solutions",
      icon: Factory,
      description: "Complete project execution from greenfield to brownfield",
      items: [
        "Greenfield Projects – Complete setup of new dairy/food processing units",
        "Brownfield Projects – Expansion or modernization of existing facilities",
        "Detailed Project Report (DPR)",
        "Tender Preparation (Engineering Documentation)"
      ]
    },
    {
      title: "Engineering & Technical Consultancy", 
      icon: Cog,
      description: "Comprehensive technical design and planning services",
      items: [
        "Project Engineering & Technical Design",
        "Customized Machinery Planning", 
        "Process & Instrumentation Diagrams (P&ID)",
        "Bill of Quantity (BoQ)",
        "Equipment Layout Planning",
        "Retrofitting of existing plants",
        "Line expansions/ Products portfolio expansion",
        "Automation & Mechanization Strategy (Dairy & Food Industry)"
      ]
    },
    {
      title: "Facility and Operational Setup",
      icon: Layout,
      description: "Complete facility design and operational guidance",
      items: [
        "Facility Layout Design & Optimization",
        "Production Line Planning (Dairy & Food)",
        "Installation & Commissioning Support",
        "Maintenance and Operational Guidance",
        "Lab Setup (Quality Control & R&D)",
        "Technical Training & Internship Programs"
      ]
    },
    {
      title: "Business and Technical Advisory",
      icon: BarChart3,
      description: "Strategic business and technical consulting",
      items: [
        "Business and Product Strategy",
        "Cost & Resource Optimization",
        "Valuation and Due Diligence",
        "Benchmarking and Market Intelligence",
        "Reverse Engineering"
      ]
    },
    {
      title: "Research & Development (R&D)",
      icon: FlaskConical,
      description: "Innovation and product development services",
      items: [
        "New Product Development (NPD)",
        "Reverse Engineering / Re-engineering",
        "Functional / Special Ingredient Development",
        "Process Design & Validation",
        "Hurdle Technology Implementation",
        "Shelf-Life Enhancement",
        "Legal & Nutritional Food Claims",
        "Nutrition Labelling Support",
        "Portfolio Expansion (Value-Added Products)",
        "R&D Consulting (On-site and Remote)"
      ]
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-default)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '80px', paddingBottom: '48px', backgroundColor: 'var(--bg-neutral-light)', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-default)' }}>
            Consultancy Services
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '32px', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 32px' }}>
            Expert consultation, turnkey execution, and strategic guidance for
            dairy and food processing industries
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ 
              backgroundColor: 'var(--color-primary)', 
              color: 'var(--text-on-primary)', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              <Link href="https://wa.me/917202033384?text=Hi,%20I%20am%20interested%20in%20your%20consultancy%20services.%20Please%20provide%20more%20information." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-on-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Get Consultation
                <ArrowRight size={16} />
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '64px 0', backgroundColor: 'var(--bg-default)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--text-default)' }}>
              Our Consultancy Services
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
              From concept to commissioning, we provide comprehensive
              consultancy services tailored to your specific needs
            </p>
          </div>
          
          <div style={{ display: 'grid', gap: '32px', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))' }}>
            {services.map((service, index) => (
              <div key={index} style={{ 
                border: '1px solid var(--border-default)', 
                borderRadius: '12px', 
                padding: '24px',
                backgroundColor: 'var(--bg-surface)',
                boxShadow: 'var(--shadow-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: 'rgba(11, 166, 223, 0.1)', 
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-cyan)'
                  }}>
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--text-default)', marginBottom: '8px' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div style={{ paddingLeft: '16px' }}>
                  {service.items.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <CheckCircle size={16} style={{ color: 'var(--success)', marginTop: '2px', flexShrink: 0 }} />
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
