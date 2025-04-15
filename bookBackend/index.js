// server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoute');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// User routes (base path = /users)
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
