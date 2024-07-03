import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        username,
        password,
      });

      if (!response.data) {
        throw new Error('Invalid username or password');
      }

      return { token: response.data.accessToken, username };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async ({ name, lastname, username, password, role }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name,
        lastname,
        username,
        password,
        role,
      });

      if (!response.data) {
        throw new Error('Could not create account');
      }

      return { token: response.data.accessToken, username };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAccountData = createAsyncThunk(
  'auth/fetchAccountData',
  async (id, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const response = await axios.get(`http://localhost:8080/api/cuentas/id/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.data) {
        throw new Error('Could not fetch account data');
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || '',
    username: '',
    accountData: null,
    error: null,
  },
  reducers: {
    logout(state) {
      state.token = '';
      state.username = '';
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.username = action.payload.username;
        localStorage.setItem('token', action.payload.token);
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.username = action.payload.username;
        localStorage.setItem('token', action.payload.token);
        state.error = null;
      })
      .addCase(fetchAccountData.fulfilled, (state, action) => {
        state.accountData = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchAccountData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;

export const selectAuthToken = (state) => state.auth.token;
export const selectAuthUsername = (state) => state.auth.username;
export const selectAuthError = (state) => state.auth.error;
export const selectAccountData = (state) => state.auth.accountData;

export default authSlice.reducer;
