// controller/userController.js
const userModel = require('../models/user');

// Create new user
const createUser = async (req, res) => {
  try {
    const { f_name, l_name, email, password } = req.body;
    const newUser = await userModel.createUser(f_name, l_name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.loginUser(email, password);
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    req.session.user = {
      id: user.id,
      f_name: user.f_name,
      l_name: user.l_name,
      email: user.email,
    };
    console.log(user.id)
    res.status(200).json({ message: 'Login successful', user: req.session.user });
  } catch (err) {
  
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProfile = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ error: 'Not logged in' });
    }

    // Use the logged-in user's ID from the session
    const user = await userModel.getUserById(req.session.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getProfile,
  createUser,
  getAllUsers,
  getUserById,
  loginUser
};
