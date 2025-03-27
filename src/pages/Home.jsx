import React, { useState } from "react";

const books = [
  { id: 1, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
  { id: 2, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
  { id: 3, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
  { id: 4, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
  { id: 5, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
  { id: 6, image: "/Banner.jpg", title: "Gaming Book", description: "Lorem ipsum is simple dummy", price: "₹ 200" },
];

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gray-100 p-6">
      {/* Header Section */}
      <div className="text-center p-6">
        <h2 className="italic text-gray-800">Hello, welcome here to learn</h2>
        <h1 className="text-3xl font-bold text-gray-900">
          Something <span className="text-pink-600">new</span>
          <span className="text-pink-500 italic"> everyday!!!</span>
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto mt-2">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <div className="mt-4">
          <input type="email" placeholder="Email" className="border p-2 rounded-md mr-2" />
          <button className="bg-pink-600 text-white px-4 py-2 rounded-md">Get started</button>
        </div>
      </div>

      {/* Course Offer Section */}
      <div className="text-center mt-8">
        <h3 className="italic font-semibold text-gray-700">Free offered Course</h3>
        <p className="text-gray-600">
          It is a long established fact that a reader will be distracted by the readable content.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img src={book.image} alt={book.title} className="w-full h-50 object-cover rounded" />
            <h4 className="font-bold mt-2">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded">{book.price}</span>
              <button onClick={() => setShowForm(true)} className="bg-pink-600 text-white px-3 py-1 rounded">Buy now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Popup */}
      {showForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-yellow-400 p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-center italic font-bold">Place orders</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="border p-2 rounded-md" />
              <input type="text" placeholder="Your Number" className="border p-2 rounded-md" />
              <input type="email" placeholder="Your Email" className="border p-2 rounded-md" />
              <input type="text" placeholder="Payment method" className="border p-2 rounded-md" />
              <input type="text" placeholder="Your Address" className="border p-2 rounded-md" />
              <input type="text" placeholder="Address 2" className="border p-2 rounded-md" />
              <input type="text" placeholder="City" className="border p-2 rounded-md" />
              <input type="text" placeholder="State" className="border p-2 rounded-md" />
            </div>
            <div className="text-center mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Order Now</button>
              <button onClick={() => setShowForm(false)} className="bg-red-600 text-white px-4 py-2 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
