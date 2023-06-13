import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";
import Login from "./Page/signup&login/Login";
import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import AllProductsCards from "./components/AllProductsCards/AllProductsCards";
import Navbar from "./components/Navbar/UserNavBar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./Page/signup&login/SignUp";
import AllCraftsCards from "./components/AllCraftsCards/AllCraftsCards";
import CardDetails from "./components/CardDetails/CardDetails";
import Profile from "./components/Profile/Profile";
import Slider from "./components/Slider/Slider";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AllCards" element={<AllProductsCards />} />
        <Route path="AllCrafts" element={<AllCraftsCards />} />
        <Route path="profile" element={<Profile />} />
        <Route path="slider" element={<Slider />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="CardDetails" element={<CardDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}
