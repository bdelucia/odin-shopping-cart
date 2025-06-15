import React, { createContext, useState, useContext, useMemo } from 'react';
import { type Product } from '../types/Product';

interface CartContextType {
  cartQuantity: number;
  cartItems: Product[];
  cartTotal: number;
  taxTotal: number;
  orderTotal: number;
  addToCart: (quantity: number, product: Product) => void;
  getCartQuantity: (productTitle: string) => number;
  updateCartQuantity: (productTitle: string, newQuantity: number) => void;
  removeFromCart: (productTitle: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Calculate total quantity from cart items instead of tracking separately
  const cartQuantity = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.numOfItem, 0);
  }, [cartItems]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + Number(item.price) * item.numOfItem,
      0.0
    );
  }, [cartItems]);

  const taxTotal = useMemo(() => {
    return cartTotal * 0.098;
  }, [cartTotal]);

  const orderTotal = useMemo(() => {
    return cartTotal + taxTotal + 0.69;
  }, [cartTotal, taxTotal]);

  const addToCart = (quantity: number, product: Product) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.title === product.title
      );

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...prev];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          numOfItem: updatedItems[existingItemIndex].numOfItem + quantity,
        };
        return updatedItems;
      } else {
        // New item, add to cart
        return [...prev, { ...product, numOfItem: quantity }];
      }
    });
  };

  const getCartQuantity = (productTitle: string): number => {
    const item = cartItems.find((item) => item.title === productTitle);
    return item ? item.numOfItem : 0;
  };

  const updateCartQuantity = (productTitle: string, newQuantity: number) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.title === productTitle
      );

      if (existingItemIndex >= 0) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          numOfItem: newQuantity,
        };
        return updatedItems;
      }
      return prev;
    });
  };

  const removeFromCart = (productTitle: string) => {
    setCartItems((prev) => {
      return prev.filter((item) => item.title !== productTitle);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartItems,
        cartTotal,
        taxTotal,
        orderTotal,
        addToCart,
        getCartQuantity,
        updateCartQuantity,
        removeFromCart,
      }}
    >
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
