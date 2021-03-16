import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World'});
});

app.listen(3333);


//http://localhost:3333//users
//http://localhost:3333//contact

//metodos
//GET : Buscar ou listar uma informação
//POST : Criar alguma nova inrformação
//PUT : Atualizar uma informação existente
//DELETE : Deletar uma informação existente

//Corpo (Request Body): Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação  

