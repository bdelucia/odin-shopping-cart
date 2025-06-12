import { useState } from 'react';
import { useCart } from './CartContext';
import QuantitySelector from './cards/QuantitySelector';

type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  price?: string;
};

function ShopCard({
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
    <div className="flex flex-col bg-base-100 shadow-sm z-0 rounded-2xl border-3 border-base-content box-border hover:border-3 hover:border-accent transition-colors duration-300">
      <figure className="bg-white overflow-hidden rounded-t-xl">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 object-contain p-4 rounded-2xl "
        />
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6">
        <h2 className="card-title text-sm sm:text-base lg:text-lg line-clamp-1">
          {title}
        </h2>
        <p className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
        {price && (
          <div className="badge badge-secondary badge-sm sm:badge-md">
            ${price}
          </div>
        )}
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

export default ShopCard;
