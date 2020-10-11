const express = require('express')
const empresaCtrl = require('../controller/controller.empresa')
const router = express.Router()

const empresa = require('../controller/controller.empresa')
const sucursal = require('../controller/controller.sucursal')
//ruts empresa
router.get('/e', empresa.getAll)
router.post('/e', empresa.createEmpresa)
router.delete('/e/:id', empresa.deleteEmpresa)
router.put('/e/:id', empresa.editEmpresa)

//rutas sucursal
router.get('/s', sucursal.getAll)
router.post('/s', sucursal.createSucursal)
router.get('/s/:id', sucursal.getSucursal)
router.put('/s/:id', sucursal.editEmpresa)

router.put('/s/d/:id', sucursal.desasociarSucursal)
router.delete('/s/:id', sucursal.deleteEmpresa)
module.exports = router
