import { useState } from 'react';

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

function QuantitySelector({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState<number>(initialValue);

  const handleDecrease = (): void => {
    const newValue = Math.max(min, quantity - 1);
    setQuantity(newValue);
    onChange?.(newValue);
  };

  const handleIncrease = (): void => {
    const newValue = Math.min(max, quantity + 1);
    setQuantity(newValue);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value) || min;
    const newValue = Math.max(min, Math.min(max, value));
    setQuantity(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="join">
      <button
        className="join-item btn btn-sm btn-ghost btn-square"
        onClick={handleDecrease}
        disabled={quantity <= min}
      >
        −
      </button>
      <input
        type="number"
        className="join-item input input-bordered input-sm w-16 text-center"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
      <button
        className="join-item btn btn-sm btn-ghost btn-square"
        onClick={handleIncrease}
        disabled={quantity >= max}
      >
        +
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
  onButtonClick?: () => void;
  price?: string;
};

function Card({
  title = 'Card Title',
  description = 'A card component has a figure, a body part, and inside body there are title and actions parts',
  imageUrl = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  imageAlt = 'Product Image',
  buttonText = 'Add to Cart',
  onButtonClick = () => {},
  price = '39.99',
}: CardProps) {
  const [quantity, setQuantity] = useState(0); // Changed to 1 as default

  const handleAddToCart = () => {
    onButtonClick(quantity); // Pass quantity to the onClick handler
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

        <div className="card-actions justify-between items-center mt-2">
          <QuantitySelector
            initialValue={quantity}
            onChange={(value) => setQuantity(value)}
            min={0}
            max={10}
          />
          <button
            className="btn btn-primary btn-xs sm:btn-sm lg:btn-md"
            onClick={handleAddToCart}
            disabled={quantity === 0}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
