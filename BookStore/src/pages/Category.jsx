import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { X, ShoppingCart, Star, Clock, BookOpen } from "lucide-react";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:3000/products')
      .then(response => {
        // Add rating and other details to each product
        const enhancedProducts = response.data.map(product => ({
          ...product,
          rating: (Math.random() * (5 - 4) + 4).toFixed(1), // Random rating between 4.0 and 5.0
          pages: Math.floor(Math.random() * (500 - 200) + 200), // Random pages between 200 and 500
          publishedDate: "2023",
          language: "English"
        }));
        setProducts(enhancedProducts);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleBuyNowClick = (book) => {
    addToCart({
      id: book.id,
      name: book.name,
      description: book.description,
      price: book.price,
      image: book.image
    });
    navigate('/cards');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <div className="text-center p-6">
        <h2 className="italic text-gray-800 text-4xl sm:text-6xl font-bold">
          We're delighted to have you <span className="text-pink-600">Here! :)</span>
        </h2>
        <p className="text-gray-600 mx-auto mt-2 text-lg sm:text-2xl w-full max-w-3xl">
          Explore our collection of books across various categories.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center px-4">
          <h3 className="font-semibold text-gray-700 text-xl">All Products</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {products.map((book) => (
            <div key={book.id} className="bg-white p-4 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
              <div 
                className="cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <img 
                  src={book.image} 
                  alt={book.name} 
                  className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity" 
                />
                <h4 className="font-bold mt-2 hover:text-pink-600 transition-colors">{book.name}</h4>
                <p className="text-sm text-gray-500 line-clamp-2 hover:text-gray-700">{book.description}</p>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">₹{book.price}</span>
                <button 
                  onClick={() => handleBuyNowClick(book)} 
                  className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition-colors flex items-center gap-1"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Popup */}
      {selectedBook && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedBook.image} 
                  alt={selectedBook.name} 
                  className="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedBook.name}</h2>
                <p className="text-gray-600 mt-2">{selectedBook.description}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Rating:</span>
                    <div className="flex items-center gap-1">
                      {renderStars(selectedBook.rating)}
                      <span className="text-sm text-gray-600 ml-1">({selectedBook.rating})</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span>{selectedBook.pages} pages</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span>Published: {selectedBook.publishedDate}</span>
                  </div>

                  <div className="mt-4">
                    <span className="text-2xl font-bold text-pink-600">₹{selectedBook.price}</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button 
                    className="flex-1 bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                    onClick={() => { 
                      handleBuyNowClick(selectedBook);
                      setSelectedBook(null);
                    }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;

 
