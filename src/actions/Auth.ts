import AsyncStorage from '@react-native-community/async-storage';
import {Dispatch} from 'react';
import {AuthService} from '../services/auth';
import {AuthReducerAction, AuthReducerActionType} from '../types';

function Login({email, password}: any) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    const res = await AuthService.Login({email, password});
    if (res.status !== 200 && res.status !== 201) {
      // TODO: Dispatch event to redux event store
      return;
    }
    const payload = await res.json();
    SaveSession('usersession', {token: payload.accessToken});
    dispatch({
      type: AuthReducerActionType.LOGIN_SUCCESS,
      data: {token: payload.accessToken},
    });
  };
}

// Username props is for multilogin purpouse
function LoginFromAsyncStorage(_username?: string) {
  return async function (dispatch: Dispatch<AuthReducerAction>) {
    const sessionPayload = await GetSession('usersession');
    if (sessionPayload === null) {
      return dispatch({type: AuthReducerActionType.LOGIN_FAIL, data: {}});
    }

    return dispatch({
      type: AuthReducerActionType.ASYNC_LOGIN_SUCCESS,
      data: {...sessionPayload},
    });
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

function getLoggedUserInfo(token: string) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    const res = await AuthService.GetProfileInfo({token});
    if (res.status !== 200) {
      // TODO: Trigger logout event.
      SignOut()(dispatch);
      return;
    }
    const payload = await res.json();
    dispatch({
      type: AuthReducerActionType.LOGGED_USER_INFO,
      data: {userInfo: payload},
    });
  };
}

// Session methods

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
  getLoggedUserInfo,
};
