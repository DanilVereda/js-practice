const orders = [
  {
    id: 1,
    price: 255,
    isPaid: true,
  },
  {
    id: 2,
    price: 1000,
    isPaid: false,
  },
  {
    id: 3,
    price: 100,
    isPaid: true,
  },
  {
    id: 4,
    price: 550,
    isPaid: true,
  },
];

function filter_orders(orders) {
  const result_object = {
    paidOrderIds: [],
    totalSum: null,
    paidSum: null,
  };
  for (const order of orders) {
    result_object.totalSum += order.price;
    if (order.isPaid === true) {
      result_object.paidOrderIds.push(order.id);

      result_object.paidSum = order.price;
    }
  }
  return result_object;
}

console.log(filter_orders(orders));
