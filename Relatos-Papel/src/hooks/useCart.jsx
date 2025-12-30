import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState([]);

  // ➕ Agregar libro al carrito
  const addToCart = (book) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === book.id);
      if (existing) {
        // Crear nuevo array con objetos nuevos
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  // ➕ Aumentar cantidad
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item }
      )
    );
  };

  // ➖ Disminuir cantidad
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : { ...item }
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🗑 Eliminar libro
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // 🔹 Calcular subtotales
  const cartWithSubtotals = cart.map((item) => ({
    ...item,
    subtotal: item.price * item.quantity,
  }));

  // 🔹 Calcular totales
  const totalItems = cartWithSubtotals.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalAmount = cartWithSubtotals.reduce(
    (acc, item) => acc + item.subtotal,
    0
  );


  const clearCart = () => {
    setCart([]);
  };

  


  return {
    cart: cartWithSubtotals,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,  
    totalItems,
    totalAmount,
  
  };
};
