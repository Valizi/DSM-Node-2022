module.exports = {
    mhonda,
    mcity,
    mtitan
}
 
function mhonda (req, res) {
    res.render('Honda/Menuhonda.ejs',
        {title: 'Rotas',
            mensagem: 'Consulta motos',
            autor: 'Eduardo Valizi'
        })
}

function mcity (req, res) {
    res.render('Honda/Menucity.ejs',
        {title: 'Rotas',
            mensagem: 'Consulta motos',
            autor: 'Eduardo Valizi'
        })
}

function mtitan (req, res) {
    res.render('Honda/Menutitan.ejs',
        {title: 'Rotas',
            mensagem: 'Consulta motos',
            autor: 'Eduardo Valizi'
        })
}
 
   



 
   

