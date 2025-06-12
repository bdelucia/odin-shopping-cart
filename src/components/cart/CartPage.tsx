import { useCart } from '../context/CartContext';
import ShopCard from '../cards/ShopCard';

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16">
      {cartItems.map((product) => (
        <ShopCard
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
        />
      ))}
    </div>
  );
}

export default CartPage;
