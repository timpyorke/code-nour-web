"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Users, Award, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative min-h-[600px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-16 md:py-32 relative">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-[800px]">
            Transform Your Digital Vision Into Reality
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            We craft innovative software solutions that empower businesses to thrive in the digital age. From custom development to enterprise solutions.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
            <p className="text-muted-foreground">Projects Delivered</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">50M+</h3>
            <p className="text-muted-foreground">Lines of Code</p>
          </Card>
          <Card className="p-6 text-center">
            <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </Card>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Code2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
              <p className="text-muted-foreground">
                Tailored software solutions built to address your unique business challenges.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
              <p className="text-muted-foreground">
                Scalable enterprise applications that streamline operations and boost productivity.
              </p>
            </Card>
            <Card className="p-6">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">
                Strategic guidance and implementation to modernize your business.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">contact@codenour.com</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">123 Tech Street, Silicon Valley, CA</p>
          </div>
        </div>
      </div>
    </main>
  );
}