module.exports = {
    menu,
    menuEsport,
    menuFutebol
}

function menu (req, res) {
    res.render('noticias/noticiasMenu.ejs',  {
        title: 'Menu', 
            autor:'Eduardo Valizi',
    })
}

function menuEsport (req, res) {
    res.render('noticias/noticiasEsporteMenu', {
        title: 'Menu', 
        autor:'Eduardo Valizi',
    })
}

function menuFutebol (req, res) {
    res.render('noticias/noticiasFutebol', {
        title: 'Menu', 
        autor:'Eduardo Valizi',
    })
}
