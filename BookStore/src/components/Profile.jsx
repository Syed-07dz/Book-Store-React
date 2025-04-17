import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [orders] = useState([
    { id: 1, item: "story book", status: "Processing" },
    { id: 2, item: "sport book", status: "Delivered" },
  ]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/me", {
          withCredentials: true,
        });
        console.log("Fetched profile:", res.data);
  
        setProfile({
          name: `${res.data.f_name} ${res.data.l_name}`,
          email: res.data.email,
        });
      } catch (err) {
        console.error("Failed to fetch profile", err.response?.data || err.message);
      }
    };
  
    fetchProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSave = async () => {
    try {
      // Optionally send updated profile data to backend
      // await axios.put("http://localhost:3000/users/me", profile, { withCredentials: true });

      setIsEditingProfile(false);
      alert("Profile saved!");
    } catch (error) {
      console.error("Failed to save profile", error);
    }
  };

  if (!profile) return <div className="p-8">Loading...</div>;

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
              name="f_name"
              value={profile.f_name}
              onChange={handleProfileChange}
              disabled={!isEditingProfile}
              className={`w-full border p-2 rounded-md ${
                !isEditingProfile ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              placeholder="First Name"
            />
            <input
              type="text"
              name="l_name"
              value={profile.l_name}
              onChange={handleProfileChange}
              disabled={!isEditingProfile}
              className={`w-full border p-2 rounded-md ${
                !isEditingProfile ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              disabled={!isEditingProfile}
              className={`w-full border p-2 rounded-md ${
                !isEditingProfile ? "bg-gray-100 cursor-not-allowed" : ""
              }`}
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
