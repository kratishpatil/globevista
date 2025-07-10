import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (flight) => {
    setCart((prev) => {
      if (prev.find((f) => f._id === flight._id)) return prev;
      return [...prev, flight];
    });
  };

  const removeFromCart = (flightId) => {
    setCart((prev) => prev.filter((f) => f._id !== flightId));
  };

  const clearCart = () => setCart([]);

  const isInCart = (flightId) => cart.some((f) => f._id === flightId);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
}; 