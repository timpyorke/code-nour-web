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
        <a
          href="/products"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-black transition-colors animate-bounce p-4"
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
      </section>

      <Footer />
    </main>
  );
}
