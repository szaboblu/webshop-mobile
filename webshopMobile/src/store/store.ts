import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './itemSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
