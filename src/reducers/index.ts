import {combineReducers} from 'redux';
import {AppCombinedState} from '../types';
import {AuthReducer} from './auth';
import {ProductReducer} from './products';

export const AppCombinedReducer = combineReducers<AppCombinedState>({
  auth: AuthReducer,
  product: ProductReducer,
});
