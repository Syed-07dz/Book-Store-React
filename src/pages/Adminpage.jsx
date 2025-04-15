import React, { useState } from "react";

function AdminPage() {
  const [orders, setOrders] = useState([
    { id: 1, item: "story book", status: "Processing", isEditing: false },
    { id: 2, item: "sport book", status: "Delivered", isEditing: false },
  ]);

  const [newBook, setNewBook] = useState({ item: "", status: "Processing" });

  const handleOrderEditToggle = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, isEditing: !order.isEditing } : order
      )
    );
  };

  const handleOrderChange = (id, field, value) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, [field]: value } : order
      )
    );
  };

  const handleOrderDelete = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const handleNewBookChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddNewBook = () => {
    if (!newBook.item.trim()) {
      alert("Book name cannot be empty.");
      return;
    }
    const newOrder = {
      id: Date.now(),
      item: newBook.item,
      status: newBook.status,
      isEditing: false,
    };
    setOrders([...orders, newOrder]);
    setNewBook({ item: "", status: "Processing" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        {/* Add New Book */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Book</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              name="item"
              value={newBook.item}
              onChange={handleNewBookChange}
              placeholder="Book Name"
              className="border p-2 rounded-md w-full sm:w-1/2"
            />
            <select
              name="status"
              value={newBook.status}
              onChange={handleNewBookChange}
              className="border p-2 rounded-md"
            >
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button
              onClick={handleAddNewBook}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Book
            </button>
          </div>
        </section>

        {/* Manage Orders */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border p-4 rounded-lg bg-gray-50"
              >
                <div className="flex-1">
                  {order.isEditing ? (
                    <input
                      type="text"
                      value={order.item}
                      onChange={(e) =>
                        handleOrderChange(order.id, "item", e.target.value)
                      }
                      className="border p-2 rounded-md w-full"
                    />
                  ) : (
                    <p className="font-medium text-lg">{order.item}</p>
                  )}
                  <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                  {order.isEditing ? (
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleOrderChange(order.id, "status", e.target.value)
                      }
                      className="border p-2 rounded-md"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  ) : (
                    <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                      {order.status}
                    </span>
                  )}

                  <button
                    onClick={() => handleOrderEditToggle(order.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                  >
                    {order.isEditing ? "Save" : "Edit"}
                  </button>

                  <button
                    onClick={() => handleOrderDelete(order.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPage;
