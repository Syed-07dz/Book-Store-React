import React from "react";

const About = () => {
  return (
    <div className="text-center py-12 bg-gray-100 mt-5">
      <h2 className="text-2xl font-semibold">About Us</h2>
      <p className="mt-4 text-gray-800 w-3/4 mx-auto">
      Welcome to Bookstore  your go-to destination for discovering a world of knowledge, adventure, and creativity! Whether you're a passionate reader, a student seeking educational resources, or simply someone looking for a good story to escape into, we have something for everyone.
      </p>
      <div className="mt-6 mx-auto w-3/4">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1738344239~exp=1738347839~hmac=16810b8d16f0b263f9076041f1a4b2046761abc663bb16e5dd1043a35216e557&w=740"
          alt="About Us"
          style={{ height: "400px" }}
          className="mt-9"
        />
      </div>
    </div>
  );
};

export default About;
