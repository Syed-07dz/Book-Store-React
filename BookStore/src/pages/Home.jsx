import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { X, ShoppingCart, Star, Clock, BookOpen } from "lucide-react";

const books = [
  { 
    id: 1, 
    image: "/Banner.jpg", 
    title: "Gaming Book", 
    description: "A comprehensive guide to gaming strategies and techniques. Learn about game design, player psychology, and how to excel in various gaming genres.",
    price: 200,
    author: "John Smith",
    rating: 4.5,
    pages: 320,
    language: "English",
    publishedDate: "2023",
    category: "Gaming"
  },
  { 
    id: 2, 
    image: "/Banner.jpg", 
    title: "Programming Book", 
    description: "Master Python and Java programming with this comprehensive guide. Perfect for beginners and intermediate developers looking to enhance their coding skills.",
    price: 300,
    author: "Sarah Johnson",
    rating: 4.8,
    pages: 450,
    language: "English",
    publishedDate: "2023",
    category: "Programming"
  },
  { 
    id: 3, 
    image: "/Banner.jpg", 
    title: "Sport Book", 
    description: "Your complete guide to fitness and sports training. Learn proper techniques, nutrition advice, and training programs for optimal performance.",
    price: 300,
    author: "Mike Williams",
    rating: 4.6,
    pages: 280,
    language: "English",
    publishedDate: "2023",
    category: "Sports"
  },
  { 
    id: 4, 
    image: "/Banner.jpg", 
    title: "Maths Book", 
    description: "RD Sharma's comprehensive mathematics guide covering advanced topics with detailed explanations and practice problems.",
    price: 200,
    author: "RD Sharma",
    rating: 4.9,
    pages: 600,
    language: "English",
    publishedDate: "2023",
    category: "Mathematics"
  },
  { 
    id: 5, 
    image: "/Banner.jpg", 
    title: "Gaming Book", 
    description: "Learn the fundamentals of gaming, from basic controls to advanced strategies. Includes tips for popular games and competitive gaming.",
    price: 200,
    author: "Alex Turner",
    rating: 4.3,
    pages: 250,
    language: "English",
    publishedDate: "2023",
    category: "Gaming"
  },
  { 
    id: 6, 
    image: "/Banner.jpg", 
    title: "Coding Book", 
    description: "A practical guide to web development with Java and HTML. Learn to build responsive websites and web applications from scratch.",
    price: 200,
    author: "David Brown",
    rating: 4.7,
    pages: 400,
    language: "English",
    publishedDate: "2023",
    category: "Programming"
  },
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBuyNow = (book) => {
    addToCart({
      id: book.id,
      name: book.title,
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
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <div className="text-center p-6">
        <h2 className="italic text-gray-800">Hello, welcome here to learn</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Something <span className="text-pink-600">new</span>
          <span className="text-pink-500 italic"> everyday!!!</span>
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mt-2">
          Discover a world of knowledge with our carefully curated collection of books.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <input 
            type="email" 
            placeholder="Email" 
            className="border p-2 rounded-md sm:w-60 w-full text-center" 
          />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md w-full sm:w-auto hover:bg-pink-700 transition-colors">
            Get started
          </button>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow">
            <img 
              src={book.image} 
              alt={book.title} 
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
              onClick={() => setSelectedBook(book)}
            />
            <h4 className="font-bold mt-2">{book.title}</h4>
            <p className="text-sm text-gray-500 line-clamp-2">{book.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">₹{book.price}</span>
              <button 
                onClick={() => handleBuyNow(book)} 
                className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 transition-colors flex items-center gap-1"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
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
                  alt={selectedBook.title} 
                  className="w-full h-64 object-cover rounded-lg shadow-md" 
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedBook.title}</h2>
                <p className="text-gray-600 mt-2">{selectedBook.description}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Author:</span>
                    <span className="font-medium">{selectedBook.author}</span>
                  </div>

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
                      handleBuyNow(selectedBook);
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
