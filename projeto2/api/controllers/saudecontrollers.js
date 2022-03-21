module.exports = {
    saudef
}

function saudef (req, res) {
    res.render('/saude/saudeM.ejs',  {
        title: 'Saude',
            autor:'Eduardo valizi',
    })
}
