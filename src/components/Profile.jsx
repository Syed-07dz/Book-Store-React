
import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const [orders, setOrders] = useState([
    { id: 1, item: "story book", status: "Processing" },
    { id: 2, item: "sport book", status: "Delivered" },
  ]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleOrderChange = (id, value) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: value } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>

        {/* Profile Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              className="w-full border p-2 rounded-md"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border p-2 rounded-md"
              placeholder="Email"
            />
          </div>
        </section>

        {/* Orders Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between border p-3 rounded-md bg-gray-50"
              >
                <div>
                  <p className="font-medium">{order.item}</p>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                </div>
                <select
                  value={order.status}
                  onChange={(e) => handleOrderChange(order.id, e.target.value)}
                  className="border p-2 rounded-md"
                >
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
