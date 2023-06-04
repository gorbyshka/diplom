import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  console.log(req.body);

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  console.log(name, email, password);

  res.set('Access-Control-Allow-Origin', '*');

  res.json({
    status: 'success',
    name: name,
    email: email,
    password: password
  });
});

app.listen(3002, () => {
  console.log('Server listening on port 3002');
});

