const conn = require('../db/conn') // Importando a conexão com o banco

class Product {
  // Definir a classe com os atributos necessários
  constructor(name, price, description){
    this.name = name
    this.price = price
    this.description = description
  }
  // Criar os métodos
  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
    })

    return product
  }
}

module.exports = Product