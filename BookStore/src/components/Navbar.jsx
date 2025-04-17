import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check login state from localStorage
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      const userData = localStorage.getItem('user');
      setIsLoggedIn(loginStatus === 'true');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/users/logout', {
        method: 'POST',
        credentials: 'include'
      });
      
      if (response.ok) {
        // Clear login state from localStorage
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setUser(null);
        navigate('/login');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-gray-100 px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold italic">Bookstore</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg italic">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/category" className="hover:underline">Category</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/cards" className="hover:underline">Cart</a></li>
        </ul>

        {/* Search + Login/Logout (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-400 px-3 py-1 rounded-md italic text-gray-500 outline-none"
          />
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-700">Welcome, {user?.f_name || 'User'}</span>
              <button
                className="bg-black text-white px-4 py-1 rounded-md italic hover:bg-gray-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="bg-black text-white px-4 py-1 rounded-md italic hover:bg-gray-800"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 text-center bg-gray-100 p-4 rounded-md shadow-md">
          <a href="/" className="block py-2 hover:underline">Home</a>
          <a href="/category" className="block py-2 hover:underline">Category</a>
          <a href="/contact" className="block py-2 hover:underline">Contact</a>
          <a href="/about" className="block py-2 hover:underline">About</a>
          <a href="/cards" className="block py-2 hover:underline">Cart</a>

          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-400 px-3 py-1 rounded-md italic text-gray-500 outline-none mt-3"
          />
          {isLoggedIn ? (
            <div className="space-y-2">
              <p className="text-gray-700">Welcome, {user?.f_name || 'User'}</p>
              <button
                className="w-full bg-black text-white py-2 rounded-md italic hover:bg-gray-800"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="w-full bg-black text-white py-2 rounded-md italic hover:bg-gray-800 mt-3"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
