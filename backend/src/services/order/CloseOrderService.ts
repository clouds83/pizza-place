import prismaClient from '../../prisma'

interface CloseOrderRequest {
  order_id: string
}

class CloseOrderService {
  async execute({ order_id }: CloseOrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data: {
        status: true,
      },
    })

    return order
  }
}

export { CloseOrderService }
