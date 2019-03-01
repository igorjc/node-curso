module.exports = app => {
    app.get('/noticias', (req, res) => {

        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'portal_noticias'
        })
    
        connection.query('select * from noticias', (err, result) => {
            if(err) throw err
            
            res.render('noticia/noticias', {noticias: result})
        })
    })
}