import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddCartButton = ({ book }) => {
  const { addToCart } = useContext(GlobalContext);

  return (
    <button
      onClick={() => addToCart(book)}
      className="text-xs font-medium bg-blue-brand text-white hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors cursor-pointer"
    >
      Añadir
    </button>
  );
};

export default AddCartButton;
