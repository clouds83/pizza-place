import prismaClient from '../../prisma'

interface OrderRequest {
  order_id: string
}

class OrderDetailsService {
  async execute({ order_id }: OrderRequest) {
    const orderItems = await prismaClient.orderItem.findMany({
      where: {
        order_id,
      },

      include: {
        product: true,
        order: true,
      },
    })

    return orderItems
  }
}

export { OrderDetailsService }
