import { combineReducers } from '@reduxjs/toolkit';

import accountsReducer from './accountsSlice';
import productsReducer from './productsSlice';
import cartsReducer from './cartSlice';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  products: productsReducer,
  carts: cartsReducer,
});

export default rootReducer;
