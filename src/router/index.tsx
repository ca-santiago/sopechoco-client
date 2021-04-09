import React, {Dispatch, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '../actions/Auth';
import {AppCombinedState, AuthReducerAction, AuthState} from '../types';
import AuthRouter from './auth';
import LoadingScreen from './Loading';
import MainRouter from './main';

export function AppRouter() {
  const {loading, token} = useSelector<AppCombinedState, AuthState>(
    e => e.auth,
  );
  const authDispacher = useDispatch<Dispatch<AuthReducerAction>>();

  useEffect(() => {
    const tmout = setTimeout(() => {
      if (!token) {
        AuthActions.LoginFromAsyncStorage()(authDispacher);
      }
    }, 3000);

    return () => clearTimeout(tmout);
  }, [token, authDispacher]);

  if (loading) {
    return <LoadingScreen />;
  }

  return token ? <MainRouter /> : <AuthRouter />;
}
