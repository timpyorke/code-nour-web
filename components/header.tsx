export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
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
