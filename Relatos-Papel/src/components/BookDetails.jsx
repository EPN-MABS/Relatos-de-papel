import React from "react";
import AddCartButton from "./AddCartButton";

const BookDetails = ({ book }) => {
  const BOOK_IMAGE_URL =
    book.image ||
    "https://via.placeholder.com/400x600?text=Imagen+no+disponible";

  return (
    <div>
      <div className="w-full mb-6">
        <img
          src={BOOK_IMAGE_URL}
          alt={book.title}
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
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

       <div className="mt-6">
        <AddCartButton book={book} />
      </div>
    </div>
    
    
  );
};

export default BookDetails;
