import { useCart } from '../context/CartContext';
import CartQuantitySelector from './CartQuantitySelector';
import { type Product } from '../types/Product';

function CartCard({ title, price, image }: Product) {
  const { getCartQuantity, updateCartQuantity, removeFromCart } = useCart();

  // Get the actual quantity from cart context
  const currentQuantity = getCartQuantity(title || '');

  const handleQuantityChange = (newQuantity: number) => {
    if (!title) return;
    if (newQuantity === 0) {
      // Remove item from cart if quantity is 0
      removeFromCart(title);
    } else {
      // Update cart quantity
      updateCartQuantity(title, newQuantity);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-base-100 shadow-sm z-0 rounded-2xl border-3 border-base-content box-border hover:border-3 hover:border-accent transition-colors duration-300">
      <figure className="bg-white overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl w-full md:min-w-48 md:max-w-48 flex justify-center items-center">
        <img src={image} className="h-48 object-contain" />
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6 gap-4">
        <h2 className="card-title text-sm sm:text-base lg:text-lg line-clamp-1">
          {title}
        </h2>
        <div className="flex flex-grow">
          {price && (
            <div className="badge badge-secondary badge-sm sm:badge-md">
              ${price}
            </div>
          )}
        </div>
        <div className="">
          <CartQuantitySelector
            value={currentQuantity}
            onChange={handleQuantityChange}
            min={0}
            max={10}
          />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
