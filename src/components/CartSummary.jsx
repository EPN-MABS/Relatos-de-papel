import React from "react";
import { useNavigate } from "react-router-dom";

export const CartSummary = ({ items }) => {
  const navigate = useNavigate();

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const TAX_RATE = 0.1;
  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  return (
    <div className="bg-white border rounded-lg p-6 space-y-4">
      <h2 className="font-bold text-lg">Resumen</h2>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>S/. {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Impuestos</span>
        <span>S/. {taxes.toFixed(2)}</span>
      </div>

      <hr />

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>S/. {total.toFixed(2)}</span>
      </div>

      {/* 👉 IR AL CHECKOUT */}
      <button
        onClick={() => navigate("/checkout")}
        className="w-full mt-4 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        Continuar con la compra
      </button>

      {/* Botón cupón (mock) */}
      <button
        className="w-full mt-2 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        ¿Tiene cupón de descuento?
      </button>

      {/* Botón tarjeta regalo (mock) */}
      <button
        className="w-full mt-2 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        ¿Tienes una tarjeta de regalo?
      </button>

      <p className="text-xs text-gray-400 text-center">
        Impuestos calculados de forma referencial.
      </p>
    </div>
  );
};
