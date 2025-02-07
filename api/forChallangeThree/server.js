const express = require('express');
const cors = require('cors');
const app = express();
const port = 3110;

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Allow this specific origin
};
app.use(cors(corsOptions));

// Example dataset
const data = {
  id: 1,
  first_name: 'john',
  last_name: 'doe',
  email: 'john.doe@example.com',
  category: 'admin',
  details: {
    registration_date: '2023-01-15',
    last_login: 'some date',
  },
};

// GET endpoint
app.get('/api/forChallangeThree', (req, res) => {
  res.json(data);
});

app.post('/api/forChallangeThree', (req, res) => {
  data.details.last_login = req.body.details.last_login;
  res.status(201).json(data);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
