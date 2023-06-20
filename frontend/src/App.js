import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";
import Login from "./Page/signup&login/Login";
import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/UserNavBar/Navbar";
import Footer from "./components/Footer/Footer";
import SignUp from "./Page/signup&login/SignUp";
import AllCraftsCards from "./components/AllCraftsCards/AllCraftsCards";
import CatPage from "./Page/Category/CatPage";
import StorePage from "./Page/StoreProduct/StorePage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import Slider from "./components/Slider/Slider";

//import profile

import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllCraftsPage from "./Page/Admin/AdminAllCraftsPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import AdminAddCraft from "./Page/Admin/AdminAddCrafts";
 import UserProfilePage from "./Page/User/UserProfilePage";
import AdminProfilePage from "./Page/Admin/AdminProfile";

import UserFavoriteProductsPage from"./Page/User/UserFavoriteProductsPage"



//------------------------------------------------------------

export default function App() {
  var access=false;
const status =window.localStorage.getItem("status");
if (status === "owner"){access = true}


  return (
    <div>
      
     <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      
        <Route path="/AllCrafts" element={<AllCraftsCards />} />
        {/* <Route path="profile" element={<UserProfilePage />} /> */}
        <Route path="slider" element={<Slider />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* <Route path="CardDetails" element={<CardDetails/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/StorePage" element={<StorePage/>} />
        <Route path="/allcategory" element={<AllCategoryPage/>}/>
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/products" element={<ShopProductsPage/>}/>

        <Route path="login" element={<Login />} />

       
       

        


        {access ? (<>
        <Route path="/adminprofile" element={<AdminProfilePage/>} />
        <Route path="/adminallproducts" element={<AdminAllProductsPage />} />
        <Route path="/adminallCrafts" element={<AdminAllCraftsPage />} />
        <Route path="/adminaddproduct" element={<AdminAddProductsPage />} />
        <Route path="/adminaddcraft" element={<AdminAddCraft />} />
         </>)
           :(
            <>
        <Route path="/userprofile" element={<UserProfilePage />} />
        <Route path="/userfavoriteproduct" element={<UserFavoriteProductsPage/>}/>
        
        </>)}
        
        <Route path="/CatPage" element={<CatPage/>} />
        

      </Routes>
      <Footer />
    </div>
  );
}
 