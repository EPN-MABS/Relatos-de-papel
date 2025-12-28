import React from "react";
import { useNavigate } from "react-router-dom";
import AddCartButton from "./AddCartButton";

const BookDetails = ({ book }) => {
  const navigate = useNavigate();
  const BOOK_IMAGE_URL =
    book.image ||
    "https://via.placeholder.com/400x600?text=Imagen+no+disponible";

  return (
    <div>
      <div className="w-full mb-6 flex justify-center">
        <img
          src={BOOK_IMAGE_URL}
          alt={book.title}
           className="max-h-[400px] object-contain rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{book.title}</h1>
      <p className="text-gray-600 mb-2"><strong>Autor:</strong> {book.author}</p>
      <p className="text-gray-600 mb-2"><strong>Categoría:</strong> {book.category}</p>
      <p className="text-lg font-semibold text-blue-600 mb-4">
        Precio: S/ {book.price.toFixed(2)}
      </p>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Reseña</h2>
      <p className="text-gray-700 leading-relaxed">{book.review}</p>

      {/* Contenedor flex para ubicar botones */}
      <div className="mt-6 flex justify-between">
        {/* Botón Regresar a la izquierda */}
        <button onClick={() => navigate(-1)}
          className="text-xs font-medium bg-gray-300 text-gray-800 hover:bg-gray-400 px-3 py-2 rounded-lg transition-colors cursor-pointer"
        >
          Regresar
        </button>

        {/* Botón Añadir a la derecha */}
        <AddCartButton book={book} />
      </div>
    </div>
    
    
  );
};

export default BookDetails;
