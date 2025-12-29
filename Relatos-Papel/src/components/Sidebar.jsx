import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Category } from "./Category";

export const Sidebar = () => {
    const { HandleFilterChange, HandleDelete } = useContext(GlobalContext);

    return (
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6 bg-white p-4 rounded-lg border border-gray-100 h-fit">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Filtros
                </h3>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Título
                            <input
                                id="titulo"
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                            />

                        </label>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Autor
                            <input
                                id="autor"
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                        </label>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Palabra clave
                            <input
                                id="clave"
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                            />
                        </label>
                    </div>

                    <div>
                        <Category></Category>
                    </div>

                    <button
                        onClick={HandleFilterChange}
                        className="w-full bg-blue-brand text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer mt-2 shadow-sm">
                        Aplicar Filtros
                    </button>
                    <button
                    id="deleteFilter"
                        onClick={HandleDelete}
                        className="w-full bg-blue-brand text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 hidden transition-colors cursor-pointer mt-2 shadow-sm">
                        Borrar Filtros
                    </button>
                </div>
            </div>
        </aside>
    );
};