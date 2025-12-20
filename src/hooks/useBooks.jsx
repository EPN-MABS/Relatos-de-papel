import { useEffect, useState } from "react";

import { booksData } from "../data/books"; 

export const useBooks = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    
        setTimeout(() => {
      
            setBooks(booksData); 
            setIsLoading(false);
        }, 1500); 
    }, []);

    return { books, isLoading };
}