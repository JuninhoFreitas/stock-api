import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono({port: 3000})
app.get('/', (c) => c.text('Hello Hono!'))

serve(app)
