module.exports = {
    menu
}

function menu (req, res) {
    res.render('/noticias/noticiasMenu.ejs',  {
        title: 'Menu', 
            autor:'Eduardo Valizi',
    })
}

