import {AuthReducerAction, AuthReducerActionType, AuthState} from '../types';

export const initialState: AuthState = {
  loading: true,
  token: undefined,
};

export function AuthReducer(
  state = initialState,
  action: AuthReducerAction,
): AuthState {
  switch (action.type) {
    case AuthReducerActionType.LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case AuthReducerActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: action.data.token,
      };
    }
    case AuthReducerActionType.LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        token: undefined,
      };
    }
    default:
      return state;
  }
}
