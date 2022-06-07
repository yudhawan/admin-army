import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import host from './host';
export const getDrive = createAsyncThunk('smbops/getDrive', 
    async (payload, {getState}) => {
        const response = await axios({
            method: "get",
            url:host+"/admin/ops",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            }
        });
        return response.data;
    }
);
export const downloadFile = createAsyncThunk(
    "smbops/downloadFile",
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
export const getDir=createAsyncThunk('smbops/getDir',async (payload,{getState})=>{
    const response = await axios({
        method: "get",
        url:host+"/admin/dir/operasional",
        headers:{
            "authorization":"Bearer "+getState().auth.token
        },
    });
    return response.data;
})
export const getFiles=createAsyncThunk('smbops/getFiles',async (payload,{getState})=>{
    const response = await axios({
        method: "get",
        url:host+"/admin/ops",
        headers:{
            "authorization":"Bearer "+getState().auth.token
        },
    });
    return response.data;
})
const opsSlice = createSlice({
    name: 'smbops',
    initialState: {
        ops: [],
        loading: false,
        error: null,
        files:[],
        dir:[]
    },
    extraReducers:{
        [getDrive.pending]: (state, action) => {
            state.loading = true;
        },
        [getDrive.fulfilled]: (state, action) => {
            state.ops = action.payload;
            state.loading = false;
        },
        [getDrive.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [downloadFile.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [getDir.pending]: (state, action) => {
            state.loading = true;
        },
        [getDir.fulfilled]: (state, action) => {
            state.dir = action.payload;
            state.loading = false;
        },
        [getDir.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
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
    }
});

export default opsSlice.reducer;