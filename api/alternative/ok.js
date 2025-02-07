const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173', // Allow this specific origin
};
app.use(cors(corsOptions));

let alternatvieInfo = {
  nameOfPerson: 'Lazar Djordjevic',
  occupation: 'Programmer',
};

app.get('/api/alternative', (req, res) => {
  res.json(alternatvieInfo);
});

app.post('/api/alternative', (req, res) => {
  alternatvieInfo.nameOfPerson = req.body.nameOfPerson;
  alternatvieInfo.occupation = req.body.occupation;
  res.status(201).json(alternatvieInfo);
});

app.listen(port, () => {
  console.log(`API running at http://localhost:${port}`);
});
