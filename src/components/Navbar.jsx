import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-100 px-6 py-3 flex items-center justify-between">
      <h1 className="text-2xl font-bold italic">Bookstore</h1>

      <ul className="flex space-x-6 text-lg italic">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/category" className="hover:underline">Category</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/cards" className="hover:underline">Cards</a></li>
      </ul>

      <div className="flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-400 px-3 py-1 rounded-md italic text-gray-500 outline-none"
        />
        <button
          className="bg-black text-white px-4 py-1 rounded-md italic hover:bg-gray-800"
          onClick={() => navigate("/Login")} // Navigate to Login Page
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
