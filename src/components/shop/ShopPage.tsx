import ShopCard from '../cards/ShopCard';
import { ShopCardSkeleton } from '../cards/ShopCardSkeleton';
import { motion } from 'framer-motion';
import useFetchProducts from '../hooks/useFetchProducts';
function ShopPage() {
  const NUM_OF_PRODUCTS = 20;
  const { products, loading, error } = useFetchProducts({
    numOfProducts: NUM_OF_PRODUCTS,
  });
  // show skeleton cards when loading :) this is awesome
  if (loading) {
    return (
      <div className="min-h-screen bg-base-content pt-[7vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {[...Array(NUM_OF_PRODUCTS)].map((_, index) => (
            <ShopCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-content pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: 'easeOut',
            }}
          >
            <ShopCard
              title={product.title}
              description={product.description}
              imageUrl={product.image}
              imageAlt={product.title}
              price={product.price.toFixed(2)}
              rating={product.rating}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
