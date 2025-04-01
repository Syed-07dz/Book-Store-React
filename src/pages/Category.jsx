import React, { useState } from "react";

const categories = [
  { title: "Study material" },
  { title: "Comics" },
  { title: "Comics" },
];

const Category = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const books = [
    { id: 1, title: "Gaming Book", description: "Gaming Character", price: "₹ 200", image: "/Banner.jpg" },
    { id: 2, title: "Programming Book", description: "Python JAVA", price: "₹ 350", image: "/Banner.jpg" },
    { id: 3, title: "Maths Book", description: "RD Sharma", price: "₹ 300", image: "/Banner.jpg" },
  ];

  const handleBuyNowClick = (book) => {
    setSelectedBook(book);
    setShowPopup(true);
  };

  const handleOrderNowClick = () => {
    setShowForm(true);
    setShowPopup(false); // Close the book detail popup
  };

  return (
    <div className="bg-pink-100 p-6">
      {/* Header Section */}
      <div className="text-center p-6">
        <h2 className="italic text-gray-800 text-6xl font-bold ">
          We’re delighted to have you{" "}
          <span className="text-pink-600">Here! :)</span>
        </h2>
        <p className="text-gray-600 mx-auto mt-2 text-2xl w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mt-8">
          <div className="flex justify-between items-center px-4">
            <h3 className="font-semibold text-gray-700">{category.title}</h3>
            <a href="#" className="text-blue-600 italic">
              See all
            </a>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-gray-200 p-4 shadow-md rounded-lg text-center"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-50 h-50 object-cover rounded"
                />
                <h4 className="font-bold mt-2">{book.title}</h4>
                <p className="text-sm text-gray-500">{book.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    {book.price}
                  </span>
                  <button
                    onClick={() => handleBuyNowClick(book)}
                    className="bg-pink-600 text-white px-3 py-1 rounded"
                  >
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Book Detail Popup */}
      {showPopup && selectedBook && (
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
              <button
                onClick={handleOrderNowClick}
                className="bg-pink-600 text-white px-4 py-2 rounded-md"
              >
                Order Now
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
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
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Order Now
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
