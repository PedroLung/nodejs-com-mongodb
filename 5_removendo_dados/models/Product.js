const conn = require('../db/conn') // Importando a conexão com o banco

const { ObjectId } = require('mongodb') // Importando o objectId para poder pegar o id

class Product {
  // Definir a classe com os atributos necessários
  constructor(name, image, price, description){
    this.name = name
    this.image = image
    this.price = price
    this.description = description
  }
  // Criação dos métodos
  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    })

    return product
  }

  static getProducts() {
    const product = conn.db().collection('products').find().toArray()

    return product
  }

  static async getProductById(id) {
    const product = await conn
      .db()
      .collection('products')
      .findOne({ _id: new ObjectId(id)}) // Use 'new' here

    return product
  }

  static async removeProduct(id) {
    await conn
      .db()
      .collection('products')
      .deleteOne({ _id: new ObjectId(id) })

      return
    }
}

module.exports = Product