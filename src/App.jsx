import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import TopSellers from "./components/TopSellers";
import Testimonials from "./components/Testimonials";
import ProductInfo from "./components/ProductInfo";
import Blog from "./components/Blog";
import NewArrivals from "./components/NewArrivals";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";

import MyState from "./MyState";
import {ProtectedRouteForUser} from "./ProtectedRouteForUser";
import {ProtectedRouteForAdmin} from "./ProtectedRouteForAdmin";
import Checkout from "./components/Checkout";
import Faq from "./components/Faq"
import TrackOrder from "./components/TrackOrder";
const App = () => {
  return (
    <MyState>
      <div className="
        min-h-screen
        bg-gradient-to-b       
        from-white
        via-slate-50
        to-slate-100
        text-slate-900
      ">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TopSellers />
                <CategoriesSection />
                <NewArrivals />


                <Testimonials />
              </>
            }
          />

          <Route path="/shop" element={<Products />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>


  <UserDashboard />

            </ProtectedRouteForUser>
          } />

          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
            </ProtectedRouteForAdmin>
          } />

           <Route path="/checkout" element={<Checkout />} />
             <Route path="/Faq" element={<Faq />} />
             <Route path="/track-order" element={<TrackOrder />} />

</Routes>

        {/* ✅ FIX: Toaster OUTSIDE Routes */}
        <Toaster />

        <Footer />
      </div>
    </MyState>
  );
};

export default App;