const express = require('express');
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Middleware (optional, but commonly used)
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('M World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
