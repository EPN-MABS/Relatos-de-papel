import { useState, useEffect } from "react";
import { booksData } from "../data/books";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setBooks(booksData);
    setIsLoading(false);
  }, []);

  const getBookById = (id) =>
    books.find((b) => String(b.id) === String(id) || Number(b.id) === Number(id));

  return { books, isLoading, getBookById, setBooks };
};
