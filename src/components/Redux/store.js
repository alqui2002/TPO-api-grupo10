

import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './counter';
import authSlice from './authSlice';
import carritoSlice from './carritoSlice';
import carritoAPI from './carritoAPI';

const store = configureStore ({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
        carrito: carritoSlice,
        carritoAPI: carritoAPI,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store