import { combineReducers } from '@reduxjs/toolkit';

import accountsReducer from './accountsSlice';
import productsReducer from './productsSlice';

const rootReducer = combineReducers({
  accounts: accountsReducer,
  products: productsReducer,
});

export default rootReducer;
