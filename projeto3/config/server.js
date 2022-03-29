const express = require('express')// importar biblioteca
const consign = require('consign')
const path = require('path')
const body = require('body-parser')
app = express();

app.set('url', 'http//localhost:')
app.set('porta', 3000)

app.use(express.json())


app.set('views', path.join(__dirname, '../api/views'))
app.set('view engine', 'ejs')


app.use('/static', express.static(__dirname + '/public'))
app.use(express.static('public'))
app.use(express.static('estilos'))
app.use(express.static('imagens'))

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;
module.exports = app     