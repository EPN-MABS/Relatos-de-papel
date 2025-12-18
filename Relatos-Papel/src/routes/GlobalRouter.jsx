import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Overview} from "../views/Overview";
import {Header} from "../components/Header";
import { Footer } from "../components/Footer";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
     
                <Route path="/" element={<Layout><Overview /></Layout>} />

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
      </div>
    );
  };
  
  
export default GlobalRouter;
