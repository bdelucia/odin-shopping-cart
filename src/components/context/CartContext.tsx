import React, { createContext, useState, useContext } from 'react';
import { type Product } from '../types/Product';

interface CartContextType {
  cartQuantity: number;
  cartItems: Product[];
  addToCart: (quantity: number, product: Product) => void;
  getCartQuantity: (productTitle: string) => number;
  updateCartQuantity: (productTitle: string, newQuantity: number) => void;
  removeFromCart: (productTitle: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);

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

    setCartQuantity((prev) => prev + quantity);
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
        const oldQuantity = prev[existingItemIndex].numOfItem;
        const quantityDiff = newQuantity - oldQuantity;

        // Update total cart quantity
        setCartQuantity((prevTotal) => prevTotal + quantityDiff);

        // Update the item
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
      const itemToRemove = prev.find((item) => item.title === productTitle);
      if (itemToRemove) {
        setCartQuantity((prevTotal) => prevTotal - itemToRemove.numOfItem);
        return prev.filter((item) => item.title !== productTitle);
      }
      return prev;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartItems,
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
