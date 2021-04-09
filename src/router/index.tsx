import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../actions/Auth';
import {AppCombinedState, AuthReducerAction, AuthState} from '../types';
import AuthRouter from './auth';
import LoadingScreen from './Loading';
import MainRouter from './main';

export function AppRouter() {
  const {loading, token, userInfo} = useSelector<AppCombinedState, AuthState>(
    e => e.auth,
  );
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  useEffect(() => {
    if (!token) {
      AuthActions.LoginFromAsyncStorage()(authDispacher);
    }

    if (token) {
      AuthActions.getLoggedUserInfo(token)(authDispacher);
    }

    return () => {};
  }, [token, authDispacher]);

  if (loading) {
    return <LoadingScreen />;
  }

  return token && userInfo ? <MainRouter /> : <AuthRouter />;
}
