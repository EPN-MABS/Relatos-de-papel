import React from "react";

export const CheckoutItem = ({ item }) => {
  const BOOK_IMAGE_URL =
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop";

  return (
    <div className="grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr] items-center gap-4 py-4 border-b">
      {/* PRODUCTO */}
      <div className="flex items-center gap-4">
        <img
           src={item.image}
          alt={item.title}
          className="w-14 h-20 object-cover rounded border"
        />
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">{item.title}</h3>
          <p className="text-sm text-gray-500 truncate">{item.author}</p>
        </div>
      </div>

      {/* PRECIO */}
      <div className="text-center font-medium">S/. {item.price.toFixed(2)}</div>

      {/* CANTIDAD */}
      <div className="text-center">{item.quantity}</div>

      {/* SUBTOTAL */}
      <div className="text-center font-bold">
        S/. {(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};
