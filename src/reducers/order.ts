import {
  Order,
  OrderActionTypeMany,
  OrderActionTypeSingle,
  OrderActionTypeWithoutData,
  OrderReducerAction,
  OrderState,
} from '../types';

const InitialState: OrderState = {page: 1, orders: [], count: 10};

export default function OrderReducer(
  prevState = InitialState,
  action: OrderReducerAction,
): OrderState {
  switch (action.type) {
    case OrderActionTypeSingle.ORDER_CREATED: {
      const mappedOrders: Order[] = [...prevState.orders, action.data];
      return {
        ...prevState,
        orders: mappedOrders,
      };
    }
    case OrderActionTypeMany.GET_ORDERS: {
      // TODO: Clear duplicated
      const orders = [...prevState.orders, ...action.data];
      return {
        ...prevState,
        orders: SortAndReverse(orders),
      };
    }
    case OrderActionTypeSingle.ORDER_UPDATED: {
      const orders = prevState.orders.map(o => {
        // Loops and replace the one with same id
        return o.id === action.data.id ? Object.assign({}, o, action.data) : o;
      });

      return {
        ...prevState,
        orders: SortAndReverse(orders),
      };
    }
    case OrderActionTypeWithoutData.RESET_ORDERS: {
      return {
        count: 10,
        orders: [],
        page: 1,
      };
    }
    default: {
      return prevState;
    }
  }
}

function SortAndReverse(orders: Order[]) {
  return Array.from(orders)
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )
    .reverse();
}
