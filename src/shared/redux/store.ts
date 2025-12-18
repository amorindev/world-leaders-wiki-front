import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/redux/slice";
import leaderReducer from "@/features/app/leader/redux/slice";

export const store = configureStore({
  reducer: {
    authReducer: authReducer,
    leaderReducer: leaderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
