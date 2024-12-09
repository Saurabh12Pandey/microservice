// user-service/index.js

const express = require('express');
const app = express();
const port = 3001; // Or any other port for your user service

// Root route for User Service
app.get('/', (req, res) => {
  res.send('User Service is working!');
});

// Sample route to fetch user details
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({ message: `Details of user ${userId}` });
});

// Start the User Service server
app.listen(port, () => {
  console.log(`User Service is running at http://localhost:${port}`);
});
