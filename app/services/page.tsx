"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Laptop, Cloud, Database, File as Mobile, Settings, Users, LineChart, ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive software development and consulting services to drive your business forward.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8">
            <Code2 className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>Custom Web Applications</li>
              <li>E-commerce Solutions</li>
              <li>Progressive Web Apps</li>
              <li>API Development</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8">
            <Mobile className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Mobile Development</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>iOS Applications</li>
              <li>Android Applications</li>
              <li>Cross-platform Solutions</li>
              <li>Mobile UI/UX Design</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8">
            <Cloud className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Cloud Services</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>Cloud Migration</li>
              <li>Cloud Architecture</li>
              <li>DevOps Services</li>
              <li>Cloud Security</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8">
            <Database className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Database Services</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>Database Design</li>
              <li>Data Migration</li>
              <li>Performance Optimization</li>
              <li>Database Security</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8">
            <Users className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">IT Consulting</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>Technical Strategy</li>
              <li>Digital Transformation</li>
              <li>Technology Assessment</li>
              <li>Project Management</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-8">
            <Settings className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Maintenance</h3>
            <ul className="space-y-2 mb-6 text-muted-foreground">
              <li>Application Support</li>
              <li>Performance Monitoring</li>
              <li>Security Updates</li>
              <li>System Optimization</li>
            </ul>
            <Button className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}