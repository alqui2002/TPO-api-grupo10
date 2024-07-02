

import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './counter';
import authSlice from './authSlice';

const store = configureStore ({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export default store