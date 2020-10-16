import { combineReducers } from 'redux';
import currencyPairInfoReducer from './currencyPairInfoReducer';
import filterReducer from './filterReducer';

export default combineReducers({ currencyPairInfoReducer, filterReducer});
