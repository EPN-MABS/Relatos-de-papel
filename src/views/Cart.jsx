import React from "react";
import { CartItem } from "../components/CartItem";
import { cartMock } from "../data/cartMock";
import { CartSummary } from "../components/CartSummary";


export const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Mi Carrito
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">

  {/* Lista de productos */}
  <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
    {cartMock.map(item => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>

  {/* Resumen */}
  <div className="w-full lg:w-80">
    <CartSummary items={cartMock} />
  </div>

</div>

      </div>
    </div>
  );
};
