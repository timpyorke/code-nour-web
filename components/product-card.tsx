import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { title, description, icon, gradient, colSpan, buttonVariant, buttonText } = product;

  const buttonClasses =
    buttonVariant === 'primary'
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-gray-100 text-gray-900 hover:bg-gray-200';

  const colSpanClass = colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1';
  const isMoreCard = icon === '+';

  return (
    <div
      className={`${colSpanClass} bg-white rounded-3xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      <div
        className={`aspect-[4/3] bg-gradient-to-br ${gradient.from} ${gradient.to} relative overflow-hidden transition-all duration-300 ${gradient.hoverFrom} ${gradient.hoverTo} ${
          isMoreCard ? 'flex items-center justify-center' : ''
        }`}
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
      <div className="p-8">
        <h3 className="text-2xl font-light mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="pt-4 border-t border-gray-100 flex justify-end">
          <button
            className={`${buttonClasses} px-6 py-3 rounded-full text-sm transition-colors`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
