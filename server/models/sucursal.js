const mongoose = require('mongoose')

const { Schema } = mongoose

const sucursalSchema = new Schema({
  nombre: { type: String },
  id_empresa: { type: String }
})

module.exports = mongoose.model('Sucursal', sucursalSchema)
