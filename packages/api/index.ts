import cors from '@elysiajs/cors';
import Elysia from 'elysia';

const app = new Elysia()
  .use(cors())
  .get('/hello', () => 'Hello')
  .listen(3000, (server) => console.log(`Started server on ${server.url}`));

export type App = typeof app;
