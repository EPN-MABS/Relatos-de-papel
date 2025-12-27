import { useState } from "react";

export const useSearchBooks = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [searchAutor, setSearchAutor] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const filterBooks = (books) => {
        return books.filter(book => { const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()); return matchesSearch; })
    };

    const filterSidebarBooks = (books) => {
        let filteredBooks = books;
        if (searchTitle.length !== 0) {
            filteredBooks = filteredBooks.filter(book => { const matchesSearch = book.title.toLowerCase().includes(searchTitle.toLowerCase()); return matchesSearch; })
        }

        if (searchAutor.length !== 0) {
            filteredBooks = filteredBooks.filter(book => { const matchesSearch = book.author.toLowerCase().includes(searchAutor.toLowerCase()); return matchesSearch; })
        }

        if (searchCategory.length !== 0) {
            filteredBooks = filteredBooks.filter(book => { const matchesSearch = book.category.toLowerCase().includes(searchCategory.toLowerCase()); return matchesSearch; })
        }

        return filteredBooks;
    };

    return { searchQuery, setSearchQuery, filterBooks, searchTitle, setSearchTitle, searchAutor, setSearchAutor, searchCategory, setSearchCategory, filterSidebarBooks };
}
