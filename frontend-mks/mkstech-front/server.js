const express = require('express');
const path = require('path');
const app = express();

// Serve os arquivos estáticos da pasta 'dist/mkstech-front'
app.use(express.static(path.join(__dirname, 'dist/mkstech-front')));

// Roteia todas as solicitações para o arquivo index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/mkstech-front/browser/index.html'));
});

// Define a porta que o servidor irá ouvir
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});



// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve apenas os arquivos estáticos na pasta dist
// app.use(express.static(__dirname + '/dist/mkstech-front/browser'));

// app.get('/*', function(req,res) {
//     res.sendFile(path.join(__dirname+'/dist/mkstech-front/browser/index.html'));
// });

// // Inicia a aplicação pela porta padrão do Heroku
// app.listen(process.env.PORT || 8080);
