import AsyncStorage from '@react-native-community/async-storage';
import {Dispatch} from 'react';
import {AuthService} from '../services/auth';
import {AuthReducerAction, AuthReducerActionType} from '../types';

type LoginProps = {
  password: string;
  email: string;
};

function Login({email, password}: LoginProps) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    try {
      // Accesing login on service layer
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
    } catch (err) {
      return;
    }
  };
}

type SignUpProps = {
  email: string;
  password: string;
  name: string;
};

function SignUp(props: SignUpProps) {
  return async (dispatch: Dispatch<AuthReducerAction>) => {
    try {
      const res = await AuthService.SignUp(props);
      if (res.status === 409) {
        // TODO: Emmit user already registered
        return;
      }

      if (res.status === 201) {
        // Login on success account created
        Login(props)(dispatch);
        return;
      }
    } catch (err) {
      // TODO: Emmit server or network error
      return;
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

    dispatch({
      type: AuthReducerActionType.ASYNC_LOGIN_SUCCESS,
      data: {...sessionPayload},
    });
  };
}

/*
 * Remove storage user credentials and logout from redux store
 */
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
