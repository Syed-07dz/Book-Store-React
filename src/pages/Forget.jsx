import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Forget = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex h-screen">
      {/* Left Side - Image Section */}
      <div className="w-1/2 bg-blue-600 flex items-center justify-center p-6">
        <div className="text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Social media shared today, tomorrow or by location
          </h2>
          <img
            src="/mobile.png" // Replace with actual image path
            alt="Social Media"
            className="max-w-[70%] h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10 shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>

          <input
            type="text"
            placeholder="Enter email or phone number"
            className="w-full border p-2 rounded-md mb-4"
          />
         

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Send OTP
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-500 mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forget;
