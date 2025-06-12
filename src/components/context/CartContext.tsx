import React, { createContext, useState, useContext } from 'react';

interface CartContextType {
  cartQuantity: number;
  addToCart: (quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (quantity: number) => {
    setCartQuantity((prev) => prev + quantity);
  };

  return (
    <CartContext.Provider value={{ cartQuantity, addToCart }}>
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
