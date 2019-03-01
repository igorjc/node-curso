const app = require('./config/server')

const index = require('./app/routes/index')(app)
const noticia = require('./app/routes/noticias')(app)

app.listen(3000, () => {
    console.log('Server on');
})