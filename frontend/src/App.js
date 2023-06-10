import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import AllProductsCards from "./components/AllProductsCards/AllProductsCards";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Page/HomePage/HomePage";
import CardDetails from "./components/CardDetails/CardDetails";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        
        <Route path="/" element={ <HomePage/>} />
        <Route path="AllCards" element={<AllProductsCards />} />
        <Route path="CardDetail" element={<CardDetails/>} />
      </Routes>
      <Footer />
    </div>
  );
}
