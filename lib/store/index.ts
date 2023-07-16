import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./reducers/option.reducer";

export const store = configureStore({
  reducer: {
    option: optionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
