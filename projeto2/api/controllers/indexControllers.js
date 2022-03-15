module.exports = {
    index
}

function index (req, res) {
    res.render('index.ejs',  {title: 'Projeto Rotas', message: 'iniciando com nodejs'})
}

