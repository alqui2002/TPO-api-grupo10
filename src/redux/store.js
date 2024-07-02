import { combineReducers } from '@reduxjs/toolkit';
import accountsReducer from './accountsSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;