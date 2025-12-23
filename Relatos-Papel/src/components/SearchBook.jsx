import { Search } from "lucide-react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const SearchBook = () => {
    const { setSearchQuery } = useContext(GlobalContext);

    return (
        <div className="flex-1 max-w-lg hidden md:block">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400 group-focus-within:text-gray-600" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out sm:text-sm"
                    placeholder="Buscar libros, autores..."
                    onChange={(e) => setSearchQuery(e.currentTarget.value)}
                />
            </div>
        </div>
    );
}