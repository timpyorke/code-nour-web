"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud, File as Mobile, Lock, Cpu, ArrowRight } from "lucide-react";

export default function Solutions() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative Solutions for Modern Businesses
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Discover our comprehensive suite of software solutions designed to transform your business operations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <Code2 className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Software Development</h3>
            <p className="text-muted-foreground mb-4">
              Bespoke solutions tailored to your specific business needs and challenges.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <Database className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Database Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Robust database architecture and management systems for efficient data handling.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <Cloud className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cloud Services</h3>
            <p className="text-muted-foreground mb-4">
              Scalable cloud solutions for modern business needs and digital transformation.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <Mobile className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
            <p className="text-muted-foreground mb-4">
              Cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Advanced security measures to protect your digital assets and data.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <Card className="p-6">
            <Cpu className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-muted-foreground mb-4">
              Intelligent solutions powered by cutting-edge AI and machine learning technologies.
            </p>
            <Button variant="outline" className="w-full">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
}