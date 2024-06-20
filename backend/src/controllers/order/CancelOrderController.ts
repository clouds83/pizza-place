import { Request, Response } from 'express'
import { CancelOrderService } from '../../services/order/CancelOrderService'

class CancelOrderController {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string

    const cancelOrderService = new CancelOrderService()

    const order = await cancelOrderService.execute({ order_id })

    return res.json(order)
  }
}

export { CancelOrderController }
