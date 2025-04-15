// server.js
const express = require("express");
const pool = require("./dbconn");
require("dotenv").config();

const app = express();
app.use(express.json());

// Route to insert user into 'user' table
app.post("/users", async (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
