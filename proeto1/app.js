const express = require('express')// importar biblioteca
const rotas = require('./rotas.js')
const porta = process.env.PORT || 3000
const app = express()
app.use('/', rotas)
app.listen(porta, () => {
    console.log("Rodando na porta" + porta)
})