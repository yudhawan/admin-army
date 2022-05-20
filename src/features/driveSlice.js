import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import host from './host';
export const getDrive = createAsyncThunk('drive/getDrive', 
    async (payload, {getState}) => {
        const response = await axios({
            method: "get",
            url:host+"/admin/drive",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            }
        });
        return response.data;
    }
);
export const downloadFile = createAsyncThunk(
    "file/downloadFile",
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
export const deleteFile = createAsyncThunk(
    "file/deleteFile",
    async (payload, {dispatch}) => {
        const currentToken = localStorage.getItem("_ar_m_t");
        await axios({
            method: "delete",
            url: host+'/admin/drive/',
            headers: {
                Authorization: `Bearer ${currentToken}`,
            },
            data: payload,
        })
        dispatch(getDrive());
        return 
    }
);
const driveSlice = createSlice({
    name: 'drive',
    initialState: {
        drive: [],
        loading: false,
        error: null,
    },
    extraReducers:{
        [getDrive.pending]: (state, action) => {
            state.loading = true;
        },
        [getDrive.fulfilled]: (state, action) => {
            state.drive = action.payload;
            state.loading = false;
        },
        [getDrive.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [downloadFile.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [deleteFile.pending]:(state,action)=>{
            state.loading = true;
            state.error = null;
        },
        [deleteFile.fulfilled]:(state,action)=>{
            state.loading = false;
            state.error = null;
        },
        [deleteFile.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error;
        }
    }
});

export default driveSlice.reducer;