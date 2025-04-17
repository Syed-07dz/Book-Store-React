import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Category from "../pages/Category";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cards from "../Pages/Cards";
import Login from "../pages/Login";  // Import Login Component
import Signup from "../pages/Signup"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forget from "../pages/Forget";
import Profile from "../components/Profile";
import AdminPage from "../pages/Adminpage";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminAddProduct from "../pages/AdminAddProduct"
function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/login" element={<Login />} /> {/* New Login Route */}
        <Route path="/Signup" element={<Signup />} /> {/* New Signup Route */}
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Adminpage" element={<AdminPage />} /> 
        <Route path="/Adminusers" element={<AdminUsersPage />} /> 
        <Route path="/Adminadd" element={<AdminAddProduct />} /> 
        



        

      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
