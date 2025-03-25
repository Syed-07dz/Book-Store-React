import React from "react";
import Navbar from "./Navbar"; // Ensure Navbar.js exists in the same directory

const HeroSection = () => {
  return (
    <div className="text-center py-12 bg-gray-100 mt-5">
      <h2 className="text-2xl font-semibold ">Dedicated Teams for your dedicated dreams</h2>
      <div className="mt-6 mx-auto w-3/4">
        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1738344239~exp=1738347839~hmac=16810b8d16f0b263f9076041f1a4b2046761abc663bb16e5dd1043a35216e557&w=740" alt="Team" className="" style={{height:"400px"}} />
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
        <Section
          title="Developing Confident and Successful Learners"
          description="Lorem Ipsum is simply dummy text of the typesetting industry."
        />
        <Section
          title="Enjoy Learning with a Unique Classroom Experience"
          description="Lorem Ipsum is simply dummy text of the typesetting industry."
        />
        <Section
          title="Passionate Teachers That Make a Difference"
          description="Lorem Ipsum is simply dummy text of the typesetting industry."
        />
      </div>
      <WhyItWorks />
    </div>
  );
};

export default App;
