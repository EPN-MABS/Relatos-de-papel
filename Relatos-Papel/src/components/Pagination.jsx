import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center gap-1">

            <button 
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white text-gray-600"
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded border text-sm font-medium transition-colors cursor-pointer
                        ${currentPage === page 
                            ? "bg-blue-brand text-white border-gray-900"  // Activo: Oscuro (estilo moderno) o Azul
                            : "bg-white text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900"
                        }`}
                >
                    {page}
                </button>
            ))}


            <button 
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white text-gray-600"
            >
                <ChevronRight size={16} />
            </button>
        </div>
    );
};