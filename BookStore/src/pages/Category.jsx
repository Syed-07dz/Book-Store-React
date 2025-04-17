import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleBuyNowClick = (book) => {
    setSelectedBook(book);
    setShowPopup(true);
  };

  const handleOrderNowClick = () => {
    setShowForm(true);
    setShowPopup(false);
  };

  return (
    <div className="bg-pink-100 p-6 min-h-screen">
      <div className="text-center p-6">
        <h2 className="italic text-gray-800 text-4xl sm:text-6xl font-bold">
          We’re delighted to have you <span className="text-pink-600">Here! :)</span>
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
            <div key={book.id} className="bg-gray-200 p-4 shadow-md rounded-lg text-center">
              <img src={book.image} alt={book.name} className="w-full h-48 object-cover rounded" />
              <h4 className="font-bold mt-2">{book.name}</h4>
              <p className="text-sm text-gray-500">{book.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">₹ {book.price}</span>
                <button onClick={() => handleBuyNowClick(book)} className="bg-pink-600 text-white px-3 py-1 rounded">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && selectedBook && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center italic font-bold text-xl">{selectedBook.name}</h2>
            <img src={selectedBook.image} alt={selectedBook.name} className="w-full h-48 object-cover rounded-lg mt-4" />
            <p className="text-gray-600 mt-2">{selectedBook.description}</p>
            <p className="text-gray-800 font-bold mt-2">Price: ₹ {selectedBook.price}</p>
            <div className="text-center mt-4 flex justify-center gap-2">
              <button onClick={handleOrderNowClick} className="bg-pink-600 text-white px-4 py-2 rounded-md">Order Now</button>
              <button onClick={() => setShowPopup(false)} className="bg-red-600 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center italic font-bold text-xl">Place Order</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="border p-2 rounded-md" />
              <input type="text" placeholder="Your Number" className="border p-2 rounded-md" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded-md col-span-1 sm:col-span-2" />
              <input type="text" placeholder="Payment method" className="border p-2 rounded-md" />
              <input type="text" placeholder="Your Address" className="border p-2 rounded-md col-span-1 sm:col-span-2" />
              <input type="text" placeholder="City" className="border p-2 rounded-md" />
              <input type="text" placeholder="State" className="border p-2 rounded-md" />
            </div>
            <div className="text-center mt-4 flex justify-center gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Order Now</button>
              <button onClick={() => setShowForm(false)} className="bg-red-600 text-white px-4 py-2 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;

 
