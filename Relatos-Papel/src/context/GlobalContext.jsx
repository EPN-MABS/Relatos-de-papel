// src/context/GlobalContext.jsx
import React, { createContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../hooks/useCart";
import { useSearchBooks } from "../hooks/useSearchBooks";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // se utilizan los hooks 
    const { books, isLoading, getBookById, setBooks, categories, extractCategories } = useBooks();
    const { cart, addToCart, removeFromCart, setCart } = useCart();
    const { searchQuery, setSearchQuery, filterBooks, searchTitle, setSearchTitle, searchAutor, setSearchAutor, searchCategory, setSearchCategory, filterSidebarBooks } = useSearchBooks();

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
                searchQuery,
                setSearchQuery,
                searchTitle,
                setSearchTitle,
                searchAutor,
                setSearchAutor, 
                searchCategory,
                setSearchCategory,
                filterBooks,
                categories,
                extractCategories,
                filterSidebarBooks
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
