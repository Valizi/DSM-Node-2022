const express = require('express')
const rotas = express.Router()

//Array chave x vallor
const cursosInfo = [
    {'curso':'Css','info':'Curso Introdutorio Css'},
    {'curso':'javascript','info':'Curso Introdutorio JavaScript'},
    {'curso':'Node.js','info':'Curso Introdutorio Node.Js'},
    {'curso':'Excell','info':'Curso Introdutorio Excell'},
    {'curso':'React','info':'Curso Introdutorio React'},
    
]
rotas.get('/',(req, res) => {
    res.json({Ola: 'Rota raiz encontrada'})
})
rotas.get('/:cursoid', (req, res) => {
    const curso = req.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso)
    if(!cursoI){
        res.status(404).json(
            {erro: 'Curso não encontrado!', cursoPesquisado:curso}
        )

    } else{
        res.status(200).json(cursoI)
    }
})
module.exports = rotas