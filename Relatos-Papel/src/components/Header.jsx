

import { Search, ShoppingCart, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-8">
                    
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-blue-brand text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <BookOpen size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">
                            Relatos 
  
                            <span className=" text-blue-brand ml-1">
                                de Papel
                            </span>
                        </span>
                    </Link>

                    <div className="flex-1 max-w-lg hidden md:block">
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out sm:text-sm"
                                placeholder="Buscar libros, autores..." 
                            />
                        </div>
                    </div>

 
                    <div className="flex items-center gap-4">
            
                        <button className="p-2 text-blue-brand hover:text-black hover:bg-gray-100 rounded-full transition-all relative">
                            <ShoppingCart size={24} strokeWidth={2} />
              
                            <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>

            
                        <div className="h-6 w-px bg-gray-200 mx-1"></div>

                        <button className="p-2 text-blue-brand hover:text-black hover:bg-gray-100 rounded-full transition-all">
                            <User size={24} strokeWidth={2} />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};