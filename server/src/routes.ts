import express, { response } from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
  const items = await knex('items').select('*');

  const serializadeItems = items.map(item => {
    return {
      id: item.id,
      title: item.name,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });

  routes.post('/points', async (request, response) => {
    const {
      name,
      email,
      whatsapp,
      latitude,
      logitude,
      city,
      uf,
      items
    } = request.body;
  });
  await knex('points').insert({
    image: 'image-fake',
    name: "name",
    email: "email",
    whatsapp: "whatsapp",
    latitude: "latitude",
    longitude: "longitude",
    city: "city",
    uf: "uf"
  });

  return response.json({ sucess: true });

  return response.json(serializadeItems);
});


export default routes;