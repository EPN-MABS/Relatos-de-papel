import React from "react";
import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";
import { cartMock } from "../data/cartMock";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">

        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Mi Carrito
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* LISTA */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto">

            {/* CABECERA (SIEMPRE visible) */}
            <div
              className="
                grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr_100px]
                gap-4 text-sm font-semibold text-gray-600
                border-b pb-3 mb-2
              "
            >
              <div>Producto</div>
              <div className="text-center">Precio</div>
              <div className="text-center">Cantidad</div>
              <div className="text-center">Subtotal</div>
              <div className="text-center">Acciones</div>
            </div>

            

            {/* ITEMS */}
            {cartMock.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            {/* SEGUIR COMPRANDO */}
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
            >
                
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
              Seguir comprando
            </Link>

          </div>

          {/* RESUMEN */}
          <div className="w-full lg:w-80">
            <CartSummary items={cartMock} />
          </div>

        </div>
      </div>
    </div>
  );
};
