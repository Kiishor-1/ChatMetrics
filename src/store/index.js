import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import communityReducer from './communitySlice';
import messageReducer from './messageSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    community: communityReducer,
    messages:messageReducer,
  },
});

export default store;
