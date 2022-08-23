const express = require('express')
const app = express();
//...+ Rotas
//...+ Metodo HTTP - CRUDE(Create, Read, Update, Delete)
// GET - pega uma info
// POST - Cria uma info
// PUT - altera toda info
// PATH - Altera parte da info
// DELETE - Apaga uma info 
 

    //...+ Name - Um identificador da Rota
    //
    //Function (Callback)- função por executar algo

app.get('/soma', (req, res) => {
  const soma = 1+1;
   res.send({soma: soma})
});
app.listen(3000);