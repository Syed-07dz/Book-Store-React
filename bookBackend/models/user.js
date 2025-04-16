// models/user.js
const pool = require('../dbconn');

// Create a new user
const createUser = async (f_name, l_name, email, password) => {
  const result = await pool.query(
    'INSERT INTO users (f_name, l_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
    [f_name, l_name, email, password]
  );
  return result.rows[0];
};

// Get all users
const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

// Get user by ID
const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// Login - check email and password
const loginUser = async (email, password) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE email = $1 AND password = $2',
    [email, password]
  );
  return result.rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  loginUser
};
