import { Hono } from "hono"
import stock from "./stock/index.js"

const router = new Hono()
router.route('/stock', stock)

export default router;