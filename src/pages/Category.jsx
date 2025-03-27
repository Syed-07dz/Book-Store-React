import React from "react";

const categories = [
  { title: "Study material" },
  { title: "Comics" },
  { title: "Comics" },
];

const Category = () => {
  return (
    <div className="bg-pink-100 p-6">
      {/* Header Section */}
      <div className="text-center p-6">
        <h2 className="italic text-gray-800 text-6xl font-bold ">
          We’re delighted to have you{" "}
          <span className="text-pink-600">Here! :)</span>
        </h2>
        <p className="text-gray-600 mx-auto mt-2 text-2xl w-full">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md mt-4">
          Back
        </button>
      </div>

      {/* Categories */}
      {categories.map((category, index) => (
        <div key={index} className="mt-8">
          <div className="flex justify-between items-center px-4">
            <h3 className="font-semibold text-gray-700">{category.title}</h3>
            <a href="#" className="text-blue-600 italic">
              See all
            </a>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-3 gap-6 mt-4">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-200 p-4 shadow-md rounded-lg text-center"
              >
                <img
                  src="/Banner.jpg"
                  alt="Book Cover"
                  className="w-50 h-50 object-cover rounded"
                />
                <h4 className="font-bold mt-2">Gaming Book</h4>
                <p className="text-sm text-gray-500">
                  Lorem ipsum is simple dummy
                </p>
                <div className="flex justify-between items-center mt-3">
                  <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    ₹ 200
                  </span>
                  <button className="bg-pink-600 text-white px-3 py-1 rounded">
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
