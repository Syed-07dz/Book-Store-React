import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-6 max-w-lg w-full bg-base-100 dark:bg-slate-800 text-base-content dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close Button */}
            <Link to="/" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          </form>
          
          <h3 className="font-bold text-lg text-center">Login</h3>
          
          {/* Email */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-900 dark:text-white dark:border-slate-600"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1 block">This field is required</span>}
          </div>
          
          {/* Password */}
          <div className="mt-4">
            <label htmlFor="password" className="block text-sm">Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-slate-900 dark:text-white dark:border-slate-600"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500 text-sm mt-1 block">This field is required</span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button type="submit" className="w-full bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
              Login
            </button>
          </div>

          {/* Not Registered Link */}
          <div className="text-center mt-4">
            <p>
              Not registered?{" "}
              <Link to="/signup" className="underline text-blue-500">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
