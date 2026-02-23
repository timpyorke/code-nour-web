import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/products';
import { getSectionById } from '@/lib/sections';

export default function Home() {
  const products = getProducts();
  const hero = getSectionById('hero');
  const productsSection = getSectionById('products');

  return (
    <main className="scroll-smooth">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 min-h-[100vh] flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">
            {hero?.title}
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            {hero?.subtitle}
          </p>
        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center">
          <a
            href="/products"
            className="text-gray-400 hover:text-black transition-colors animate-bounce p-4"
            aria-label="View our products"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Software Philosophy</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Every application is built with a relentless focus on quality, performance, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-[#E3FF37] text-black rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="text-2xl">⚡️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fast & Native</h3>
              <p className="text-gray-600 leading-relaxed">
                Zero compromises on performance. We utilize native components and optimized runtimes to ensure every interaction feels instant.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-[#FF7034] text-black rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Elegant Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Beautiful, intuitive interfaces that users love. We sweat the details, from typography to micro-animations, because design matters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl border-2 border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Solo Crafted</h3>
              <p className="text-gray-600 leading-relaxed">
                Built by a dedicated solo developer. This means direct communication, rapid iteration, and a personal commitment to your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
