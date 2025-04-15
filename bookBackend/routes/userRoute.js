// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// Create a new user
router.post('/signup', userController.createUser);

// Get all users
router.get('/', userController.getAllUsers);

// Get user by ID
router.get('/:id', userController.getUserById);

// 👇 Login Route
router.post('/login', userController.loginUser);
module.exports = router;
