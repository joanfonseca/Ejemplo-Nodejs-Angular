const mongoose = require('mongoose')
const uri = 'mongodb://localhost/empresas'
mongoose
  .connect(uri)
  .then(db => console.log('Conectado con Mongoose'))
  .catch(error => console.error(error))

module.exports = mongoose
