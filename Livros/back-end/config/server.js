/*
*   objetos básicos
*/
const express = require('express')
const consign = require('consign')
const path = require('path')

// instanciar objeto express
app = express();

app.set('porta', 3002);
app.set('url', 'http://localhost:');

app.use(express.json())

// diretório estático
app.set('views', path.join(__dirname,'../api/views'))
app.set('view engine', 'ejs')

// diretório estático - public
app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;
 
module.exports = app


