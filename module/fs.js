const { error } = require("console");
const fs = require("fs");
const path = require("path");
const parh = require("path");

// crir uma pasta
// fs.mkdir(path.join(__dirname, '/test'),
//  (error) => {
//   if (error) {
//   return console.log(`erro`, error)
//   }
//   console.log('Pasta criada com sucesso')
// })

// cria rum arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node!",
  (error) => {
    if (error) {
      return console.log(`erro`, error);
    }

    console.log("arquivo criado com sucesso");
  
  // adicionar a um arquivo
  fs.appendFile(
    path.join(__dirname, "/test", "test.txt"),
    " Hello World!",
    (error) => {
      if (error) {
        return console.log(`erro`, error);
      }
      console.log("Texto adicionado com sucesso");
    }
  );

  // ler arquivo
  fs.readFile(
    path.join(__dirname, "/test", "test.txt"),
    "utf8",
    (error, data) => {
      if (error) {
        return console.log(`Erro:`, error);
      }
      console.log(data);
    }
);
})


