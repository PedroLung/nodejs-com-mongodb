const express = require('express') // importando o express
const router = express.Router() // definindo a contante que usaremos para criar as nossas rotas

const ProductController = require('../controllers/ProductController') // Conectando com os controllers

// Rotas de criação
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)

// Rota de edição
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)

// // Rotas de rasgate de dados
router.get('/:id', ProductController.showProduct)
router.get('/', ProductController.showProducts)

// // Rota de exclusão:
router.post('/remove/:id', ProductController.removeProduct)

module.exports = router