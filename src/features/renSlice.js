import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import host from './host';
export const getDrive = createAsyncThunk('smbren/getDrive', 
    async (payload, {getState}) => {
        const response = await axios({
            method: "get",
            url:host+"/admin/ren",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            }
        });
        return response.data;
    }
);
export const downloadFile = createAsyncThunk(
    "smbren/downloadFile",
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

const renSlice = createSlice({
    name: 'smbren',
    initialState: {
        ren: [],
        loading: false,
        error: null,
    },
    extraReducers:{
        [getDrive.pending]: (state, action) => {
            state.loading = true;
        },
        [getDrive.fulfilled]: (state, action) => {
            state.ren = action.payload;
            state.loading = false;
        },
        [getDrive.rejected]: (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        },
        [downloadFile.fulfilled]: (state, action) => {
            state.loading = false;
        },
        
    }
});

export default renSlice.reducer;