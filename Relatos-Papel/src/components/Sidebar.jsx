import React from 'react';
import { Search } from "lucide-react";

export const Sidebar = () => {
    return (
        <aside className="w-full md:w-64 flex-shrink-0 space-y-6 bg-white p-4 rounded-lg border border-gray-100 h-fit">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Filtros
                </h3>
                
                <div className="space-y-4">

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Título</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Autor</label>
                        <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>


                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Palabra clave</label>
                        <input 
                            type="text" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                        />
                    </div>

                     <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Género</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-600 outline-none cursor-pointer">
                            <option value="">Seleccionar...</option>
                            <option value="novela">Novela</option>
                            <option value="fantasia">Fantasía</option>
                            <option value="ciencia">Ciencia Ficción</option>
                        </select>
                    </div>

                    <button className="w-full bg-blue-brand text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer mt-2 shadow-sm">
                        Aplicar Filtros
                    </button>
                </div>
            </div>
        </aside>
    );
};