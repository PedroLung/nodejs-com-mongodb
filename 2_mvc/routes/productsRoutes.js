const express = require('express') // importando o express
const router = express.Router() // definindo a contante que usaremos para criar as nossas rotas

const ProductController = require('../controllers/ProductController') // Conectando com os controllers

// Rota "/"
router.get('/', ProductController.showProducts)

module.exports = router