import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Contact Information */}
      <div className="bg-black text-white p-8 md:w-1/3 flex flex-col justify-center">
        <h2 className="text-xl font-bold">Contact Information</h2>
        <p className="mt-2">Say something to start a live chat!</p>
        <p className="mt-4">📞 +91 93345666555</p>
        <p className="mt-2">✉️ demo@gmail.com</p>
        <p className="mt-2">📍 132 Dartmouth Street, Boston, MA 02156, USA</p>
      </div>

      {/* Contact Form */}
      <div className="p-8 md:w-2/3 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center">Contact Us</h1>
        <p className="text-center mb-6">Any question or remarks? Just write us a message!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-full" required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-full" required />
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" required />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} className="border p-2 w-full" required />
          
          <label className="block font-semibold">Select Subject:</label>
          <div className="flex space-x-4">
            {Array(4).fill("General Inquiry").map((subject, index) => (
              <label key={index} className="flex items-center">
                <input type="radio" name="subject" value={subject} checked={formData.subject === subject} onChange={handleChange} className="mr-2" />
                {subject}
              </label>
            ))}
          </div>

          <textarea name="message" placeholder="Write your message.." onChange={handleChange} className="border p-2 w-full h-24" required />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
