const orderModel = require('../models/order');

console.log('Order controller module loaded');

// Create new order
const createOrder = async (req, res) => {
  try {
    console.log('Received order request with body:', req.body);
    const { items, totalAmount, customerDetails, status } = req.body;
    
    // Validate required fields
    if (!items || !totalAmount || !customerDetails) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const orderData = {
      userId: req.session && req.session.user ? req.session.user.id : null,
      items,
      totalAmount,
      customerDetails,
      status: status || 'pending',
      orderDate: new Date().toISOString()
    };

    console.log('Creating order with data:', orderData);
    
    const newOrder = await orderModel.createOrder(orderData);
    console.log('Order created successfully:', newOrder);
    res.status(201).json({ success: true, order: newOrder });
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ error: 'Failed to create order', message: err.message });
  }
};

// Get user's orders
const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await orderModel.getOrdersByUserId(userId);
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching user orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Get all orders (admin only)
const getAllOrders = async (req, res) => {
  try {
    // TODO: Add admin check middleware
    const orders = await orderModel.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching all orders:', err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    const updatedOrder = await orderModel.updateOrderStatus(orderId, status);
    res.status(200).json(updatedOrder);
  } catch (err) {
    console.error('Error updating order:', err);
    res.status(500).json({ error: 'Failed to update order' });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus
}; 