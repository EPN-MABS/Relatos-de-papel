import React from "react";
import { CheckoutItem } from "../components/CheckoutItem";
import { CheckoutSummary } from "../components/CheckoutSummary";

/*
DATA MOCK (SOLO REFERENCIA, NO USADO)
const mockCart = [
  {
    id: 1,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 25.0,
    quantity: 1,
  },
];
*/

const Checkout = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LISTA DE PRODUCTOS (MAQUETA) */}
          <div className="flex-1 bg-white rounded-lg border p-6">
            <div className="grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr] gap-4 text-sm font-semibold text-gray-600 border-b pb-3 mb-2">
              <div>Producto</div>
              <div className="text-center">Precio</div>
              <div className="text-center">Cantidad</div>
              <div className="text-center">Subtotal</div>
            </div>

            {/* DATOS DE FACTURACIÓN */}
            <div className="mt-8">
              <h2 className="font-bold mb-4">Datos de facturación</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border rounded px-3 py-2" placeholder="Nombre completo" />
                <input className="border rounded px-3 py-2" placeholder="Correo electrónico" />
                <input className="border rounded px-3 py-2 md:col-span-2" placeholder="Dirección" />
                <input className="border rounded px-3 py-2" placeholder="Ciudad" />
                <input className="border rounded px-3 py-2" placeholder="País" />
              </div>
            </div>

            {/* PAGO */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Pago</h2>

              <div className="flex justify-center">
                <form className="w-full max-w-xl rounded-lg border bg-white p-6 shadow-sm">
                  <input className="w-full mb-4 border rounded px-3 py-2" placeholder="Nombre en la tarjeta" />
                  <input className="w-full mb-4 border rounded px-3 py-2" placeholder="Número de tarjeta" />

                  <div className="grid grid-cols-2 gap-4">
                    <input className="border rounded px-3 py-2" placeholder="MM/AA" />
                    <input className="border rounded px-3 py-2" placeholder="CVV" />
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RESUMEN (MAQUETA) */}
          <div className="w-full lg:w-80">
            
            <CheckoutSummary items={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
