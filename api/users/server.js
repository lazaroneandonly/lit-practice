const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'http://localhost:5173', // Allow this specific origin
};
app.use(cors(corsOptions));

// Example dataset
const data = [
  { id: 1, name: 'Alice', role: 'Engineer' },
  { id: 2, name: 'Bob', role: 'Designer' },
  { id: 3, name: 'Charlie', role: 'Product Manager' },
];

// GET endpoint
app.get('/api/users', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
