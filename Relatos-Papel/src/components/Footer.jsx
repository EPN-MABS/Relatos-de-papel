import React from 'react';
import { Facebook, Instagram, Twitter, Mail, BookOpen } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-800 pb-8">
                    

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-brand p-1.5 rounded-lg">
                                <BookOpen size={20} className="text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                Relatos <span className="text-blue-brand">de Papel</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Tu librería favorita online. Encuentra historias que inspiran, educan y transforman.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-100">Explorar</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Novedades</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Los más vendidos</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Ficción y Novelas</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Infantil</a></li>
                        </ul>
                    </div>

                    {/* 3. CONTACTO Y REDES */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-100">Síguenos</h3>
                        <div className="flex gap-4 mb-4">
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-all group">
                                <Facebook size={18} className="text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-all group">
                                <Instagram size={18} className="text-gray-400 group-hover:text-white" />
                            </a>
                            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-sky-500 transition-all group">
                                <Twitter size={18} className="text-gray-400 group-hover:text-white" />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Mail size={16} />
                            <span>contacto@relatosdepapel.com</span>
                        </div>
                    </div>
                </div>

                {/* SECCIÓN INFERIOR: COPYRIGHT */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-2 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacidad</a>
                        <a href="#" className="hover:text-gray-300">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};