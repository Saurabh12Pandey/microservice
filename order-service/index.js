// Example for order-service/index.js

const express = require('express');
const app = express();
const port = 3002;

// Define a root route
app.get('/', (req, res) => {
  res.send('Order Service is working!');
});

// Sample route for orders
app.get('/orders/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({ message: `Order for user ${userId}` });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Order Service is running at http://localhost:${port}`);
});
