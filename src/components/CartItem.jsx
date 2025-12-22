import React from "react";
import { Trash2, Pencil} from "lucide-react";

export const CartItem = ({ item }) => {

  const BOOK_IMAGE_URL =
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop";

  return (
    <div
      className="
        grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr_100px]
        items-center gap-4
        py-5 border-b border-blue-300
      "
    >

      {/* PRODUCTO */}
      <div className="flex items-center gap-4">
        <img
          src={BOOK_IMAGE_URL}
          alt={item.title}
                    className="w-16 h-24 object-cover rounded-md border"
        />

        <div className="min-w-0">
          <h3 className="text-gray-900 font-bold leading-tight mb-1 ">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 truncate">
            {item.author}
          </p>
        </div>
      </div>

      {/* PRECIO */}
      <div className="text-center font-bold text-gray-900">
        S/. {item.price.toFixed(2)}
      </div>

      {/* CANTIDAD */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 border rounded-md px-2 py-1">
          <button className="text-gray-500 hover:text-gray-900">
            <p>-</p>
          </button>

          <span className="text-sm font-medium w-5 text-center">
            {item.quantity}
          </span>

          <button className="text-gray-500 hover:text-gray-900">
            <p>+</p>
          </button>
        </div>
      </div>

      {/* SUBTOTAL */}
      <div className="text-center font-bold text-gray-900">
        S/. {(item.price * item.quantity).toFixed(2)}
      </div>

      {/* ACCIONES */}
      <div className="flex justify-center gap-3">
        <button className="text-blue-600 hover:text-blue-600 transition">
          <Pencil size={18} />
        </button>

        <button className="text-red-600 hover:text-red-600 transition">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

