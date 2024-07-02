import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v1'; // Adjust base URL as per your setup

// Async thunk to fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get(`${API_BASE_URL}/vinilos`);
  return response.data;
});

// Async thunk to add a new product
export const addProduct = createAsyncThunk('products/addProduct', async (productData) => {
  const response = await axios.post(`${API_BASE_URL}/vinilos/add-vinilo`, productData);
  return response.data;
});

// Async thunk to update an existing product
export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, productData }) => {
  const response = await axios.put(`${API_BASE_URL}/vinilos/update/${id}`, productData);
  return response.data;
});

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id) => {
  await axios.delete(`${API_BASE_URL}/vinilos/delete/${id}`);
  return id;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [], // Array to hold the list of products
    status: 'idle', // Status: 'idle', 'loading', 'succeeded', 'failed'
    error: null, // Error object if any error occurs during async operations
  },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.list.push(action.payload); // Assuming the server responds with the added product data
    },
    [updateProduct.fulfilled]: (state, action) => {
      const updatedProductIndex = state.list.findIndex((product) => product.id === action.payload.id);
      if (updatedProductIndex !== -1) {
        state.list[updatedProductIndex] = action.payload;
      }
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.list = state.list.filter((product) => product.id !== action.payload);
    },
  },
});

export default productsSlice.reducer;

// Exporting action creators if needed
export const productsActions = {
  ...productsSlice.actions,
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};