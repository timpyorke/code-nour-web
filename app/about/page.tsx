"use client";

import { Card } from "@/components/ui/card";
import { Award, Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Code Nour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Leading the way in innovative software solutions since 2010.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2010, Code Nour has been at the forefront of digital innovation, helping businesses transform their operations through cutting-edge technology solutions.
            </p>
            <p className="text-muted-foreground mb-4">
              Our team of expert developers, designers, and consultants work together to deliver exceptional results that drive business growth and success.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <Target className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Innovation</h3>
                <p className="text-sm text-muted-foreground">Pushing boundaries in technology</p>
              </Card>
              <Card className="p-4">
                <Users className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Collaboration</h3>
                <p className="text-sm text-muted-foreground">Working together for success</p>
              </Card>
              <Card className="p-4">
                <Award className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Excellence</h3>
                <p className="text-sm text-muted-foreground">Delivering quality solutions</p>
              </Card>
              <Card className="p-4">
                <Rocket className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Growth</h3>
                <p className="text-sm text-muted-foreground">Continuous improvement</p>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}