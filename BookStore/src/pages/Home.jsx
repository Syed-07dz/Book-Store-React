import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 1, image: "/Banner.jpg", title: "Gaming Book", description: "Gaming Character", price: "₹ 200" },
  { id: 2, image: "/Banner.jpg", title: "Programming Book", description: "Python java", price: "₹ 300" },
  { id: 3, image: "/Banner.jpg", title: "Sport Book", description: "How to Fit", price: "₹ 300" },
  { id: 4, image: "/Banner.jpg", title: "Maths Book", description: "RD Sharma", price: "₹ 200" },
  { id: 5, image: "/Banner.jpg", title: "Gaming Book", description: "How to Play", price: "₹ 200" },
  { id: 6, image: "/Banner.jpg", title: "Coding Book", description: "JAVA HTML", price: "₹ 200" },
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <div className="text-center p-6">
        <h2 className="italic text-gray-800">Hello, welcome here to learn</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Something <span className="text-pink-600">new</span>
          <span className="text-pink-500 italic"> everyday!!!</span>
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mt-2">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <input 
            type="email" 
            placeholder="Email" 
            className="border p-2 rounded-md sm:w-60 w-full text-center" 
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md w-full sm:w-auto">
            Get started
          </button>
        </div>

      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-48 object-cover rounded-lg cursor-pointer" 
              onClick={() => setSelectedBook(book)}
            />
            <h4 className="font-bold mt-2">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{book.price}</span>
              <button 
                onClick={() => setShowForm(true)} 
                className="bg-pink-600 text-white px-3 py-1 rounded"
              >
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Detail Popup */}
      {selectedBook && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-center italic font-bold text-xl">{selectedBook.title}</h2>
            <img 
              src={selectedBook.image} 
              alt={selectedBook.title} 
              className="w-full h-48 object-cover rounded-lg mt-4" 
            />
            <p className="text-gray-600 mt-2">{selectedBook.description}</p>
            <p className="text-gray-800 font-bold mt-2">Price: {selectedBook.price}</p>
            <div className="text-center mt-4 flex justify-center gap-2">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-md" onClick={() => { setShowForm(true); setSelectedBook(null); }}>Buy Now</button>
              <button onClick={() => setSelectedBook(null)} className="bg-red-600 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Order Form Popup */}
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md" onClick={() => navigate("/cards")}>Order Now</button>
              <button onClick={() => setShowForm(false)} className="bg-red-600 text-white px-4 py-2 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
