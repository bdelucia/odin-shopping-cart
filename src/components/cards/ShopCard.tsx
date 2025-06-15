import { useState } from 'react';
import { useCart } from '../context/CartContext';
import QuantitySelector from './QuantitySelector';
import { type CardProps } from '../types/CardProps';
import { type Product } from '../types/Product';

function ShopCard({ title, description, image, price, rating }: CardProps) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product: Product = {
      title,
      image,
      description,
      price,
      rating,
      numOfItem: quantity,
    };
    addToCart(quantity, product);
    setQuantity(0);
  };

  return (
    <div className="flex flex-col bg-base-100 shadow-sm z-0 rounded-2xl border-3 border-base-content box-border hover:border-3 hover:border-accent transition-colors duration-300">
      <figure className="bg-gray-200 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain p-4 rounded-2xl"
        />
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
        <h2 className="card-title text-sm sm:text-base lg:text-lg line-clamp-1">
          {title}
        </h2>
        <p className="h-16 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3 flex-grow">
          {description}
        </p>
        <div className="flex gap-2">
          {price && (
            <div className="badge badge-secondary badge-sm sm:badge-md">
              <span className="sr-only">Price:</span> ${price}
            </div>
          )}
          <div className="badge badge-accent badge-sm sm:badge-md">
            <div className="join gap-1.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="size-[1.5em] join-item"
                aria-hidden="true"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="#FFD700"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="join-item">
                <span className="sr-only">Rating:</span>
                {rating?.rate?.toFixed(1)}/5.0
              </div>
            </div>
            <span className="sr-only">from</span>({rating?.count})
            <span className="sr-only">reviews</span>
          </div>
        </div>
        <div className="card-actions flex-nowrap justify-between items-center mt-2">
          <QuantitySelector
            value={quantity}
            onChange={(value) => setQuantity(value)}
            min={0}
            max={10}
            aria-label={`Quantity for ${title}`}
          />
          <button
            className="btn btn-primary btn-xs sm:btn-xs lg:btn-sm"
            onClick={handleAddToCart}
            disabled={quantity === 0}
            type="button"
            aria-label={`Add ${quantity} ${title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
