import { configureStore } from '@reduxjs/toolkit';
import authReducer from './containers/login/slice';
import dataCollectionReducer from './containers/data-collection/slice';
import { apiSlice } from './app/api/apiSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dataCollection: dataCollectionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
