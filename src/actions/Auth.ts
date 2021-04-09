import AsyncStorage from '@react-native-community/async-storage';
import {Dispatch} from 'react';
import {AuthService} from '../auth/services/auth';
import {AuthReducerAction, AuthReducerActionType} from '../types';

function Login({email, password}: any) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    const res = await AuthService.Login({email, password});
    console.log('-------------------------------');
    console.log(res);
    if (res.status == 200) {
      const payload = await res.json();
      SaveSession('usersession', payload);
      dispatch({
        type: AuthReducerActionType.LOGIN_SUCCESS,
        data: {token: payload.accessToken},
      });
    }
  };
}

// Username props is for multilogin purpouse
function LoginFromAsyncStorage(_username?: string) {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    const sessionPayload = await GetSession('usersession');

    if (sessionPayload === null) {
      return dispatch({type: AuthReducerActionType.LOGIN_FAIL, data: {}});
    }

    //TODO: Implement credential verification
    // const data = sessionPayload;
    // const res = await CallAuthTokenVerifycation(data.token, data.refreshToken);

    // if (res.code == 200) {
    //   return dispatch({
    //     type: AuthReducerActionType.SIGNIN_SUCCESS,
    //     data: res.value as AuthStateData,
    //   });
    // }

    RemoveSession('usersession');
    return dispatch({type: AuthReducerActionType.LOGIN_FAIL, data: {}});
  };
}

function SignUp({_email, _password, _name}: any) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    dispatch({type: AuthReducerActionType.TRIGGER_SIGNOUT, data: {}});
  };
}

function SignOut() {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    await RemoveSession('usersession');
    return dispatch({type: AuthReducerActionType.TRIGGER_SIGNOUT, data: {}});
  };
}

async function SaveSession(key: string, data: object) {
  await AsyncStorage.setItem(`@${key}`, JSON.stringify(data));
}

async function GetSession(key: string): Promise<object | null> {
  const stringRes = await AsyncStorage.getItem(`@${key}`);
  if (!stringRes) {
    return null;
  }
  return JSON.parse(stringRes);
}

async function RemoveSession(key: string) {
  await AsyncStorage.removeItem(`@${key}`);
}

export const AuthActions = {
  Login,
  SignUp,
  SignOut,
  LoginFromAsyncStorage,
};
