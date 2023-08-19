const express = require('express')
const UserModel = require('../src/models/user.model')

const app = express();

app.use(express.json());

app.use((req, res, next)=> {
  console.log(`Resquest Type: ${req.method}`);
  console.log(`Content Type: ${req.headers['content-type']}`);
  console.log(`Date: ${new Date()}`);

  next();
})

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.get('/home', (req,res) => {
  res.contentType('application/html')
  res.status(200).send("<h1>Hello World</h1.")
})

// app.get('/users', (req,res) => {
//   const user = [
//     {
//       nome: "Diovan baptista",
//       email: "diovantrab@gmail.com",
//     },
//     {
//       nome: "Rengoku Fogo",
//       email: "rengoku@gmail.com",
//     },
//   ];
//   res.status(200).json(user)
// })

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({})

    res.status(200).json(users);
  }
  catch (error) {
    return res.status(400).send.error;
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findById(id);

    res.status(200).json(users);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.post('/users', async (req, res) => {
  try {
      const user = await UserModel.create(req.body);

      res.status(201).json(user);
  }catch (error) {
    res.status(500).send(error.message)
  }
})

app.patch('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const users = await UserModel.findByIdAndUpdate(id, req.body, {new : true});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const users = await UserModel.findByIdAndRemove(id);

    res.status(200).json(users)
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// enviar view 
app.get('/views/users', async (req,res) => {
  const users = await UserModel.find({});
  res.render('index.ejs', {users: users});
})
const port = 8080

app.listen(port, () => console.log(`Rodando projeto com Express na porta ${port}!`))