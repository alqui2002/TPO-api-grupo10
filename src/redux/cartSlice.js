/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'; // Adjust base URL as per your setup

// Async thunk to fetch cart items
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async () => {
  const response = await axios.get(`${API_BASE_URL}/carts/me`); // Assuming endpoint to fetch user's cart
  return response.data;
});

// Async thunk to add a product to the cart
export const addToCart = createAsyncThunk('cart/addToCart', async (productId) => {
  const response = await axios.post(`${API_BASE_URL}/carts/me/add-product/${productId}`); // Assuming endpoint to add product to cart
  return response.data;
});

// Async thunk to remove a product from the cart
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId) => {
  const response = await axios.delete(`${API_BASE_URL}/carts/me/remove-product/${productId}`); // Assuming endpoint to remove product from cart
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
    status: 'idle', // Status: 'idle', 'loading', 'succeeded', 'failed'
    error: null, // Error object if any error occurs during async operations
  },
  reducers: {},
  extraReducers: {
    [fetchCartItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'succeeded';
    },
    [fetchCartItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchCartItems.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addToCart.fulfilled]: (state, action) => {
      // Assuming the API returns the updated cart items after adding
      state.items = action.payload;
      state.status = 'succeeded';
    },
    [removeFromCart.fulfilled]: (state, action) => {
      // Assuming the API returns the updated cart items after removing
      state.items = action.payload;
      state.status = 'succeeded';
    },
  },
});

export default cartSlice.reducer;

// Exporting action creators if needed
export const cartActions = {
  ...cartSlice.actions,
  fetchCartItems,
  addToCart,
  removeFromCart,
};
*/