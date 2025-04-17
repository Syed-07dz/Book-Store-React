const pool = require('../dbconn');

console.log('Initializing order model...');

const orderModel = {
  // Create new order
  createOrder: async (orderData) => {
    console.log('Creating new order with data:', orderData);
    const { userId, items, totalAmount, customerDetails, status, orderDate } = orderData;
    
    const sql = `
      INSERT INTO orders (user_id, items, total_amount, customer_details, status, order_date)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;
    
    try {
      console.log('Executing order creation query with params:', {
        userId,
        itemsLength: items.length,
        totalAmount,
        status,
        orderDate
      });
      
      const result = await pool.query(sql, [
        userId || null,
        JSON.stringify(items),  // Explicitly stringify for PostgreSQL
        totalAmount,
        JSON.stringify(customerDetails),  // Explicitly stringify for PostgreSQL
        status,
        orderDate
      ]);
      
      if (result.rows && result.rows.length > 0) {
        console.log('✅ Order created successfully:', result.rows[0]);
        return result.rows[0];
      } else {
        throw new Error('Order created but no data returned');
      }
    } catch (err) {
      console.error('❌ Error in createOrder:', err);
      console.error('Error details:', {
        code: err.code,
        message: err.message,
        detail: err.detail || 'No additional details'
      });
      throw err;
    }
  },

  // Get orders by user ID
  getOrdersByUserId: async (userId) => {
    const sql = 'SELECT * FROM orders WHERE user_id = $1 ORDER BY order_date DESC';
    try {
      const result = await pool.query(sql, [userId]);
      return result.rows;
    } catch (err) {
      console.error('Error in getOrdersByUserId:', err);
      throw err;
    }
  },

  // Get all orders
  getAllOrders: async () => {
    const sql = 'SELECT * FROM orders ORDER BY order_date DESC';
    try {
      const result = await pool.query(sql);
      return result.rows;
    } catch (err) {
      console.error('Error in getAllOrders:', err);
      throw err;
    }
  },

  // Update order status
  updateOrderStatus: async (orderId, status) => {
    const sql = 'UPDATE orders SET status = $1 WHERE id = $2 RETURNING *';
    try {
      const result = await pool.query(sql, [status, orderId]);
      return { success: true, message: 'Order status updated', order: result.rows[0] };
    } catch (err) {
      console.error('Error in updateOrderStatus:', err);
      throw err;
    }
  }
};

module.exports = orderModel; 