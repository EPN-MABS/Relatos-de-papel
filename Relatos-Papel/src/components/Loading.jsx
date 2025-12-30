import React from 'react';

export const Loading = () => {
    const mensaje = "Cargando...";

    return (
        <>
            <div className="text-center">
                <div id="spinner" className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white flex space-x-4">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75">
                        </div>
                        <div className="flex items-center justify-center">
                            <span > {mensaje}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
