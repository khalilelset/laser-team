import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import React from "react";
import Login from "./Page/signup&login/Login";
import HomePage from "./Page/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import CraftOwnerPortfolio from "./Page/Products/CraftOwnerPortfolio";
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

import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage"
import CraftDetails from "./components/AllCraftsCards/CraftDetails";



//------------------------------------------------------------

export default function App() {
  var access = false;
  const status = window.localStorage.getItem("status");
  if (status === "owner") { access = true }


  return (
    <div>

      <Routes>
        <Route path="/" element={<><Navbar /> <HomePage /></>} />

        <Route path="/AllCrafts" element={<><Navbar /> <AllCraftsCards /></>} />
        {/* <Route path="profile" element={<UserProfilePage />} /> */}
        <Route path="slider" element={<><Navbar /> <Slider /></>} />
        <Route path="/SignUp" element={<><Navbar /> <SignUp /></>} />

        {/* <Route path="CardDetails" element={<CardDetails/>} /> */}
        <Route path="/login" element={<><Navbar /> <Login /></>} />
        <Route path="/StorePage" element={<><Navbar /> <StorePage /></>} />
        <Route path="/allcategory" element={<><Navbar /> <AllCategoryPage /></>} />
        <Route path="/products/:id" element={<><Navbar /> <ProductDetalisPage /> <CraftOwnerPortfolio/></>} />
        <Route path="/products" element={<><Navbar /> <ShopProductsPage /></>} />

        <Route path="login" element={<><Navbar /> <Login /></>} />



        {access ? (<>
          <Route path="/adminprofile" element={<AdminProfilePage />} />
          <Route path="/adminallproducts" element={<AdminAllProductsPage />} />
          <Route path="/adminallCrafts" element={<AdminAllCraftsPage />} />
          <Route path="/adminaddproduct" element={<AdminAddProductsPage />} />
          <Route path="/adminaddcraft" element={<AdminAddCraft />} />
        </>)
          : (
            <>
              <Route path="/userprofile" element={<><Navbar /><UserProfilePage /></>} />
              <Route path="/userfavoriteproduct" element={<UserFavoriteProductsPage />} />

            </>)}

        <Route path="/CatPage" element={<><Navbar /><CatPage /></>} />

        <Route path="/AllCraftsdetails" element={<><Navbar /> <CraftDetails /></>} />
        

      </Routes>
      <Footer />
    </div>
  );
}
