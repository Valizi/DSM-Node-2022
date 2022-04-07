const controller = require('../controllers/indexControllers.js')
app.get('/', controller.index);

//////////////////////////////////////

const Chonda = require('../controllers/menuhonda')
app.get('/Honda/Menuhonda', Chonda.mhonda);

/////////////////////////////////////

const Ccity = require('../controllers/menuhonda')
app.get('/Honda/Menucity', Chonda.mcity);

/////////////////////////////////////

const Ctitan = require('../controllers/menuhonda')
app.get('/Honda/Menutitan', Ctitan.mtitan);

////////////////////////////////////

const Charley = require('../controllers/menuharley')
app.get('/Harley/Menuharley', Charley.mharley);



const Csuzuki = require('../controllers/menusuzuki')
app.get('/Suzuki/MenuSuzuki', Csuzuki.msuzuki);

