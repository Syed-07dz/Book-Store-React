// routes/userRoute.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/me', userController.getProfile);       // ✅ Must be BEFORE /:id
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
