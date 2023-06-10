import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";

import HomePage from "./Page/home/HomePage";
import { Route, Routes } from "react-router-dom";
import AllProductsCards from "./components/AllProductsCards/AllProductsCards";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AllCards" element={<AllProductsCards />} />
      </Routes>
      <Footer />
    </div>
  );
}
