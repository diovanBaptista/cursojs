const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url ==='/home') {
    res.writeHead(200, {"Content-Type": "tesst.html"});
    res.end('<h1> Home Page </1>');
  }

  if (req.url === '/users') {
    const user = [
      {
        nome : 'Diovan baptista',
        email : 'diovantrab@gmail.com'
      },
      {
        nome : "Rengoku Fogo",
        email : "rengoku@gmail.com"

      }
    ];
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify(user));
  }

});

server.listen(port, () => console.log(`Rodando na porta ${port}!`))