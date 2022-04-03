import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data) => {
    return null
})

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.token = action.payload;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    }
})
export default authSlice.reducer