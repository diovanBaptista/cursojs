const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express();

app.use(express.json());

app.get('/home', (req,res) => {
  res.contentType('application/html')
  res.status(200).send("<h1>Hello World</h1.")
})

app.get('/users', (req,res) => {
  const user = [
    {
      nome: "Diovan baptista",
      email: "diovantrab@gmail.com",
    },
    {
      nome: "Rengoku Fogo",
      email: "rengoku@gmail.com",
    },
  ];
  res.status(200).json(user)
})

app.post('/users', async (req, res) => {
  try {
      const user = await UserModel.create(req.body);

      res.status(201).json(user);
  }catch (error) {
    res.status(500).send(error.message)
  }
})

const port = 8080

app.listen(port, () => console.log(`Rodando projeto com Express na porta ${port}!`))