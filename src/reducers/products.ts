import {
  ProductReducerAction,
  ProductReducerActionType,
  ProductState,
} from '../types';

const initialState: ProductState = {count: 10, page: 1, items: []};
export function ProductReducer(
  prevState = initialState,
  action: ProductReducerAction,
): ProductState {
  switch (action.type) {
    case ProductReducerActionType.ADD_PRODS: {
      const existing: Record<string, any> = {};
      const allItems = [...prevState.items, ...action.data.items];
      const mapped = allItems.filter(item => {
        if (!existing[item.id]) {
          existing[item.id] = 1;
          return item;
        }
      });
      return {...prevState, items: mapped};
    }
    default:
      return prevState;
  }
}
