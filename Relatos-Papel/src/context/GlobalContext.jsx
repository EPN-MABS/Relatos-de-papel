// context/GlobalContext.jsx
import React, { createContext } from "react";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../hooks/useCart";
import { useSearchBooks } from "../hooks/useSearchBooks";
import { useModal } from "../hooks/useModal";
import { ModalLoading } from "../components/ModalLoading";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    // Libros
    const {
        books,
        isLoading,
        setIsLoading,
        getBookById,
        setBooks,
        categories,
        carga,
        setCarga
    } = useBooks();

    // Funciones del carrito
    const {
        cart,      
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalAmount,
    } = useCart();

    // Modal
    const { open, checkout, setCheckout, setOpen } = useModal();

    // Búsqueda
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
        HandleFilterChange,
        HandleDelete,
        handleCargar
    } = useSearchBooks();

    return (
        <GlobalContext.Provider
            value={{
                // Libros
                books,
                isLoading,
                setIsLoading,
                getBookById,
                setBooks,
                categories,
                carga,
                setCarga,

                // Carrito
                cart,
                addToCart,
                clearCart,  
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalItems,
                totalAmount,

                //  Búsqueda
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
                HandleDelete,
                HandleFilterChange,
                handleCargar,

                // Modal
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
