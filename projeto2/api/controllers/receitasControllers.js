module.exports = {
    MenuR
}

function MenuR (req, res) {
    res.render('receitas/receitasMenu',  {
        title: 'Rotas', 
            autor:'2 dsm - wev II',
    })
}

