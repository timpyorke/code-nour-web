export default function Home() {
  return (
    <main className="scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-medium">Code Nour</div>
          <div className="flex gap-8 text-sm">
            <a href="#products" className="hover:text-gray-600 transition-colors">Products</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
            Software for everyone
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Powerful apps that amplify your.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 - Find Parking (2 columns) */}
            <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden transition-all duration-300 group-hover:from-blue-100 group-hover:to-blue-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  �️
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Find Parking
                </h3>
                <p className="text-gray-600 mb-6">
                  Never circle for parking again.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 - Image Converter (1 column) */}
            <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden transition-all duration-300 group-hover:from-purple-100 group-hover:to-purple-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  🖼️
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Image Converter
                </h3>
                <p className="text-gray-600 mb-6">
                  Convert any format instantly.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 - Cozy Sound (1 column) */}
            <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden transition-all duration-300 group-hover:from-green-100 group-hover:to-green-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  🎵
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Cozy Sound
                </h3>
                <p className="text-gray-600 mb-6">
                  Ambient sounds for focus.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 - Financial Planning (2 columns) */}
            <div className="md:col-span-2 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden transition-all duration-300 group-hover:from-orange-100 group-hover:to-orange-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  💰
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Financial Planning
                </h3>
                <p className="text-gray-600 mb-6">
                  Track spending, plan ahead.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 5 - Sunday Super League (1 column) */}
            <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden transition-all duration-300 group-hover:from-red-100 group-hover:to-red-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  ⚽
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Sunday Super League
                </h3>
                <p className="text-gray-600 mb-6">
                  Organize your local league.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 6 - Travel Guide (1 column) */}
            <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-teal-100 relative overflow-hidden transition-all duration-300 group-hover:from-teal-100 group-hover:to-teal-200">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  ✈️
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  Travel Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore cities like a local.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition-colors">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* Product 7 - More Products Card */}
            <div className="md:col-span-1 bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden transition-all duration-300 group-hover:from-gray-100 group-hover:to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">+</div>
                  <p className="text-sm text-gray-500">More apps</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-3">
                  More coming soon
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay tuned for new products.
                </p>
                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    View all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium mb-4">Code Nour</h3>
              <p className="text-sm text-gray-600">
                Software for everyone.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-medium mb-4">Products</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#products" className="hover:text-gray-900 transition-colors">Find Parking</a></li>
                <li><a href="#products" className="hover:text-gray-900 transition-colors">Image Converter</a></li>
                <li><a href="#products" className="hover:text-gray-900 transition-colors">Cozy Sound</a></li>
                <li><a href="#products" className="hover:text-gray-900 transition-colors">Financial Planning</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-medium mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="/about" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-medium mb-4">Get in touch</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="mailto:hello@codenour.com" className="hover:text-gray-900 transition-colors">codenour@gmail.com</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 Code Nour. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}