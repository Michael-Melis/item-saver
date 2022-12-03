import { configureStore } from '@reduxjs/toolkit';
import iconSlice from './iconSlice';

const store = configureStore({
  reducer: {
    icon: iconSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
