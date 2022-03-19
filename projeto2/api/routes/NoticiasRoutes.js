const Cnoticias = require('../controllers/noticiasControllers')

app.get('noticias/noticiasMenu', Cnoticias.menu)