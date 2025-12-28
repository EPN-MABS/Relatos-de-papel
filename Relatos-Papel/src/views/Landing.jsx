import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import useRedirection from "../hooks/useRedirection";
import { BookOpen } from "lucide-react";
import { GlobalContext } from '../context/GlobalContext';

export const Landing = () => {
    const { setCarga, setSearchCategory } = useContext(GlobalContext);
    useRedirection("/overview", 5000);
    const handleClick = (category) => {
        setCarga(true);
        if (category.length !== 0) {
            setSearchCategory(category);
        }
    }

    return (
        <div className="text-center ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-8">
                    <Link to={"/overview"} onClick={handleClick} className="flex items-center gap-2 group cursor-pointer">
                        <div className="bg-blue-brand text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <BookOpen size={24} strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight">
                            Relatos <span className=" text-blue-brand ml-1">de Papel</span>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-50 min-h-screen">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6 flex flex-col sm:flex-row items-center justify-center  shadow-sm">
                            <div className="mb-4 sm:mb-0">
                                <h2 className="text-gray-900 font-bold text-lg">Promociones en su libreria de confianza</h2>
                            </div>
                        </div>
                        <Link to={"/overview"} onClick={handleClick}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all p-4 flex flex-col group mt-4">
                                <img width="100" alt="blackfriday" src="/images/black-friday.webp"></img>
                                <p>Black Friday promocion 2 x 1 en libros seleccionados</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Terror')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col group mt-4">
                                <img width="100" alt="blackfriday" src="/images/lunes.jpg"></img>
                                <p>Descuento los dias lunes en Terror</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Novela')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4">
                                <img width="100" alt="blackfriday" src="/images/martes.jpg"></img>
                                <p>Descuento los dias martes en Novelas</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Ciencia Ficci\u00F3n')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4">
                                <img width="100" alt="blackfriday" src="/images/miercoles.jpg"></img>
                                <p>Descuento los dias miercoles en Ciencia Ficci&oacute;n</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Poes\u00EDa')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4 ">
                                <img width="100" alt="blackfriday" src="/images/jueves.jpg"></img>
                                <p>Descuento los dias jueves en Poes&iacute;a</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Aventuras')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4">
                                <img width="100" alt="blackfriday" src="/images/viernes.jpg"></img>
                                <p>Descuento los dias viernes en Aventuras</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Cl\u00E1sicos')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4">
                                <img width="100" alt="blackfriday" src="/images/sabado.jpg"></img>
                                <p>Descuento los dias sabado en Cl&aacute;sicos</p>
                            </div>
                        </Link>
                        <Link to={"/overview"} onClick={() => handleClick('Cuentos')}>
                            <div className="items-center justify-center bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col  group mt-4">
                                <img width="100" alt="blackfriday" src="/images/domingo.jpg"></img>
                                <p>Descuento los dias domingo en Cuentos</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


