import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AboutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [feedbackSent, setFeedbackSent] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setFeedbackSent(true); // Set feedbackSent to true once the form is submitted
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-slate-800">
      <div className="w-full max-w-md p-6 bg-white dark:bg-slate-900 shadow-md rounded-lg">
        <h3 className="text-2xl font-bold text-center">Tell Us About Yourself</h3>
        
        {/* Display success message */}
        {feedbackSent && (
          <div className="bg-green-500 text-white p-2 rounded-md text-center mb-4">
            Thank you for your feedback!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none dark:bg-slate-800 dark:text-white dark:border-slate-600"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none dark:bg-slate-800 dark:text-white dark:border-slate-600"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <label htmlFor="feedback" className="block text-sm">Your Feedback</label>
            <textarea
              placeholder="Share your thoughts or feedback"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none dark:bg-slate-800 dark:text-white dark:border-slate-600"
              rows="4"
              {...register('feedback', { required: 'Feedback is required' })}
            />
            {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-700 focus:outline-none duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AboutForm;
