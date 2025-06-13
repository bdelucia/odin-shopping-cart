import { useCart } from '../context/CartContext';
import CartCard from '../cards/CartCard';

function CartPage() {
  const { cartItems, getCartQuantity } = useCart();

  return (
    <div className="flex justify-center items-center min-h-screen pt-16">
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
  );
}

export default CartPage;
