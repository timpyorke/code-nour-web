export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-medium">Code Nour</div>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:text-gray-600 transition-colors">Products</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>
    </main>
  );
}