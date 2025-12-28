import React, { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalContext";

export const Category = () => {
    const { categories, handleCargar  } = useContext(GlobalContext);

    useEffect(() => {
        const categorySelect = document.getElementById("category");
        const option = document.createElement("option");
        option.value = "";
        option.text = "Seleccione...";
        categorySelect.appendChild(option);
    
        if (categories !== undefined) {
            for (let i = 0; i < categories.length; i++) {
                const option = document.createElement("option");
                option.value = categories[i];
                option.text = categories[i];
                categorySelect.appendChild(option);
            }
        }
        handleCargar();
    }, [categories]);


    return (
        <label className="text-sm font-medium text-gray-700 mb-1 block">Categor&iacute;a
            <select id="category" className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-blue-600 outline-none cursor-pointer">
            </select>
        </label>
    );

}