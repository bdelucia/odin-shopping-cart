import React, { createContext, useState, useContext } from 'react';
import { type Product } from '../types/Product';
interface CartContextType {
  cartQuantity: number;
  cartItems: Product[];
  addToCart: (quantity: number, product: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (quantity: number, product: Product) => {
    setCartQuantity((prev) => prev + quantity);
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartQuantity, cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
