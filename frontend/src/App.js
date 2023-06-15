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

// import CardDetails from "./components/CardDetails/CardDetails";
import StorePage from "./Page/StoreProduct/StorePage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import Slider from "./components/Slider/Slider";




//import profile


import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from "./Page/User/UserAllAddresPage";
import UserAddAddressPage from "./Page/User/UserAddAddressPage";
import UserEditAddressPage from "./Page/User/UserEditAddressPage";
import UserProfilePage from "./Page/User/UserProfilePage";



//------------------------------------------------------------

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="AllCards" element={<AllProductsCards />} />
        <Route path="AllCrafts" element={<AllCraftsCards />} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="slider" element={<Slider />} />
        <Route path="SignUp" element={<SignUp />} />

        {/* <Route path="CardDetails" element={<CardDetails/>} /> */}
        <Route path="login" element={<Login/>} />
        <Route path="StorePage" element={<StorePage/>} />
        <Route path="/allcategory" element={<AllCategoryPage/>}/>
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/products" element={<ShopProductsPage/>}/>

        <Route path="login" element={<Login />} />
       

        {/* <Route path="CardDetails" element={<CardDetails />} /> */}



        <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
        <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
        <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
        <Route path="/admin/addbrand" element={<AdminAddBrandPage/>} />
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
        <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
        <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
        <Route path="/user/allorders" element={<UserAllOrdersPage />} />
        <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
        <Route path="/user/addresses" element={<UserAllAddresPage/>} />
        <Route path="/user/add-address" element={<UserAddAddressPage />} />
        <Route path="/user/edit-address" element={<UserEditAddressPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />




      </Routes>
      <Footer />
    </div>
  );
}
