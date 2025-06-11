import { useState, useEffect } from 'react';
import ShopCard from '../ShopCard';
import CardSkeleton from '../CardSkeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PRODUCTS_TO_FETCH = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${PRODUCTS_TO_FETCH}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // show skeleton cards when loading :) this is awesome
  if (loading) {
    return (
      <div className="min-h-screen bg-base-content pt-[7vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {[...Array(PRODUCTS_TO_FETCH)].map((_, index) => (
            <CardSkeleton key={index} />
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
    <div className="min-h-screen bg-base-content pt-[7vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 custom:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {products.map((product) => (
          <ShopCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.image}
            imageAlt={product.title}
            price={product.price.toFixed(2)}
          />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
