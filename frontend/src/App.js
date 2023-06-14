import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";
import Login from "./Page/signup&login/Login";
import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AllProductsCards from "./components/AllProductsCards/AllProductsCards";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/HomePageNavBar/Navbar";
import SignUp from "./Page/signup&login/SignUp";
import AllCraftsCards from "./components/AllCraftsCards/AllCraftsCards";
// import CardDetails from "./components/CardDetails/CardDetails";
import StorePage from "./Page/StoreProduct/StorePage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AllCards" element={<AllProductsCards />} />
        <Route path="AllCrafts" element={<AllCraftsCards />} />
        <Route path="SignUp" element={<SignUp />} />
        {/* <Route path="CardDetails" element={<CardDetails/>} /> */}
        <Route path="login" element={<Login/>} />
        <Route path="StorePage" element={<StorePage/>} />
        <Route path="/allcategory" element={<AllCategoryPage/>}/>
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/products" element={<ShopProductsPage/>}/>

      </Routes>
      <Footer />
    </div>
  );
}