const mongoose = require('mongoose') // Importando o mongoose para o projeto

async function main() {
  await mongoose.connect('mongodb://localhost:27017/testemongoose')
  console.log('Banco conectado com sucesso!')
}

main().catch((err) => console.log(err))

module.exports = mongoose