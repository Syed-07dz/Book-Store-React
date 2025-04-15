// routes/users.js

const express = require("express");
const router = express.Router();
const pool = require("../db"); // Adjust path if needed

// POST /users - Create a new user
router.post("/signup", async (req, res) => {
  const { f_name, l_name, email, password } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO "User" ("F_name", "L_name", "Email", "Password") VALUES ($1, $2, $3, $4) RETURNING *',
      [f_name, l_name, email, password]
    );

    res.status(201).json({
      message: "User created successfully",
      user: result.rows[0],
    });
  } catch (err) {
    console.error("Insert user error:", err.message);
    res.status(500).json({ error: "Failed to create user" });
  }
});
// Login without encryption
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM "User" WHERE "Email" = $1 AND "Password" = $2',
      [email, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result.rows[0];
    delete user.Password;

    res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});
module.exports = router;
