import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext"; // ahora usamos el contexto global
import { Sidebar } from "../components/Sidebar";
import { BookCard } from "../components/BookCard";
import { Pagination } from "../components/Pagination";

export const Overview = () => {
  const { books, isLoading } = useContext(GlobalContext); // consumimos libros desde el contexto
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Ajusta según cuántos quieras ver

  // --- CÁLCULOS DE PAGINACIÓN ---
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(books.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div className="p-10 text-center text-gray-500">
        Cargando biblioteca...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <div className="flex-1">
          {/* Encabezado con paginación */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 flex flex-col sm:flex-row justify-between items-center shadow-sm">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-gray-900 font-bold text-lg">Libros</h2>
              <p className="text-gray-500 text-xs">({books.length} resultados)</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:block">
                Página {currentPage} de {totalPages}
              </span>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Grid de libros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
