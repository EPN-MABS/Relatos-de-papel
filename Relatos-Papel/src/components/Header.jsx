import React, { useContext } from "react";
import { ShoppingCart, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { SearchBook } from "./SearchBook";

export const Header = () => {
    const { cart } = useContext(GlobalContext);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-8">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-blue-brand text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <BookOpen size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">
                            Relatos <span className=" text-blue-brand ml-1">de Papel</span>
                        </span>
                    </Link>

                    {/* Buscador */}
                    <SearchBook />

                    {/* Iconos lado derecho */}
                    <div className="flex items-center gap-4">
                        {/* Carrito */}
                        <Link
                            to="/carrito"
                            className="p-2 text-blue-brand hover:text-black hover:bg-gray-100 rounded-full transition-all relative"
                        >
                            <ShoppingCart size={24} strokeWidth={2} />
                            {cart.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-xs font-bold text-white rounded-full px-1.5 py-0.5 ring-2 ring-white">
                                    {cart.length}
                                </span>
                            )}
                        </Link>

                        {/* Separador */}
                        <div className="h-6 w-px bg-gray-200 mx-1"></div>

                        {/* Usuario */}
                        <button className="p-2 text-blue-brand hover:text-black hover:bg-gray-100 rounded-full transition-all">
                            <User size={24} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
