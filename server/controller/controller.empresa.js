const Empresa = require('../models/empresa')

const empresaCtrl = {}

empresaCtrl.getAll = async (req, res, next) => {
  const empresa = await Empresa.find()
  res.json(empresa)
}

empresaCtrl.createEmpresa = async (req, res, next) => {
  const empresa = new Empresa({
    nombre: req.body.nombre,
    id_sucursales: []
  })
  await empresa.save()
  res.json({ status: 'empresa creada!' })
}
empresaCtrl.getEmpresa = async (req, res, next) => {
  const { id } = req.params
  const empresa = await Empresa.findById(id)
  res.json(empresa)
}

empresaCtrl.deleteEmpresa = async (req, res, next) => {
  await Empresa.findByIdAndRemove(req.params.id);
  res.json({ status: "Empresa Deleted" });
};

empresaCtrl.editEmpresa = async (req, res, next) => {
  const id  = req.params.id;
  console.log(req.body);
  await Empresa.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "Empresa Updated" });
};
module.exports = empresaCtrl
