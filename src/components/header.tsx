'use client';

import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="/" className="text-xl font-medium hover:text-gray-600 transition-colors flex items-center gap-3 relative z-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/codenour_en.png" alt="Code Nour" className="w-10 h-10 object-contain" />
            Code Nour
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <a href="/" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Home
            </a>
            <a href="/products" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Products
            </a>
            <a href="/services" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              Services
            </a>
            <a href="/about" className="px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
              About
            </a>
            <a
              href="mailto:codenour.dev@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Navigation Toggle (Hamburger) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-gray-900 relative z-50 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'mb-1.5'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col pt-32 px-6 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-6 text-2xl font-medium">
          <a href="/" onClick={toggleMenu} className="py-2 hover:text-gray-600 transition-colors border-b border-gray-100">
            Home
          </a>
          <a href="/products" onClick={toggleMenu} className="py-2 hover:text-gray-600 transition-colors border-b border-gray-100">
            Products
          </a>
          <a href="/services" onClick={toggleMenu} className="py-2 hover:text-gray-600 transition-colors border-b border-gray-100">
            Services
          </a>
          <a href="/about" onClick={toggleMenu} className="py-2 hover:text-gray-600 transition-colors border-b border-gray-100">
            About
          </a>
          <a
            href="mailto:codenour.dev@gmail.com"
            onClick={toggleMenu}
            className="mt-8 inline-flex items-center justify-center py-4 bg-black text-white rounded-full font-medium text-lg w-full"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
