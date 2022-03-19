module.exports = {
    menu
}

function menu (req, res) {
    res.render('noticias/noticiasMenu.ejs',  {
        title: 'Menu', 
            autor:'2 dsm - wev II',
    })
}

