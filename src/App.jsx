// Author: Suyash Gour | Date: 25 October 2025
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<><Header /><ProductListing /></>} />
        <Route path='/cart' element={<><Header /><CartPage /></>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
