require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const paymentRoutes = require('./routes/paymentRoute');
const orderRoutes = require('./routes/orderRoute');

const app = express();
const PORT = 3000;

// CORS middleware configuration
const corsOptions = {
  origin: 'http://localhost:5173', // React frontend URL (adjust if different)
  credentials: true,  // Allow cookies and credentials to be sent with requests
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'bookstore',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // set true if using HTTPS
  })
);

// Environment variables check
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY environment variable');
  process.exit(1);
}

if (!process.env.CLIENT_URL) {
  console.warn('CLIENT_URL not set, defaulting to http://localhost:5173');
  process.env.CLIENT_URL = 'http://localhost:5173';
}

// Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/payment', paymentRoutes);
app.use('/orders', orderRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
