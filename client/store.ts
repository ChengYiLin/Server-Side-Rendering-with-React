import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/user/userSlice";

declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
        __PRELOADED_STATE__: any;
    }
}

export const reducer = {
    user: userSliceReducer,
};

// Create Redux store with state injected by the server
const store = configureStore({
    reducer,
    preloadedState:
        typeof window !== "undefined" ? window.__PRELOADED_STATE__ : {},
});

// Allow the passed state to be garbage-collected
typeof window !== "undefined" && delete window.__PRELOADED_STATE__;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
