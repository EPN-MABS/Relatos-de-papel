import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";

/**
 * CartItem
 * Representa un libro dentro del carrito de compras
 */
export const CartItem = ({ item }) => {

  // Imagen simulada (misma idea que BookCard)
  const BOOK_IMAGE_URL =
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 last:border-b-0">

      {/* Imagen */}
      <div className="w-20 h-28 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={BOOK_IMAGE_URL}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Información */}
      <div className="flex-1 flex flex-col">

        {/* Título y autor */}
        <h3 className="text-sm font-bold text-gray-900">
          {item.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          {item.author}
        </p>

        {/* Precio unitario */}
        <span className="text-sm text-gray-700 mb-2">
          Precio unitario: <strong>S/ {item.price.toFixed(2)}</strong>
        </span>

        {/* Controles */}
        <div className="flex items-center justify-between mt-auto">

          {/* Cantidad */}
          <div className="flex items-center gap-2 border rounded-md px-2 py-1">
            <button className="text-gray-500 hover:text-gray-900">
              <Minus size={14} />
            </button>

            <span className="text-sm font-medium">
              {item.quantity}
            </span>

            <button className="text-gray-500 hover:text-gray-900">
              <Plus size={14} />
            </button>
          </div>

          {/* Subtotal */}
          <div className="text-sm font-bold text-gray-900">
            S/ {(item.price * item.quantity).toFixed(2)}
          </div>

          {/* Eliminar */}
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={18} />
          </button>

        </div>
      </div>
    </div>
  );
};
