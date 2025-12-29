import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddCartButton = ({ book }) => {
  const { addToCart, setOpen, open  } = useContext(GlobalContext);

  const handleAdd = () => {
    addToCart(book);   // añade el libro al carrito

      setOpen(true);
  
  };

  return (
    <button
      onClick={handleAdd}
      className="text-xs font-medium bg-blue-brand text-white hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors cursor-pointer"
    >
      Añadir
    </button>
  );
};

export default AddCartButton;
