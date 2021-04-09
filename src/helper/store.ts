import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {AppCombinedReducer} from '../reducers';
import {ReducersCombinedActions, AppCombinedState} from '../types';

export const AppStore = createStore<
  AppCombinedState,
  ReducersCombinedActions,
  any,
  any
>(AppCombinedReducer, applyMiddleware(thunk));
