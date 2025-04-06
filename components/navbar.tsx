"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold">Code Nour</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/solutions" className="text-sm font-medium transition-colors hover:text-primary">
              Solutions
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Get Started</Button>
          </div>

          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/solutions" 
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-base font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="px-5 py-4 border-t">
            <div className="flex flex-col space-y-3">
              <Button variant="outline" className="w-full" size="sm">
                Login
              </Button>
              <Button className="w-full" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}