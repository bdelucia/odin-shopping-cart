import { useCart } from '../context/CartContext';
import CartCard from '../cards/CartCard';
import OrderButton from './OrderButton';

function CartPage() {
  const {
    cartItems,
    cartQuantity,
    cartTotal,
    taxTotal,
    orderTotal,
    getCartQuantity,
  } = useCart();

  if (cartQuantity === 0) {
    return (
      <div className="max-w-6xl mx-auto pt-16 px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-xl text-base-content">Your cart is empty</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto pt-16 px-4">
      <div className="flex flex-col pt-4">
        <h1 className="text-3xl font-bold text-base-content border-b mb-4 pb-4">
          Your cart
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((product) => (
            <CartCard
              key={product.id || product.title}
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
        <div className="flex flex-col w-full justify-start bg-secondary text-secondary-content rounded-2xl p-6 top-20 h-fit">
          <h2 className="text-xl font-semibold mb-2 pb-4 border-b">
            Order Summary
          </h2>
          <div className="flex justify-between">
            <span>Items x{cartQuantity}</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span>
            <span>${taxTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b pb-4 mb-4">
            <span>Bob Fee (non-negotiable)</span>
            <span>${0.69}</span>
          </div>
          <div className="flex justify-between pb-4">
            <span>Order Total</span>
            <span className="font-semibold">${orderTotal.toFixed(2)}</span>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
