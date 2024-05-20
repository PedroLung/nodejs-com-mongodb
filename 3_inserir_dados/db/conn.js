const { MongoClient } = require('mongodb') // Importando o mongoclient para o projeto

const uri = "mongodb://localhost:27017/testemongodb" // Link para fazer a conexão com o banco

const client = new MongoClient(uri) // Colocando a instância do mongo client na constante client

// Realizar a conexão com o banco
async function run() {
  try {

    await client.connect()
    console.log('Conectando ao mongoDB')

  } catch(err){
    console.log(err)
  }
}

run()

module.exports = client