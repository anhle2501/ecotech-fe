import { configureStore } from '@reduxjs/toolkit';
import customerSlice from './pages/customer/CustomerSlice';

export default configureStore({
    reducer: {
      customer: customerSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
  });


