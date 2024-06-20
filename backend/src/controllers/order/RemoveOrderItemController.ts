import { Request, Response } from 'express'
import { RemoveOrderItemService } from '../../services/order/RemoveOrderItemService'

class RemoveOrderItemController {
  async handle(req: Request, res: Response) {
    const order_item_id = req.query.order_item_id as string

    const removeOrderItemService = new RemoveOrderItemService()

    const orderItem = await removeOrderItemService.execute({ order_item_id })

    return res.json(orderItem)
  }
}

export { RemoveOrderItemController }
