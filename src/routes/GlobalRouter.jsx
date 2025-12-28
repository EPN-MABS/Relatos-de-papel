import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Overview } from "../views/Overview";
import { Cart } from "../views/Cart";
import { Checkout } from "../views/Checkout";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { CartProvider } from "../context/CartContext";


function GlobalRouter() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Overview />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />

          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
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
    </div>
  );
};

export default GlobalRouter;
