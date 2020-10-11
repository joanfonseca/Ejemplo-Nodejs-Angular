const Sucursal = require('../models/sucursal')

const sucursalCtrl = {}

sucursalCtrl.getAll = async (req, res, next) => {
  const sucursal = await Sucursal.find()
  res.json(sucursal)
}

sucursalCtrl.createSucursal = async (req, res, next) => {
  const sucursal = new Sucursal({
    nombre: req.body.nombre,
    id_empresa: req.body.id_empresa
  })
  await sucursal.save()
  res.json({ status: 'Sucursal creada!' })
}
sucursalCtrl.getSucursal = async (req, res, next) => {
  const { id } = req.params
  const sucursal = await Sucursal.findById(id)
  res.json(sucursal)
}
sucursalCtrl.deleteEmpresa = async (req, res, next) => {
  await Sucursal.findByIdAndRemove(req.params.id)
  res.json({ status: 'Sucursal Deleted' })
}

sucursalCtrl.asociarSucursal = async (req, res, next) => {
  const { id } = req.params
  console.log(req.body)
  await Sucursal.findByIdAndUpdate(id, { $set: req.body }, { new: true })
  res.json({ status: 'Sucursal Updated' })
}

sucursalCtrl.desasociarSucursal = async (req, res, next) => {
  const { id } = req.params
  console.log(req.body)
  await Sucursal.findByIdAndUpdate(id, { $set: req.body }, { new: true })
  res.json({ status: 'Sucursal Updated' })
}
sucursalCtrl.editEmpresa = async (req, res, next) => {
  const id = req.params.id
  await Sucursal.findByIdAndUpdate(id, { $set: req.body }, { new: true })
  res.json({ status: 'Sucursal Updated' })
}

sucursalCtrl.desa = async (req, res, next) => {
  const id = req.params.id
  await Sucursal.findByIdAndUpdate(id, { $set: req.body }, { new: true })
  res.json({ status: 'Sucursal Updated' })
}
module.exports = sucursalCtrl
