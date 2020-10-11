const mongoose = require('mongoose')

const { Schema } = mongoose

const empresaSchema = new Schema({
  nombre: { type: String },
  id_sucursales: { type: Array }
})
module.exports = mongoose.model('Empresa', empresaSchema)
