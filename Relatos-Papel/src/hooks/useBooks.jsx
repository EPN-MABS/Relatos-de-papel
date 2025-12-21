import { useState, useEffect } from "react";
import { booksData } from "../data/books";

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setBooks(booksData);
        setIsLoading(false);
        const mapaObjetos = new Map();
        booksData.forEach(obj => {
            if (!mapaObjetos.has(obj.category)) {
                mapaObjetos.set(obj.category, obj.category);
            }
        });
        setCategories(Array.from(mapaObjetos.values()));
    }, []);

    const getBookById = (id) =>
        books.find((b) => String(b.id) === String(id) || Number(b.id) === Number(id));

    return { books, isLoading, getBookById, setBooks, categories };
};
