import Link from 'next/link';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

interface ButtonProps {
  text: string;
  url?: string;
  variant: 'primary' | 'secondary';
}

function ActionButton({ text, url, variant }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-full text-sm transition-colors';
  const variantClasses = variant === 'primary'
    ? 'bg-black text-white hover:bg-gray-800'
    : 'bg-gray-100 text-gray-900 hover:bg-gray-200';

  const className = `${variantClasses} ${baseClasses}`;

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={className} aria-disabled>
      {text}
    </button>
  );
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, description, icon, gradient, colSpan, primaryButtonText, primaryButtonUrl, secondaryButtonText, secondaryButtonUrl, tags } = product;

  const colSpanClass = colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';
  const isMoreCard = icon === '+';

  return (
    <div
      className={`${colSpanClass} bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 border-2 border-gray-100 hover:border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col min-h-[480px] relative`}
    >
      {!isMoreCard && (
        <Link
          href={`/product/${product.id}`}
          className="absolute inset-0 z-0"
          aria-label={`View ${title} details`}
        />
      )}
      <div
        className={`h-64 bg-gradient-to-br ${gradient.from} ${gradient.to} relative overflow-hidden transition-all duration-300 ${gradient.hoverFrom} ${gradient.hoverTo} ${isMoreCard ? 'flex items-center justify-center' : ''
          } flex-shrink-0`}
      >
        {isMoreCard ? (
          <div className="text-center">
            <div className="text-5xl mb-4">{icon}</div>
            <p className="text-sm text-gray-500">More apps</p>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            {icon}
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-grow justify-end">
        <div className="mb-4">
          <h3 className="text-2xl font-light mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center gap-3 relative z-10">
          <div className="flex flex-wrap gap-2">
            {tags && tags.length > 0 && tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            {secondaryButtonText && (
              <ActionButton
                text={secondaryButtonText}
                url={secondaryButtonUrl}
                variant="secondary"
              />
            )}
            {primaryButtonText && (
              <ActionButton
                text={primaryButtonText}
                url={primaryButtonUrl}
                variant="primary"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

