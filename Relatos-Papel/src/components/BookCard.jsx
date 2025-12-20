import React from "react";
import { Link } from "react-router-dom";
import AddCartButton from "./AddCartButton";

export const BookCard = ({ book }) => {
  const BOOK_IMAGE_URL =
    book.image ||
    "https://via.placeholder.com/400x600?text=Imagen+no+disponible";

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col h-full group">
      {/* Imagen clickeable */}
      <Link
        to={`/detalle/${book.id}`}
        className="aspect-[2/3] w-full relative overflow-hidden rounded-lg mb-4 bg-gray-100 block"
      >
        <img
          src={BOOK_IMAGE_URL}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Info básica */}
      <div className="flex flex-col flex-1">
        <span className="text-xs font-semibold text-blue-brand uppercase tracking-wide mb-1">
          {book.category}
        </span>
        <h3 className="text-gray-900 font-bold leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3">{book.author}</p>
          <span className="text-lg font-bold text-gray-900">
            S/ {book.price.toFixed(2)}
          </span>

        <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between gap-2">
        

          {/* Botón Ver detalle */}
          <Link
            to={`/detalle/${book.id}`}
            className="text-xs font-medium bg-blue-brand text-white hover:bg-blue-600 px-3 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Detalle
          </Link>

          {/* Botón Añadir (sin acción aún) */}
           <AddCartButton book={book} />
        </div>
      </div>
    </div>
  );
};
