import React, { useState } from "react";
import { Minus, Plus, Trash2, Eye } from "lucide-react";

function Cards() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="border-b py-4 flex items-center space-x-4 px-6 bg-white shadow-md rounded-lg">
      {/* Product Image from Public Folder */}
      <img
        src="/Banner.jpg"  // Replace with your actual image name
        alt="Book Cover"
        className="w-20 h-24 object-cover rounded"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Gaming Book</h2>
        <p className="text-sm text-gray-500">Paperback, StudyIQ Publications</p>
        <p className="text-sm text-gray-500">Seller: StudyIQ</p>

        {/* Price & Discount */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-lg font-bold">Rs 200</span>
          <span className="text-green-600 text-sm font-semibold">37% off</span>
        </div>

        {/* Save for later */}
        <button className="mt-2 text-sm text-blue-600 font-semibold hover:underline">
          Save for later
        </button>
      </div>

      {/* Delivery Info */}
      <div className="text-sm text-gray-600 font-medium">Delivery in few days</div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2 border px-2 py-1 rounded-md">
        <button onClick={decreaseQuantity} className="p-1">
          <Minus size={16} />
        </button>
        <span className="px-2 text-sm">{quantity}</span>
        <button onClick={increaseQuantity} className="p-1">
          <Plus size={16} />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="p-2 text-gray-600 hover:text-red-500">
          <Trash2 size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:text-blue-500">
          <Eye size={20} />
        </button>
      </div>
    </div>
  );
}

export default Cards;
