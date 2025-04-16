const productModel = require('../models/product');

// Add new product
const addProduct = async (req, res) => {
  try {
    const { name, price, descr, category } = req.body;

    // Static image
    const image = "./Banner.jpg";

    const newProduct = await productModel.addProduct(name, price, descr, category, image);
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
};
