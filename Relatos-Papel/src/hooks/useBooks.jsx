import { useState, useEffect } from "react";
import { booksData } from "../data/books";

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [carga, setCarga] = useState(false);
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        if (carga) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setBooks(booksData);
                const mapaObjetos = new Map();
                booksData.forEach(obj => {
                    if (!mapaObjetos.has(obj.category)) {
                        mapaObjetos.set(obj.category, obj.category);
                    }
                });
                setCategories(Array.from(mapaObjetos.values()));
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }

    }, [carga]);

    const getBookById = (id) =>
        books.find((b) => String(b.id) === String(id) || Number(b.id) === Number(id));

    return { books, isLoading, setIsLoading, getBookById, setBooks, categories, carga, setCarga };
};
