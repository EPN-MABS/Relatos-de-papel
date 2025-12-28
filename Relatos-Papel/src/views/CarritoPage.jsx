import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { ModalOk } from "../components/ModalOK";
import { useNavigate } from "react-router-dom";

export const CarritoPage = () => {
  const navigate = useNavigate();
  const {
    cart,              // cada item ya trae book.subtotal desde useCart
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setCheckout,
    totalAmount        // calculado en useCart
  } = useContext(GlobalContext);

  
  // 🔹 Checkout simulado
  const handleCheckout = () => {
    setCheckout(false);
   
  };

  // Si el carrito está vacío
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

      {/* Tabla de libros */}
      <table className="w-full border-collapse border border-gray-200 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">Libro</th>
            <th className="border border-gray-200 px-4 py-2">Cantidad</th>
            <th className="border border-gray-200 px-4 py-2">Precio</th>
            <th className="border border-gray-200 px-4 py-2">Subtotal</th>
            <th className="border border-gray-200 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((book) => {
            
            return (
              <tr key={`${book.id}-${book.quantity}`} className="text-sm">
                <td className="border border-gray-200 px-4 py-2">{book.title}</td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => decreaseQuantity(book.id)}
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span>{book.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(book.id)}
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  S/ {book.price.toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  S/ {book.subtotal.toFixed(2)}
                </td>
                <td className="border border-gray-200 px-4 py-2 text-center">
                  <button
                    onClick={() => removeFromCart(book.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-xs"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

     {/* Total recalculado en caliente */}
    <div className="text-right font-semibold text-lg mb-6">
        <span key={totalAmount}>Total: S/ {Number(totalAmount).toFixed(2)}</span>
    </div>


      {/* Botones de acción */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="text-xs font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 px-3 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Regresar
        </button>

        <button
          id="pagar"
          onClick={() => navigate("/checkout")}
          className="bg-blue-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Pagar
        </button>
      </div>

      {/* Modal de confirmación */}
      <ModalOk />
    </div>
  );
};
