module.exports = {
    myamaha
}
 
function myamaha (req, res) {
    res.render('Yamaha/MenuYamaha.ejs',
        {title: 'Rotas',
            mensagem: 'Em construção',
            autor: 'Eduardo Valizi'
        })
}

 
   

