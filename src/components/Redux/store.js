import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counter';
import authSlice from './authSlice';
import carritoSlice from './carritoSlice';
import carritoAPI from './carritoAPI';
import pagoAPI from '../Redux/pagoAPI';
import adminAPI from '../Redux/adminAPI';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
        carrito: carritoSlice,
        carritoAPI: carritoAPI,
        pedidos: pagoAPI.reducer, 
        admin: adminAPI,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;
