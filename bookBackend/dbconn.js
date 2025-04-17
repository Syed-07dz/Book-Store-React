require("dotenv").config();

const { Pool } = require("pg");

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || '5432',
  database: process.env.DB_NAME || 'BookStore'
};

console.log('Initializing database connection with config:', {
  ...DB_CONFIG,
  password: '****' // Hide password in logs
});

const pool = new Pool(DB_CONFIG);

pool.connect()
  .then(() => {
    console.log("✅ Connected to PostgreSQL");
    console.log("Database:", DB_CONFIG.database);
  })
  .catch((err) => {
    console.error("❌ Connection error:", err.message);
    console.error("Stack:", err.stack);
  });

module.exports = pool;
