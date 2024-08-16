const express = require('express');
const path = require('path');
const app = express();

// Serve apenas os arquivos estáticos na pasta dist
app.use(express.static(__dirname + '/dist/mkstech'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/mkstech/index.html'));
});

// Inicia a aplicação pela porta padrão do Heroku
app.listen(process.env.PORT || 8080);
