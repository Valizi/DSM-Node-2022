const controllerNoticias = require('../controllers/noticiasControllers')

app.get('/noticias/noticiasMenu', controllerNoticias.menu)