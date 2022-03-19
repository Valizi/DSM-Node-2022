module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',  {
        title: 'Rotas', 
            message: 'iniciando com nodejs',
            conteudo:'corpo da pagina',
            autor:'2 dsm - wev II',
    })
}

