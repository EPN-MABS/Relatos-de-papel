import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => setCart((prev) => [...prev, book]);
  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((book) => book.id !== id));

  return { cart, addToCart, removeFromCart, setCart };
};
