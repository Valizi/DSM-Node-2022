const {response} = require('express')
const models = require ('../models/models.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
 
module.exports = {
    rotaRaiz,
    cursoGetById,
    cepGetById,
    livrosGetById,
    // norisGetById,
    githubGetById,
    sabespgetbyid
}

function rotaRaiz(req, res) {
    console.log('Rota Raiz Encontrada')
    res.json({Ola: 'Rota Raiz encontrada'})
}
function cursoGetById(req, res){
    const curso = req.params.cursoid
    console.log("parametro esperado:" + curso)
    res.json({message: "rota consultar cursos encontrada"})
    
    let leitura
    console.time(leitura)
    
    models.getByIdCurso(curso)

    console.timeEnd(leitura)
    console.log('== Curso ====================')
}
function cepGetById(req, res) {
    const cep = req.params.cepid;
    console.log("Parametro esperado: " + cep);

    const url = `http://viacep.com.br/ws/`+cep+`/json/`
    console.log("Endereço:" + url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function(error){
            console.log("Erro na requisição");
        })
        .finally(function (){
            console.log("Sempre apresentrá esta mensagem")
        });
}  

function livrosGetById(req, res) {
    const livro = req.params.livroid;
    console.log("Parametro esperado: " + livro);
    var leitura
    console.time (leitura)

    models.getByIdLivro(livro);

    console.timeEnd(leitura)
    console.log("==Livro==============")
}

// function norisGetById(req, res) {
//     const noris = req.params.norrisid;
//     console.log("Parametro esperado: " + noris);

//     const url = `https://api.chucknorris.io/jokes/random`
//     console.log("Endereço:" + url)

//     fetch(url)
//         .then((response) => response.json())
//         .then(data => {
//             dados = data
//             res.json({message:dados})
//         })
//         .then(response => console.log(dados))
//         .catch(function(error){
//             console.log("Erro na requisição");
//         })
//         .finally(function (){
//             console.log("Sempre apresentrá esta mensagem")
//         });
// }  

function githubGetById(req, res) {
    const github = req.params.perfilid
    console.log("Parametro esperado: " + github);
    
        const url = `https://api/github/user/` + github
        console.log("Endereço:" + url)
    
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                dados = data
                res.json({message:dados})
            })
            .then(response => console.log(dados))
            .catch(function(error){
                console.log("Erro na requisição");
            })
            .finally(function (){
                console.log("Sempre apresentrá esta mensagem")
            });
}  

function sabespgetbyid(req, res) {
    const sab = req.params.dataid;
    console.log("Parametro esperado: " + sab);

    const url = `http://sabesp-api.herokuapp.com/`+ sab
    console.log("Endereço:" + url)

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            dados = data
            res.json({message:dados})
        })
        .then(response => console.log(dados))
        .catch(function(error){
            console.log("Erro na requisição");
        })
        .finally(function (){
            console.log("Sempre apresentrá esta mensagem")
        });
}  
    
