# nodejs-com-mongodb

# Criar um banco em MongoDb:
```
use nome_do_banco
```

# Criar uma collection:
```
db.nome_da_collection.insertOne({ nome: "nome", idade: idade })
```

# Achar um dado numa collection:
```
db.nome_da_collection.findOne()
```

OBS: Caso deixe ele vazio, encontrará qualquer dado. Porém você pode colocar um filtro para poder puxar o dado exato
que você está procurando.