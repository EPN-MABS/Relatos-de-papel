// src/context/GlobalContext.jsx
import React, { createContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../hooks/useCart";
import { useSearchBooks } from "../hooks/useSearchBooks";
import { useModal } from "../hooks/useModal";
import { ModalLoading } from "../components/ModalLoading";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // se utilizan los hooks 
    const { books, isLoading, setIsLoading, getBookById, setBooks, categories, messages, getMessageById, setMessages } = useBooks();
    const { cart, addToCart, removeFromCart, setCart } = useCart();
    const { open, checkout, setCheckout, setOpen } = useModal();
    const { searchQuery, setSearchQuery, filterBooks, searchTitle, setSearchTitle, searchAutor, setSearchAutor, searchCategory, setSearchCategory, filterSidebarBooks } = useSearchBooks();

    return (
        <GlobalContext.Provider
            value={{
                books,
                isLoading,
                setIsLoading,
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
                filterSidebarBooks,
                open,
                checkout,
                setCheckout,
                setOpen,
                messages,
                getMessageById,
                setMessages
            }}
        >
            {children}
            <ModalLoading />
        </GlobalContext.Provider>
    );
};
