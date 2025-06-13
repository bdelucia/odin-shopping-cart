import { useCart } from '../context/CartContext';
import CartCard from '../cards/CartCard';

function CartPage() {
  const { cartItems, getCartQuantity } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen p-4 gap-4">
      <div className="md:col-span-2 space-y-2 pt-16">
        {cartItems.map((product) => (
          <CartCard
            title={product.title || 'No Title'}
            description={product.description || 'No Description'}
            image={product.image || ''}
            price={
              typeof product.price === 'number'
                ? product.price.toFixed(2)
                : parseFloat(product.price || '0').toFixed(2)
            }
            rating={{
              rate: product.rating?.rate ?? 0,
              count: product.rating?.count ?? 0,
            }}
            numOfItem={getCartQuantity(product.title)}
          />
        ))}
      </div>
      <div className="flex w-4/12 justify-start bg-black">
        <a href="">Hello</a>
      </div>
    </div>
  );
}

export default CartPage;
