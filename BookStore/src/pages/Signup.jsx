import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/users/signup", {
        f_name: formData.f_name,
        l_name: formData.l_name,
        email: formData.email,
        password: formData.password,
      });

      console.log("User created:", res.data);
      alert("Account created successfully!");
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
      alert("Signup failed!");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-blue-500 flex items-center justify-center p-6">
        <img
          src="/mobile.png"
          alt="Signup Illustration"
          className="max-w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-12 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Create account</h2>
        <p className="text-gray-600 mb-4">It’s free and always will be.</p>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="f_name"
            placeholder="First Name"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.f_name}
          />
          <input
            type="text"
            name="l_name"
            placeholder="Last Name"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.l_name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded-md col-span-2"
            onChange={handleChange}
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.password}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border p-2 rounded-md"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <p className="text-sm text-gray-500 mt-3">
          By clicking Sign Up, you agree to our{" "}
          <a href="#" className="text-blue-500">Terms</a> and{" "}
          <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>

        <button
          className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600"
          onClick={handleSignUp}
        >
          Create account
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
