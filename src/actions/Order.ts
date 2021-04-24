import {Dispatch} from 'react';
import {OrderService} from '../services/order';
import {OrderActionTypeMany, OrderReducerAction} from '../types';

interface OrderResponse {
  results: [];
}

function GetAllOrders(token: string, actPage = 0) {
  return async (dispach: Dispatch<OrderReducerAction>) => {
    const res = await OrderService.GetAllFromAuthenticatedUser(token, actPage);
    if (res.status === 200) {
      const payload = (await res.json()) as OrderResponse;
      dispach({type: OrderActionTypeMany.GET_ORDERS, data: payload.results});
    }

    return;
  };
}

export const OrderActions = {
  GetAllOrders,
};
