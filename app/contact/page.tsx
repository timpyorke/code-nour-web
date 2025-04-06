"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <h1 className="text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contact@codenour.com</p>
              </Card>
              <Card className="p-6">
                <Phone className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
              </Card>
              <Card className="p-6">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Tech Street<br />
                  Silicon Valley, CA 94025
                </p>
              </Card>
              <Card className="p-6">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat - Sun: Closed
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <Card className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <Input placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}