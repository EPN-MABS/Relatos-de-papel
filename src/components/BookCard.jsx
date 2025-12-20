import React from 'react';
import { ShoppingCart } from "lucide-react";

export const BookCard = ({ book }) => {

    const BOOK_IMAGE_URL = "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop";

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col h-full group">

            <div className="aspect-[2/3] w-full relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                    src={BOOK_IMAGE_URL} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
  
                <button className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-md translate-y-12 group-hover:translate-y-0 transition-transform duration-300 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer border border-gray-100">
                    <ShoppingCart size={20} />
                </button>
            </div>
            
    
            <div className="flex flex-col flex-1">
                <span className="text-xs font-semibold text-blue-brand uppercase tracking-wide mb-1">
                    {book.category}
                </span>
                <h3 className="text-gray-900 font-bold leading-tight mb-1 line-clamp-2 min-h-[2.5rem]">
                    {book.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                
                <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">
                        S/ {book.price.toFixed(2)}
                    </span>
                    <button className="text-xs font-medium bg-blue-brand text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                        Añadir
                    </button>
                </div>
            </div>
        </div>
    );
};