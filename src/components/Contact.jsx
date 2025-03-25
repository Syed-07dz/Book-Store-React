import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Your message has been sent successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <Navbar />  

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 mt-20">
        {/* Contact Info Sidebar */}
        <div className="w-full md:w-1/3 bg-black text-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>Say something to start a live chat!</p>
          <p className="mt-4">📞 +91 9334566855</p>
          <p>📧 demo@gmail.com</p>
          <p>📍 132 Dartmouth Street, Boston, MA 02156, USA</p>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
          <p className="text-center mb-6">Any question or remarks? Just write us a message!</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                {...register('firstName', { required: 'First Name is required' })} 
                className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                {...register('lastName')} 
                className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
              />
            </div>
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            
            <input 
              type="email" 
              placeholder="Email" 
              {...register('email', { required: 'Email is required' })} 
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

            <input 
              type="text" 
              placeholder="Phone Number" 
              {...register('phone')} 
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" 
            />

            <textarea 
              placeholder="Write your message.." 
              {...register('message', { required: 'Message is required' })} 
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 h-24"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            
            <button 
              type="submit" 
              className="w-full bg-black text-white p-2 rounded hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-6 text-center mt-10">
        <p>📞 +012 3456 789 | 📧 demo@gmail.com | 📍 132 Dartmouth Street, Boston, MA 02156, USA</p>
        <p className="mt-2">© 2025 Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
