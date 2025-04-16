DB_HOST='localhost'
DB_PORT=5432
DB_USER='postgres'
DB_PASSWORD='5432'
DB_NAME='BookStore'

const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password:DB_PASSWORD,
  database: DB_NAME,
});

pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err.stack));

module.exports = pool;
