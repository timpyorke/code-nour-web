import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getProductById, getAllProductIds } from '@/lib/products';
import { ProductDetailTabs } from '@/components/product-detail-tabs';

export async function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <main className="scroll-smooth">
      <Header />

      {/* Cover */}
      <div
        className={`pt-16 w-full h-72 md:h-96 relative overflow-hidden ${
          product.coverImage
            ? ''
            : `bg-gradient-to-br ${product.gradient.from} ${product.gradient.to}`
        } flex items-center justify-center`}
      >
        {product.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.coverImage}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-8xl select-none">{product.icon}</span>
        )}
      </div>

      {/* Product Info */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <a
              href="/#products"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors mb-3 inline-block"
            >
              ← Products
            </a>
            <h1 className="text-4xl font-light mb-3">{product.title}</h1>
            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-shrink-0">
            {product.secondaryButtonText &&
              (product.secondaryButtonUrl ? (
                <a
                  href={product.secondaryButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                >
                  {product.secondaryButtonText}
                </a>
              ) : (
                <button
                  disabled
                  className="px-6 py-3 rounded-full text-sm bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  {product.secondaryButtonText}
                </button>
              ))}
            {product.primaryButtonText &&
              (product.primaryButtonUrl ? (
                <a
                  href={product.primaryButtonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-sm bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  {product.primaryButtonText}
                </a>
              ) : (
                <button
                  disabled
                  className="px-6 py-3 rounded-full text-sm bg-gray-300 text-gray-500 cursor-not-allowed"
                >
                  {product.primaryButtonText}
                </button>
              ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white pt-6">
        <ProductDetailTabs product={product} />
      </div>

      <Footer />
    </main>
  );
}
