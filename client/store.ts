import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/user/userSlice";

export default configureStore({
    reducer: {
        user: userSliceReducer,
    },
});
