import {GuisoReducerAction, GuisoReducerActionType, GuisoState} from '../types';

const initialState: GuisoState = {items: [], count: 0, page: 1};
export function GuisoReducer(
  prevState = initialState,
  action: GuisoReducerAction,
): GuisoState {
  switch (action.type) {
    case GuisoReducerActionType.ADD_GUISOS: {
      return {...prevState};
    }
    default:
      return prevState;
  }
}
