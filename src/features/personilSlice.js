import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "./host";
export const getPersonil = createAsyncThunk("personil/getPersonil", async (arg,{getState})=>{
    const result = await axios({
        method: "get",
        url:host+"/admin/personil",
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
    formdata.append("images",data.file);
    const result = await axios({
        method:"POST",
        url:host+"/admin/personil",
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
        url:host+"/admin/personil",
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
    formdata.append("images",data.file);
    const result = await axios({
        method:"PUT",
        url:host+"/admin/personil",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
        data:formdata
    })
    dispatch(getPersonil());
    return result.data;
})
export const downloadFile = createAsyncThunk(
    "personil/downloadFile",
    async (payload, {dispatch}) => {
        const currentToken = localStorage.getItem("_ar_m_t");
        const {data}=await axios({
            method: "get",
            url: host+'/admin/download',
            headers: {
                'authorization': `Bearer ${currentToken}`,
            },
            responseType: 'blob',
            params: payload,
        })
        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', payload.originalname);
        document.body.appendChild(link);
        link.click();
        return
    }
);
export const getDir=createAsyncThunk('personil/getDir',async (payload,{getState})=>{
    const response = await axios({
        method: "get",
        url:host+"/admin/dirpersonil",
        headers:{
            "authorization":"Bearer "+getState().auth.token
        },
    });
    return response.data;
})
export const getFiles=createAsyncThunk('personil/getFiles',async (payload,{getState})=>{
    const response = await axios({
        method: "get",
        url:host+"/admin/personildrive",
        headers:{
            "authorization":"Bearer "+getState().auth.token
        },
    });
    return response.data;
})
const personilSLice = createSlice({
    name: "personil",
    initialState: {
        personil: [],
        loading: false,
        error: null,
        status: null,
        message: null,
        files:[],
        dir:[],
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
        },
        [getFiles.pending]: (state)=>{
            state.loading = true;
        },
        [getFiles.fulfilled]:(state,action)=>{ 
            state.files = action.payload
            state.loading=false
        },
        [getFiles.rejected]:(state,action)=>{
            state.error = action.error
        },
        [getDir.pending]: (state)=>{
            state.loading = true;
        },
        [getDir.fulfilled]:(state,action)=>{
            state.dir = action.payload
            state.loading=false
        },
        [getDir.rejected]:(state,action)=>{
            state.error = action.error
        }
    }
})

export default personilSLice.reducer;