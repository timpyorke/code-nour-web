import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Header />

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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
