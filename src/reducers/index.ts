import {combineReducers} from 'redux';
import {AppCombinedState} from '../types';
import {AuthReducer} from './auth';

export const AppCombinedReducer = combineReducers<AppCombinedState>({
  auth: AuthReducer,
});
