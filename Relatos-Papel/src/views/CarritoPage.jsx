import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export const CarritoPage = () => {
  const { cart, setCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((book) => book.id !== id));
  };

  const handleCheckout = () => {
    alert("Pedido realizado ✅");
    setCart([]); // vaciar carrito
    navigate("/"); // volver a Overview
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10 text-center text-gray-500">
        Tu carrito está vacío 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Carrito de compras</h1>
      <ul className="space-y-4">
        {cart.map((book) => (
          <li
            key={book.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
          >
            <div>
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-500">{book.author}</p>
              <span className="text-blue-600 font-bold">
                S/ {book.price.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => removeFromCart(book.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="mt-6 text-right">
        <span className="text-xl font-bold text-gray-900">
          Total: S/ {cart.reduce((acc, book) => acc + book.price, 0).toFixed(2)}
        </span>
      </div>

      {/* Botón Pagar */}
      <div className="mt-8 text-right">
        <button
          onClick={handleCheckout}
          className="bg-blue-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Pagar
        </button>
      </div>
    </div>
  );
};
