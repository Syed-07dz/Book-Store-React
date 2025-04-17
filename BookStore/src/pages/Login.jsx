import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    if (placeholder.toLowerCase().includes("email")) {
      setFormData({ ...formData, email: value });
    } else if (placeholder.toLowerCase().includes("password")) {
      setFormData({ ...formData, password: value });
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        email: formData.email,
        password: formData.password,
      });

      console.log("Login successful:", res.data);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image Section */}
      <div className="w-1/2 bg-blue-600 flex items-center justify-center p-6">
        <div className="text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Social media shared today, tomorrow or by location
          </h2>
          <img
            src="/mobile.png"
            alt="Social Media"
            className="max-w-[70%] h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex items-center justify-center bg-white p-10 shadow-lg">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Login account</h2>

          <input
            type="text"
            placeholder="Enter email or phone number"
            className="w-full border p-2 rounded-md mb-4"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded-md mb-4"
            onChange={handleChange}
          />

          <div
            className="text-right text-blue-500 text-sm mb-4 cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            onClick={handleLogin}
          >
            Login
          </button>

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

export default Login;
