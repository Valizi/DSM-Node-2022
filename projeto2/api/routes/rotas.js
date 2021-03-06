const controller = require('../controllers/controllers.js')  

app.get('/', controller.rotaRaiz) 

app.get('/cursos/:cursoid', controller.cursoGetById);

app.get('/cep/:cepid', controller.cepGetById);

app.get('/livros/:livroid', controller.livrosGetById);
 
// app.get('/norris/:norrisid', controller.norisGetById);

app.get('/github/:perfilid', controller.githubGetById)

app.get('/sabesp/:dataid', controller.sabespgetbyid)