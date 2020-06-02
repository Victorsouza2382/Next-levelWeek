import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuarios');

  response.json([
    'Teste',
    'Victor',
    'Natan',
    'Giovanna',
    'Teste2'
  ]);
});
app.listen(3333);