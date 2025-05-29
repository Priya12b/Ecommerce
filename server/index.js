//server/index.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 149.99,
      image: "https://via.placeholder.com/150"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
