const express = require('express')// importar biblioteca
const consign = require('consign')

app = express();

app.set('url', 'http//localhost:')
app.set('porta', 30025)

app.use(express.json())

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;
module.exports = app     