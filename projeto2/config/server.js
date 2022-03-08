const express = require('express')// importar biblioteca
const consign = require('consign')

app = express();

app.set('url', 'http//localhost:')
app.set('porta', 30025)

consign({cwd: 'api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;
module.exports = app     