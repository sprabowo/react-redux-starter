import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import counterReducer from './counter';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  }
})
