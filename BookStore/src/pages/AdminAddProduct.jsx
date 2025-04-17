import React, { useState } from "react";
import axios from "axios";

function AdminAddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    descr: "",
    category: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      ...product,
      image: "./Banner.jpg",
    };

    try {
      const res = await axios.post("http://localhost:3000/products", productData);
      console.log("Product added:", res.data);
      setMessage("✅ Product added successfully!");
      setProduct({ name: "", price: "", desc: "", category: "" });
    } catch (err) {
      console.error("Failed to add product:", err);
      setMessage("❌ Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Products</h1>
        {message && (
          <div className="mb-4 text-center text-sm font-medium text-green-600">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
            className="w-full border p-2 rounded-md"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            required
            className="w-full border p-2 rounded-md"
          />
          <textarea
            name="descr"
            value={product.descr}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full border p-2 rounded-md"
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full border p-2 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddProduct;
