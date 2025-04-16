const pool = require('../dbconn');

const addProduct = async (name, price, desc, category, image) => {
  const result = await pool.query(
    'INSERT INTO products (name, price, descr, category, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, price, desc, category, image]
  );
  return result.rows[0];
};

const getAllProducts = async () => {
  const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
  return result.rows;
};

module.exports = {
  addProduct,
  getAllProducts,
};
