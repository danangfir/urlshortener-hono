import { Hono } from 'hono';
import urlRoutes from './routes/urlRoutes';
import { serve } from 'bun';

const app = new Hono();

app.route('/', urlRoutes);

console.log('Server is initializing...');

serve({
  fetch: (request) => {
    console.log('Handling request...');
    return app.request(request);
  },
  port: 3000,
  development: true,
});

console.log('Server is running on http://localhost:3000');
