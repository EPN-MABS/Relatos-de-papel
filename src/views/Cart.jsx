import React, { useEffect } from "react";
import { CartItem } from "../components/CartItem";
import { CartSummary } from "../components/CartSummary";
import { cartMock } from "../data/cartMock";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, setCart } =
    useCart();

  /**
   * Cargar datos mock SOLO una vez
   */
  useEffect(() => {
    if (cart.length === 0) {
      setCart(cartMock);
    }
  }, [cart, setCart]);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Mi Carrito</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* LISTA */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto">
            {/* CABECERA */}
            <div className="grid grid-cols-[minmax(220px,3fr)_1fr_1fr_1fr_100px] gap-4 text-sm font-semibold text-gray-600 border-b pb-3 mb-2">
              <div>Producto</div>
              <div className="text-center">Precio</div>
              <div className="text-center">Cantidad</div>
              <div className="text-center">Subtotal</div>
              <div className="text-center">Acciones</div>
            </div>

            {/* ITEMS */}
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
              />
            ))}

            {/* SEGUIR COMPRANDO */}
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
            >
              ← Seguir comprando
            </Link>
          </div>

          {/* RESUMEN */}
          <div className="w-full lg:w-80">
            <CartSummary items={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};
