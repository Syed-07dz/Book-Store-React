import React from "react";
import { BookOpen, Truck, Users } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto px-4">
          Welcome to Bookstore, your go-to destination for discovering a world of knowledge, adventure, and creativity! Whether you're a passionate reader, a student seeking educational resources, or simply someone looking for a good story to escape into, we have something for everyone.
        </p>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <BookOpen className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spread Knowledge</h3>
              <p className="text-gray-600">Making quality books accessible to everyone and promoting the joy of reading.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Build Community</h3>
              <p className="text-gray-600">Creating a space where book lovers can connect, share, and discover together.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Truck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Service</h3>
              <p className="text-gray-600">Providing excellent customer service and fast, reliable delivery.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vast Collection</h3>
                <p className="text-gray-600">Browse through thousands of books across various genres, from bestsellers to rare finds.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick and secure delivery to your doorstep with real-time order tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
            alt="About Us"
            className="w-full h-[300px] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
