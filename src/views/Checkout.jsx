import React from "react";
import { CheckoutItem } from "../components/CheckoutItem";
import { CheckoutSummary } from "../components/CheckoutSummary";
import { useCart } from "../context/CartContext";

export const Checkout = () => {
  const { cart } = useCart();

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LISTA DE PRODUCTOS */}
          <div className="flex-1 bg-white rounded-lg border p-6">
            <div className="grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr] gap-4 text-sm font-semibold text-gray-600 border-b pb-3 mb-2">
              <div>Producto</div>
              <div className="text-center">Precio</div>
              <div className="text-center">Cantidad</div>
              <div className="text-center">Subtotal</div>
            </div>

            {cart.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}

            {/* DATOS DE FACTURACIÓN */}
            <div className="mt-8">
              <h2 className="font-bold mb-4">Datos de facturación</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Nombre completo"
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Correo Electrónico (Se enviará la factura)"
                />
                <input
                  className="border rounded px-3 py-2 md:col-span-2"
                  placeholder="Dirección"
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="Ciudad"
                />
                <input
                  className="border rounded px-3 py-2"
                  placeholder="País"
                />
              </div>
            </div>

            {/* PAGO CON TARJETA */}
            {/* SECCIÓN DE PAGO */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Pago</h2>

              {/* CONTENEDOR PARA CENTRAR */}
              <div className="flex justify-center">
                <form className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  {/* Nombre en la tarjeta */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo (como aparece en la tarjeta)
                    </label>
                    <input
                      type="text"
                      placeholder="Juan Pérez"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Número de tarjeta */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número de tarjeta
                    </label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  {/* Expiración y CVV */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fecha de expiración
                      </label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="***"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* RESUMEN */}
          <div className="w-full lg:w-80">
            <CheckoutSummary items={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};
