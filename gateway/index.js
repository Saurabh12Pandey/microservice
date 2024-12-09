// gateway/index.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000; // Or any other port for your gateway service

// Root route for Gateway
app.get('/', (req, res) => {
  res.send('Gateway is working!');
});

// Proxy requests to Order Service
app.get('/orders/:userId', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:3002/orders/${req.params.userId}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error contacting order service');
  }
});

// Start the Gateway server
app.listen(port, () => {
  console.log(`Gateway Service is running at http://localhost:${port}`);
});
