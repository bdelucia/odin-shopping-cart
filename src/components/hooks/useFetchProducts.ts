import { useEffect, useState } from 'react';
import { type Product } from '../types/Product';
import { type UseFetchProductsProps } from '../types/UseFetchProductsProps';

export default function useFetchProducts({
  numOfProducts,
}: UseFetchProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PRODUCTS_TO_FETCH = numOfProducts;

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

  return { products, loading, error };
}
