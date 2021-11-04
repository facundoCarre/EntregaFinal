const express = require('express')
const router  = express.Router()

const CartCtrl = require('../../controllers/CartController')
const checkAuth = require('../../middlewares/checkAuth')

router.get('/:id?',checkAuth, CartCtrl.listar)
router.post('/:id_producto', checkAuth, CartCtrl.agregar)
router.put('/:id', checkAuth, CartCtrl.actualizarCantidad)
router.delete('/:id', checkAuth, CartCtrl.borrar)


module.exports = router