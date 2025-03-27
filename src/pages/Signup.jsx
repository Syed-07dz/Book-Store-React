import React from "react";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-blue-500 flex items-center justify-center p-6">
        <img
          src="/mobile.png" // Replace with actual image path
          alt="Signup Illustration"
          className="max-w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-1/2 bg-white flex flex-col justify-center p-12 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Create account</h2>
        <p className="text-gray-600 mb-4">It’s free and always will be.</p>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded-md" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded-md" />
          <input type="email" placeholder="Email or phone number" className="border p-2 rounded-md col-span-2" />
          <input type="password" placeholder="Password" className="border p-2 rounded-md" />
          <input type="password" placeholder="Confirm password" className="border p-2 rounded-md" />
        </div>

        <p className="text-sm text-gray-500 mt-3">
          By clicking Sign Up, you agree to our{" "}
          <a href="#" className="text-blue-500">Terms</a> and{" "}
          <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>

        <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded-md hover:bg-blue-600">
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
