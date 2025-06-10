import { useState } from 'react';
import { useCart } from './CartContext';

interface QuantitySelectorProps {
  value: number; // Changed from initialValue to value
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

function QuantitySelector({
  value, // Use value directly instead of internal state
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  // Remove useState - no internal state needed

  const handleDecrease = (): void => {
    const newValue = Math.max(min, value - 1);
    onChange?.(newValue);
  };

  const handleIncrease = (): void => {
    const newValue = Math.min(max, value + 1);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = parseInt(e.target.value) || min;
    const newValue = Math.max(min, Math.min(max, inputValue));
    onChange?.(newValue);
  };

  return (
    <div className="join">
      <button
        className="join-item btn btn-primary btn-soft border-primary btn-xs sm:btn-xs md:btn-xs lg:btn-sm btn-ghost btn-square"
        onClick={handleDecrease}
        disabled={value <= min}
      >
        {/* minus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
      <input
        type="number"
        className="join-item input input-primary input-xs sm:input-xs sm:w-12 md:input-xs lg:input-sm md:w-14 text-center font-semibold lg:text-lg"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
      <button
        className="join-item btn btn-primary btn-soft border-primary btn-xs md:btn-xs lg:btn-sm sm:btn-xs btn-ghost btn-square"
        onClick={handleIncrease}
        disabled={value >= max}
      >
        {/* plus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  price?: string;
};

function Card({
  title = 'Card Title',
  description = 'A card component has a figure, a body part, and inside body there are title and actions parts',
  imageUrl = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  imageAlt = 'Product Image',
  price = '39.99',
}: CardProps) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(quantity);
    setQuantity(0);
  };

  return (
    <div className="card bg-base-100 w-48 sm:w-64 lg:w-72 shadow-sm z-0">
      <figure className="h-32 sm:h-40 lg:h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6">
        <h2 className="card-title text-sm sm:text-base lg:text-lg">
          {title}
          {price && (
            <div className="badge badge-secondary badge-sm sm:badge-md">
              ${price}
            </div>
          )}
        </h2>
        <p className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
          {description}
        </p>

        <div className="card-actions flex-nowrap justify-between items-center mt-2 ">
          <QuantitySelector
            value={quantity}
            onChange={(value) => setQuantity(value)}
            min={0}
            max={10}
          />
          <button
            className="btn btn-primary btn-xs sm:btn-xs lg:btn-sm"
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
