module.exports = {
    mharley
}
 
function mharley (req, res) {
    res.render('Harley/Menuharley.ejs',
        {title: 'Rotas',
            mensagem: 'Em construção',
            autor: 'Eduardo Valizi'
        })
}

 
   

