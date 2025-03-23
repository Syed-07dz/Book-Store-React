import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-lg font-bold">Bookstore</h1>
      <div className="flex items-center space-x-4">
       
        <a href="/" className="text-gray-700">Home</a>
        <a href="/course" className="text-gray-700">Course</a>
        <a href="/Contact" className="text-gray-700">Contact</a>
        <a href="/About" className="text-gray-700">About</a>
        <input 
          type="text" 
          placeholder="Search..." 
          className="border px-2 py-1 rounded"
        />
        <button  className="border px-4 py-1 rounded">Login</button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="text-center py-12 bg-gray-100">
      <h2 className="text-2xl font-semibold">Dedicated Teams for your dedicated dreams</h2>
      <div className="mt-6 mx-auto w-3/4">
        <img src="" alt="Team" className="mx-auto" />
      </div>
    </div>
  );
};

const Section = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md text-center m-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">View More</button>
    </div>
  );
};

const WhyItWorks = () => {
  return (
    <div className="text-center py-8 bg-gray-100">
      <h3 className="text-xl font-bold">Why it Works</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <div className="bg-white p-4 shadow-md rounded w-60">Personalized learning</div>
        <div className="bg-white p-4 shadow-md rounded w-60">Trusted content</div>
        <div className="bg-white p-4 shadow-md rounded w-60">Tools to empower teachers</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="flex flex-wrap justify-center mt-8">
        <Section title="Developing Confident and Successful Learners" description="Lorem Ipsum is simply dummy text of the typesetting industry." />
        <Section title="Enjoy Learning with a Unique Classroom Experience" description="Lorem Ipsum is simply dummy text of the typesetting industry." />
        <Section title="Passionate Teachers That Make a Difference" description="Lorem Ipsum is simply dummy text of the typesetting industry." />
      </div>
      <WhyItWorks />
    </div>
  );
};

export default App;
