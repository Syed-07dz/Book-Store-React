import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Your message has been sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center mb-6">
          Any question or remarks? Just write us a message!
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
              className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
              className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="text"
            placeholder="Phone Number"
            {...register("phone")}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          />

          <textarea
            placeholder="Write your message.."
            {...register("message", { required: "Message is required" })}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 h-24"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-gray-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
