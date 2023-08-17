const path = require('path')

//  apena snome do arquiov atual
console.log(path.basename(__filename));

// nome do diretorio atual 

console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// criar objeto path
console.log(path.parse(__filename));

// juntar caminho de arquivos
console.log(path.join(__dirname, 'test','test.html'));
// console.log(__dirname)