// context/GlobalContext.jsx
import React, { createContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../hooks/useCart";  
import { useSearchBooks } from "../hooks/useSearchBooks";
import { useModal } from "../hooks/useModal";
import { ModalLoading } from "../components/ModalLoading";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  // 📚 Libros
  const {
    books,
    isLoading,
    setIsLoading,
    getBookById,
    setBooks,
    categories,
    messages,
    getMessageById,
    setMessages,
  } = useBooks();

  // 🛒 Carrito (con funciones inmutables)
  const {
    cart,              // 👈 ya con subtotales
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalItems,
    totalAmount,
  } = useCart();

  // 📦 Modal
  const { open, checkout, setCheckout, setOpen } = useModal();

  // 🔍 Búsqueda
  const {
    searchQuery,
    setSearchQuery,
    filterBooks,
    searchTitle,
    setSearchTitle,
    searchAutor,
    setSearchAutor,
    searchCategory,
    setSearchCategory,
    filterSidebarBooks,
  } = useSearchBooks();

  // 👀 Logs para depuración
  console.log("🛒 GlobalContext cart:", cart);
  console.log("📊 GlobalContext totalAmount:", totalAmount);

  return (
    <GlobalContext.Provider
      value={{
        // 📚 Libros
        books,
        isLoading,
        setIsLoading,
        getBookById,
        setBooks,
        categories,

        // 🛒 Carrito
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalAmount,

        // 🔍 Búsqueda
        searchQuery,
        setSearchQuery,
        searchTitle,
        setSearchTitle,
        searchAutor,
        setSearchAutor,
        searchCategory,
        setSearchCategory,
        filterBooks,
        filterSidebarBooks,

        // 💬 Mensajes
        messages,
        getMessageById,
        setMessages,

        // 📦 Modal
        open,
        checkout,
        setCheckout,
        setOpen,
      }}
    >
      {children}
      <ModalLoading />
    </GlobalContext.Provider>
  );
};
