import React from "react";

export const CartSummary = ({ items }) => {

  /**
   * Calcula el subtotal del carrito
   * Recorre todos los items y suma precio * cantidad
   * acc va a significar el acumulador de lo que se lleva sumado hasta ahora
   * Un ejemplo es que un libro valga $100 y tiene dos libros para comprar
   * Entonces ahí es como que acc=0+(100*2)
   * Y va acumulando 200
   * 
   * El 0 fl final es que empieza la suma desde 0
   * 
   * Reduce es lo mismo que un for que recorre todo
   * 
  */
  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);


  /**
   * Impuesto supuestamente del 10%
   */
  const TAX_RATE = 0.10;
  const taxes = subtotal * TAX_RATE;

  /**
   * Total final a pagar
   */
  const total = subtotal + taxes;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-4">

      {/* Título */}
      <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">
        Resumen de compra
      </h2>

      {/* Subtotal */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Subtotal</span>
        <span>S/ {subtotal.toFixed(2)}</span>
      </div>

      {/* Impuestos */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Impuestos (10%)</span>
        <span>S/ {taxes.toFixed(2)}</span>
      </div>

      <hr className="border-gray-200" />

      {/* Total */}
      <div className="flex justify-between text-base font-bold text-gray-900">
        <span>Total</span>
        <span>S/ {total.toFixed(2)}</span>
      </div>

      {/* Botón de acción */}
      <button
        className="w-full mt-4 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        Continuar con la compra
      </button>
       {/* Botón de acción */}
      <button
        className="w-full mt-4 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        ¿Tiene cupón de descuento?
      </button>
       {/* Botón de Tarjeta de Regalo*/}
      <button
        className="w-full mt-4 bg-blue-brand text-white py-3 rounded-lg font-medium
                   hover:bg-blue-600 transition-colors cursor-pointer"
      >
        ¿Tienes una tarjeta de regalo? 
      </button>

      {/* Mensaje informativo */}
      <p className="text-xs text-gray-400 text-center">
        Impuestos calculados de forma referencial.
      </p>
    </div>
  );
};
