import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/orders');
      setOrders(response.data.map(order => ({
        ...order,
        isEditing: false
      })));
      setError(null);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to load orders. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleOrderEditToggle = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, isEditing: !order.isEditing } : order
      )
    );
  };

  const handleOrderChange = async (id, field, value) => {
    try {
      if (field === 'status') {
        // Update order status in the backend
        await axios.put(`http://localhost:3000/orders/${id}`, { status: value });
        
        // Update local state
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, [field]: value } : order
          )
        );
      }
    } catch (err) {
      console.error('Error updating order:', err);
      alert('Failed to update order status. Please try again.');
    }
  };

  const handleOrderDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this order?')) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:3000/orders/${id}`);
      if (response.data.success) {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        alert('Order deleted successfully');
      } else {
        alert('Failed to delete order: ' + response.data.message);
      }
    } catch (err) {
      console.error('Error deleting order:', err);
      alert('Failed to delete order. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8 flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

        {/* Manage Orders */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Manage Orders</h2>
            <button 
              onClick={fetchOrders}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Refresh Orders
            </button>
          </div>
          
          <div className="space-y-4">
            {orders.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No orders found</p>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="font-medium text-lg mb-2">
                      Order #{order.id}
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Items: {order.items.length} products</p>
                      <p>Total Amount: ₹{order.total_amount}</p>
                      <p>Customer: {order.customer_details.name}</p>
                      <p>Date: {new Date(order.order_date).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <select
                      value={order.status}
                      onChange={(e) => handleOrderChange(order.id, "status", e.target.value)}
                      className="border p-2 rounded-md bg-white"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>

                    <button
                      onClick={() => handleOrderDelete(order.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminPage;
