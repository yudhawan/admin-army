import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getPersonil = createAsyncThunk("personil/getPersonil", async (arg,{getState})=>{
    const result = await axios({
        method: "get",
        url:"http://127.0.0.1:4000/admin/personil",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
    });
    return result.data;
})

export const postPersonil = createAsyncThunk("personil,postPersonil", async (data,{getState,dispatch})=>{
    let formdata = new FormData();
    formdata.append("personil",JSON.stringify(data.data));
    formdata.append("images",data.image);
    const result = await axios({
        method:"POST",
        url:"http://127.0.0.1:4000/admin/personil",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
        data:formdata
    })
    dispatch(getPersonil());
    return result.data;
})
export const deletePersonil = createAsyncThunk("personil/deletePersonil", async (id,{getState,dispatch})=>{
    const result = await axios({
        method:"DELETE",
        url:"http://127.0.0.1:4000/admin/personil",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
        data:{id:id}
    })
    dispatch(getPersonil());
    return result.data;
})
export const updatePersonil = createAsyncThunk("personil/updatePersonil", async (data,{getState,dispatch})=>{
    let formdata = new FormData();
    formdata.append("personil",JSON.stringify(data.data));
    formdata.append("images",data.image);
    const result = await axios({
        method:"PUT",
        url:"http://127.0.0.1:4000/admin/personil",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
        data:formdata
    })
    dispatch(getPersonil());
    return result.data;
})
const personilSLice = createSlice({
    name: "personil",
    initialState: {
        personil: [],
        loading: false,
        error: null,
        status: null,
        message: null
    },
    extraReducers:{
        [getPersonil.pending]: (state)=>{
            state.loading = true;
        },
        [getPersonil.fulfilled]:(state,action)=>{
            state.personil = action.payload
        },
        [getPersonil.rejected]:(state,action)=>{
            state.error = action.error
        },
        [postPersonil.pending]: (state)=>{
            state.loading = true;
        },
        [postPersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
        },
        [postPersonil.rejected]:(state,action)=>{
            state.error = action.error
        },
        [deletePersonil.pending]: (state)=>{
            state.loading = true;
        },
        [deletePersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
        },
        [deletePersonil.rejected]:(state,action)=>{
            state.error = action.error
        },
        [updatePersonil.pending]: (state)=>{
            state.loading = true;
        },
        [updatePersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
        },
        [updatePersonil.rejected]:(state,action)=>{
            state.error = action.error
        }
    }
})

export default personilSLice.reducer;