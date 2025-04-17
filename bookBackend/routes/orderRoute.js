const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');

// Create new order
router.post('/create', orderController.createOrder);

// Get user's orders
router.get('/user/:userId', orderController.getUserOrders);

// Get all orders (admin only)
router.get('/', orderController.getAllOrders);

// Update order status
router.put('/:orderId', orderController.updateOrderStatus);

module.exports = router; 