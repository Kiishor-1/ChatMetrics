// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AUTH_ENDPOINTS } from '../services/api';

const { SIGNUP_API, LOGIN_API } = AUTH_ENDPOINTS;

export const loginUser = createAsyncThunk('user/loginUser', async ({ username, password }) => {
  const response = await axios.post(LOGIN_API, { username, password });
  return response.data;
});

export const signupUser = createAsyncThunk('user/signupUser', async ({ username, password }) => {
  const response = await axios.post(SIGNUP_API, { username, password });
  return response.data;
});

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem('user', JSON.stringify(action.payload.user));
        localStorage.setItem('token', action.payload.token);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;









// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { AUTH_ENDPOINTS } from '../services/api';

// const { SIGNUP_API, LOGIN_API } = AUTH_ENDPOINTS;

// export const loginUser = createAsyncThunk('user/loginUser', async ({ username, password }) => {
//   const response = await axios.post(LOGIN_API, { username, password });
//   return response.data;
// });

// export const signupUser = createAsyncThunk('user/signupUser', async ({ username, password }) => {
//   const response = await axios.post(SIGNUP_API, { username, password });
//   return response.data;
// });

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     user: null,
//     token: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem('token'); // Remove token from local storage if used
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         localStorage.setItem('token', action.payload.token); // Store token in local storage if used
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(signupUser.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(signupUser.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         localStorage.setItem('token', action.payload.token); // Store token in local storage if used
//       })
//       .addCase(signupUser.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { logout } = userSlice.actions;

// export default userSlice.reducer;