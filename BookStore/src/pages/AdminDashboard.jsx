import React, { useState } from "react";
import AdminAddProduct from "./AdminAddProduct";
import AdminUsersPage from "./AdminUsersPage";
import AdminPage from "./Adminpage";

function AdminDashboard() {
  const [activePage, setActivePage] = useState("addProduct");

  const renderPage = () => {
    switch (activePage) {
      case "addProduct":
        return <AdminAddProduct />;
      case "manageUsers":
        return <AdminUsersPage />;
      case "manageOrders":
        return <AdminPage />;
      default:
        return <div>Select a page from the sidebar</div>;
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button
          onClick={() => setActivePage("addProduct")}
          className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
            activePage === "addProduct" ? "bg-gray-700" : ""
          }`}
        >
          Add Product
        </button>
        <button
          onClick={() => setActivePage("manageOrders")}
          className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
            activePage === "manageOrders" ? "bg-gray-700" : ""
          }`}
        >
          Manage Orders
        </button>
        <button
          onClick={() => setActivePage("manageUsers")}
          className={`block w-full text-left px-4 py-2 rounded hover:bg-gray-700 ${
            activePage === "manageUsers" ? "bg-gray-700" : ""
          }`}
        >
          Manage Users
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}

export default AdminDashboard;
