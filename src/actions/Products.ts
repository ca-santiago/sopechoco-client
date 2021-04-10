import {Dispatch} from 'react';
import {ProductServices} from '../services/products';
import {ProductReducerAction, ProductReducerActionType} from '../types';

function GetProducts(token: string) {
  return async (dispatch: Dispatch<ProductReducerAction>) => {
    const res = await ProductServices.GetAllProducts(token);
    // console.log({res});
    if (res.status !== 200) {
      // TODO: Trigger event
      return;
    }
    const prods = await res.json();
    dispatch({
      type: ProductReducerActionType.ADD_PRODS,
      data: {
        items: prods.results,
        count: 10,
        page: 1,
      },
    });
  };
}

export const ProductActions = {
  GetProducts,
};
