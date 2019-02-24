var express = require('express');
var bodyParser = require('body-parser')
var app = express();

// parse application/json
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
    extended: true
}));// support encoded bodies

app.use(express.static(__dirname));

// Expor diretórios específicos
/* app.use(express.static('public'))
app.use(express.static('files')) */

// Expor diretórios específicos a partir de um determinado caminho
/* app.use('/static', express.static('public')) */

app.listen(4000);
console.log('Servidor iniciado na porta 4000');