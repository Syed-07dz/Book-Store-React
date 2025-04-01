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
        <Route path="/Signup" element={<Signup />} /> {/* New Login Route */}
        <Route path="/forgot-password" element={<Forget />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default AppRoutes;
