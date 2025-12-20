// src/context/GlobalContext.jsx
import React, { createContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../hooks/useCart";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // se utilizan los hooks 
  const { books, isLoading, getBookById, setBooks } = useBooks();
  const { cart, addToCart, removeFromCart, setCart } = useCart();

  return (
    <GlobalContext.Provider
      value={{
        books,
        isLoading,
        getBookById,
        setBooks,
        cart,
        addToCart,
        removeFromCart,
        setCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
