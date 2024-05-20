const Product = require('../models/Product')

module.exports = class ToughController {
  static async showProducts(req, res) {
    const products = await Product.getProducts()
    res.render('products/all', {products})
  }

  static async showProduct(req, res) {
    const id = req.params.id

    const product = await Product.getProductById(id)

    res.render('products/product', { product })
  }

  static createProduct(req, res){
    res.render('products/create')
  }

  static async createProductPost(req, res){
    const {name, image, price, description} = req.body

    const product = new Product(name, image, price, description)
    product.save()

    res.redirect('/products')
  }
}