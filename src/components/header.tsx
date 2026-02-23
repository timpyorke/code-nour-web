export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="/" className="text-xl font-medium hover:text-gray-600 transition-colors flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/codenour_en.png" alt="Code Nour" className="w-10 h-10 object-contain" />
          Code Nour
        </a>
        <div className="flex items-center gap-8 text-base font-medium">
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
      </nav>
    </header>
  );
}
