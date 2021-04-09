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
    case AuthReducerActionType.LOGGED_USER_INFO: {
      return {
        ...state,
        loading: false,
        userInfo: action.data.userInfo,
      };
    }
    case AuthReducerActionType.ASYNC_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: true,
        token: action.data.token,
        userInfo: undefined,
      };
    }
    default:
      return state;
  }
}
