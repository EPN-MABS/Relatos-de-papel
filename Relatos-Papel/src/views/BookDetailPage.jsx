import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import BookDetails from "../components/BookDetails";

export const BookDetailPage = () => {
  const { id } = useParams();
  const { getBookById, isLoading } = useContext(GlobalContext);

  if (isLoading) return <p>Cargando detalle...</p>;

  const book = getBookById(id);

  if (!book) return <p>Libro no encontrado</p>;

  return <BookDetails book={book} />;
};
