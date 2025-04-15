// models/user.js
const pool = require('../dbconn');

// Create a new user
const createUser = async (f_name, l_name, email, password) => {
  const result = await pool.query(
    'INSERT INTO "User" ("F_name", "L_name", "Email", "Password") VALUES ($1, $2, $3, $4) RETURNING *',
    [f_name, l_name, email, password]
  );
  return result.rows[0];
};

// Get all users
const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM "User"');
  return result.rows;
};

// Get user by ID
const getUserById = async (id) => {
  const result = ""
  return result;
};

// Login - check email and password
const loginUser = async (email, password) => {
  const result = await pool.query(
    'SELECT * FROM "User" WHERE "Email" = $1 AND "Password" = $2',
    [email, password]
  );
  return result.rows[0]; // will be undefined if no match
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  loginUser
};
