import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/user/userSlice";

const store = configureStore({
    reducer: {
        user: userSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
