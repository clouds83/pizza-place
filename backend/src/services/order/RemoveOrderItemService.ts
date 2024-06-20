import prismaClient from '../../prisma'

interface RemoveOrderItemRequest {
  order_item_id: string
}

class RemoveOrderItemService {
  async execute({ order_item_id }: RemoveOrderItemRequest) {
    const orderItem = await prismaClient.orderItem.delete({
      where: {
        id: order_item_id,
      },
    })

    return orderItem
  }
}

export { RemoveOrderItemService }
