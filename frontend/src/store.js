import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './slices/apiSlice';
import  cartSliceReducter from './slices/cartSlice'; 


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducter,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
  (apiSlice.middleware), devTools: true,
});

export default store;