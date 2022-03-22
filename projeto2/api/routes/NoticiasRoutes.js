const Cnoticias = require('../controllers/noticiasControllers')
const NoticiasSport = require('../controllers/noticiasControllers')
const NoticiasFutebol = require('../controllers/noticiasControllers')

app.get('/noticias/noticiasMenu', Cnoticias.menu)

app.get('/noticias/noticiasEsporteMenu', NoticiasSport.menuEsport)

app.get('/noticias/noticiasFutebol', NoticiasFutebol.menuFutebol)