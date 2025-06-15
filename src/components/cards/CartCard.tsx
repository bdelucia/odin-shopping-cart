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
      <figure className="bg-gray-200 overflow-hidden rounded-t-xl md:rounded-t-none md:rounded-l-xl w-full md:min-w-48 md:max-w-48 flex justify-center items-center">
        <img src={image} className="h-48 object-contain p-4" />
      </figure>
      <div className="card-body pb-0 sm:pb-4">
        <h2 className="card-title text-sm sm:text-base lg:text-lg line-clamp-1">
          {title}
        </h2>
        <div className="flex flex-col gap-12">
          {price && (
            <div className="badge badge-secondary badge-sm sm:badge-md">
              ${price}
            </div>
          )}
          <div className="pb-4 sm:pb-4 md:pb-0 lg:pb-0">
            <CartQuantitySelector
              value={currentQuantity}
              onChange={handleQuantityChange}
              min={0}
              max={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
