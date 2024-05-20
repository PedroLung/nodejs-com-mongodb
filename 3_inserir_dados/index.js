const express = require('express') // Importando o express para o projeto
const exphbs = require('express-handlebars') // Importando o handlebars para o projeto

// Iniciar o express
const app = express()
// Definindo a porta da aplicação
const port = 3000
// Chamando a conexão com o banco
const conn = require('./db/conn')

// Importando Rotas
const productsRoutes = require('./routes/productsRoutes')

// Definir a view e a template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Pegar os valores do body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Definindo os arquivos estáticos
app.use(express.static('public'))

// Rotas productsRoutes:
app.use('/products', productsRoutes)

// Iniciar a aplicação
app.listen(port, () => {
  console.log('Servidores conectados com sucesso!')
  console.log(`Estamos rodando na porta: ${port}`)
})