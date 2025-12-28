import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Overview } from "../views/Overview";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ModalCarrito } from "../components/ModalCarrito";
import { BookDetailPage } from "../views/BookDetailPage";
import { CarritoPage } from "../views/CarritoPage";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Overview /></Layout>} />
                <Route path="/detalle/:id" element={<Layout><BookDetailPage /></Layout>} />
                <Route path="/carrito" element={<Layout><CarritoPage /></Layout>} />
             </Routes>
        </BrowserRouter>
    );
}

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 px-4 py-6 w-full max-w-7xl mx-auto">
                {children}
            </main>

            <Footer />

            {/* ModalCarrito siempre disponible, controlado por open */}
            <ModalCarrito />
        </div>
    );
};

export default GlobalRouter;
