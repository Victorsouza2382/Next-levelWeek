import express, { response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serializadeItems = items.map(item => {
    return 1;
  });

  return response.json(serializadeItems);
})
export default routes;