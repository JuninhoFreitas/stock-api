import { Hono } from "hono"

const stock = new Hono()

stock.get('/', (c) => c.text('List Stock')) // GET /stock
stock.get('/:id', (c) => {
  // GET /stock/:id
  const id = c.req.param('id')
  return c.text('Get Stock: ' + id)
})

stock.post('/', (c) => c.text('Create Stock')) // POST /stock


export default stock;