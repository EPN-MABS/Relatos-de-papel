import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export const ModalCarrito = () => {
  const { cart, removeFromCart, totalAmount, open, setOpen } = useContext(GlobalContext);

  // Si el modal no está abierto, no renderizamos nada
  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  return (
    <div
      className="fixed top-16 right-10 z-50 flex justify-end "
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg p-4 w-80 relative">
        <h2 className="text-lg font-bold mb-4">🛒 Carrito</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
        ) : (
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {cart.map((book) => (
              <li
                key={book.id}
                className="flex justify-between items-center text-sm"
              >
                <span className="flex-1">
                  {book.title} (x{book.quantity})
                </span>
                {/* 🔹 Subtotal dinámico */}
                <span className="ml-2">
                 {/*  S/ {book.subtotal ? book.subtotal.toFixed(2) : (book.price * book.quantity).toFixed(2)}*/}
                 {book.subtotal.toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(book.id)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* 🔹 Total dinámico desde el contexto */}
        <div className="mt-3 text-right font-semibold text-sm">
          Total: S/ {totalAmount.toFixed(2)}
        </div>

        <div className="mt-4 flex justify-between">
          <button
            onClick={() => setOpen(false)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors text-sm"
          >
            Cerrar
          </button>

          {/* 🔹 Navegación hacia CarritoPage */}
          <Link
            to={cart.length > 0 ? "/carrito" : "#"}
            onClick={
              cart.length > 0
                ? () => setOpen(false) // cerramos modal antes de navegar
                : (e) => e.preventDefault()
            }
            className={`px-3 py-1 rounded-lg transition-colors text-sm ${
              cart.length > 0
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
