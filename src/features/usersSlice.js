import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/getUsers", async ()=>{
    return null
})
export const postUsers = createAsyncThunk("users/postUsers", async (data)=>{
    return null
})
export const deleteUsers = createAsyncThunk("users/deleteUsers", async (data)=>{
    return null
})
export const updateUsers = createAsyncThunk("users/updateUsers", async (data)=>{
    return null
})

const usersSlice = createSlice({
    name: "users",  
    initialState:{
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [postUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [postUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [postUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [deleteUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateUsers.pending]: (state, action) => {
            state.loading = true;
        },
    }
})

export default usersSlice.reducer