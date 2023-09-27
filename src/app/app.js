import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import router from './routes/router.js';

const app = new Hono({ port: 3000 });
app.route('/', router);
serve(app);
