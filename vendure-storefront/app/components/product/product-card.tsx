import { TronButton } from '~/components/ui/tron-button';
import { Product } from '~/generated/graphql';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.featuredAsset?.preview || '/placeholder.png'}
          alt={product.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/products/${product.slug}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product.variants[0]?.priceWithTax / 100}
        </p>
      </div>
      <div className="mt-4">
        <TronButton
          onClick={() => onAddToCart(product.variants[0]?.id || '')}
          size="sm"
        >
          Add to Cart
        </TronButton>
      </div>
    </div>
  );
} 