const express = require('express')
const router = express.Router()
const mdwCheckAdmin = require('../../middlewares/checkAdmin')
const productCtrl = require('../../controllers/ProductController')

router.get('/:id?', productCtrl.listar )
router.post('/', mdwCheckAdmin, productCtrl.agregar )
router.put('/:id', mdwCheckAdmin, productCtrl.actualizar )
router.delete('/:id', mdwCheckAdmin, productCtrl.borrar)

module.exports = router