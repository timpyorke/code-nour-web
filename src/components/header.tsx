export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-lg font-medium hover:text-gray-600 transition-colors flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/codenour_en.png" alt="Code Nour" className="w-8 h-8 object-contain" />
          Code Nour
        </a>
        <div className="flex gap-8 text-sm">
          <a href="/#products" className="hover:text-gray-600 transition-colors">
            Products
          </a>
        </div>
      </nav>
    </header>
  );
}
