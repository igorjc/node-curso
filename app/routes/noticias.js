const dbConnection = require('../../config/dbConnection')

module.exports = app => {
    app.get('/noticias', (req, res) => {    
        const connection = dbConnection()
        connection.query('select * from noticias', (err, result) => {
            if(err) throw err
            
            res.render('noticia/noticias', {noticias: result})
        })
    })
}