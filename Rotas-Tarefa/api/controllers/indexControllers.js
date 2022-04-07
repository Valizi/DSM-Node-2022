module.exports = {
    index
}
 
function index (req, res) {
    res.render('MenuMotos.ejs',
        {title: 'Rotas',
            mensagem: 'Consulta motos',
            autor: 'Eduardo Valizi'
        })
}

 
   

