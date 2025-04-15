import React, { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [orders] = useState([
    { id: 1, item: "story book", status: "Processing" },
    { id: 2, item: "sport book", status: "Delivered" },
  ]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileSave = () => {
    setIsEditingProfile(false);
    alert("Profile saved!");
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
              disabled={!isEditingProfile}
              className={`w-full border p-2 rounded-md ${!isEditingProfile ? "bg-gray-100 cursor-not-allowed" : ""}`}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              disabled={!isEditingProfile}
              className={`w-full border p-2 rounded-md ${!isEditingProfile ? "bg-gray-100 cursor-not-allowed" : ""}`}
              placeholder="Email"
            />

            {isEditingProfile ? (
              <button
                onClick={handleProfileSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Save Profile
              </button>
            ) : (
              <button
                onClick={() => setIsEditingProfile(true)}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Edit Profile
              </button>
            )}
          </div>
        </section>

        {/* Orders Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between border p-3 rounded-md bg-gray-50 gap-3"
              >
                <div>
                  <p className="font-medium">{order.item}</p>
                  <p className="text-sm text-gray-600">Order ID: {order.id}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
