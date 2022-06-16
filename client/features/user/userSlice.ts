import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    userName: string | null;
}

const initialState: UserState = {
    userName: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<UserState>) => {
            return (state = payload);
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
