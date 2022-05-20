import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "./host";
export const getUsers = createAsyncThunk("users/getUsers", async (arg,{getState})=>{
    const currentToken = getState().auth.token;
    const result = await axios({
        method: "GET",
        url: host+"/admin/users",
        headers:{
            'authorization': `Bearer ${currentToken}`,
        }
    })
    return result.data
})
export const postUsers = createAsyncThunk("users/postUsers", async (data,{getState,dispatch})=>{
    const currentToken = getState().auth.token;
    let form = new FormData()
    form.append('users',JSON.stringify({
        nama:data.nama,
        email:data.email,
        role:data.role,
        nohp:data.nohp,
        password:data.password,
    }))
    form.append('images',data.picture)
    const result = await axios({
        method: "POST",
        url: host+"/admin/users",
        headers:{
            'authorization': `Bearer ${currentToken}`,
        },
        data: form
    })
    dispatch(getUsers())
    return result.data
})
export const deleteUsers = createAsyncThunk("users/deleteUsers", async (data,{getState,dispatch})=>{
    const currentToken = getState().auth.token;
    await axios({
        method: "DELETE",
        url: host+'/admin/users',
        headers:{
            'authorization': `Bearer ${currentToken}`,
        },
        data: {
            id:data
        }
    })
    dispatch(getUsers())
})
export const updateUsers = createAsyncThunk("users/updateUsers", async (data)=>{
    return null
})

const usersSlice = createSlice({
    name: "users",  
    initialState:{
        users: [],
        status:null,
        loading: false,
        error: null,
    },
    reducers:{
        clearStatus: (state)=> {
            state.status = null
        },
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
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
        [postUsers.pending]: (state) => {
            state.loading = true;
        },
        [postUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload.status;
        },
        [postUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteUsers.pending]: (state) => {
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
        [updateUsers.pending]: (state) => {
            state.loading = true;
        },
    }
})
export const {clearStatus} = usersSlice.actions
export default usersSlice.reducer