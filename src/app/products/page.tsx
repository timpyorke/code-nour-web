import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { getProducts } from '@/lib/products';
import { getSectionById } from '@/lib/sections';

export default function ProductsPage() {
    const products = getProducts();
    const productsSection = getSectionById('products');

    return (
        <main className="scroll-smooth bg-white min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 min-h-[60vh] flex flex-col justify-center">
                <div className="max-w-5xl mx-auto w-full">
                    <h1 className="text-5xl md:text-6xl md:text-7xl font-semibold mb-6 tracking-tight">
                        {productsSection?.title ?? 'Our Products'}
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Explore our suite of innovative software solutions designed to amplify your productivity.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-32 px-6">
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
