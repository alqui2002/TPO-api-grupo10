import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Async thunk to handle user login
export const loginUser = createAsyncThunk(
  'accounts/login',
  async ({ username, password }) => {
    try {
      const response = await axios.post('/api/v1/authenticate', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Async thunk to handle user registration
export const registerUser = createAsyncThunk(
  'accounts/register',
  async ({ name, lastname, username, password }) => {
    try {
      const response = await axios.post('/api/v1/auth/register', {
        name,
        lastname,
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload; // Assuming payload contains user data
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload; // Assuming payload contains user data
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const { logoutUser } = accountsSlice.actions;

export default accountsSlice.reducer;