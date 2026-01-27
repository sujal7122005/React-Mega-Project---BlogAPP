import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "logged_out",
    userData: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Define your reducers here
        login: (state, action) => {
            state.status = "logged_in";
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.status = "logged_out";
            state.userData = null;
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;