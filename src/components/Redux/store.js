

import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './counter';
import authSlice from './authSlice';
import carritoSlice from './carritoSlice';
import carritoAPI from './carritoAPI';
import productSlice from './productSlice';

const store = configureStore ({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
        carrito: carritoSlice,
        carritoAPI: carritoAPI,
        product: productSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store