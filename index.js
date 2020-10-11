const express = require('express')
const app = express()
const morgan = require('morgan')
const db = require('./server/db/db')
const cors = require("cors");

//configuraciones
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())

//rutas
app.use(require('./server/routes/route'))
//servidor
app.listen(app.get('port'), () => {
  console.log('Servidor encendido', app.get('port'))
})
