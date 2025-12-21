export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-lg font-medium">Code Nour</div>
          <div className="flex gap-8 text-sm">
            <a href="#work" className="hover:text-gray-600 transition-colors">Work</a>
            <a href="#services" className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-80 h-80 mx-auto bg-gray-100 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-6xl">⚡</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Software<br />that works
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We build tools that solve real problems.
          </p>
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
            Start project
          </button>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Custom built
            </h2>
            <p className="text-xl text-gray-600">
              Every line of code crafted for your specific needs.
            </p>
          </div>
          <div className="bg-gray-50 aspect-square rounded-3xl flex items-center justify-center">
            <div className="text-8xl">🔧</div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-50 aspect-square rounded-3xl flex items-center justify-center lg:order-first">
            <div className="text-8xl">⚡</div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Lightning fast
            </h2>
            <p className="text-xl text-gray-600">
              Performance-first architecture that scales.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 3 */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Always reliable
            </h2>
            <p className="text-xl text-gray-600">
              Built to work, tested to last.
            </p>
          </div>
          <div className="bg-gray-50 aspect-square rounded-3xl flex items-center justify-center">
            <div className="text-8xl">🛡️</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-16">
            What we build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <h3 className="text-xl font-medium mb-3">Web Applications</h3>
              <p className="text-gray-600">Modern, responsive web apps</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">APIs & Backend</h3>
              <p className="text-gray-600">Robust server infrastructure</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Mobile Apps</h3>
              <p className="text-gray-600">Native and cross-platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to start?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Let's discuss your project.
          </p>
          <a
            href="mailto:hello@codenour.com"
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors inline-block"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}