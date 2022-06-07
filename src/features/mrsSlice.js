import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import host from './host'

export const getData = createAsyncThunk('mrsSlice/getData', async (payload,{getState}) => {
    const response = await axios({
        method: 'get',
        url:`${host}/medical/admin`,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        }
    });
    return response.data;
});

export const deleteData = createAsyncThunk('mrsSlice/deleteData', async (payload,{getState,dispatch}) => {
    await axios({
        method: 'delete',
        url:`${host}/medical/admin`,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        },
        data:{id:payload}
    });
    dispatch(getData());
    return
});

const mrsSlice = createSlice({
    name: 'mrs',
    initialState: {
        loading: false,
        mrs:[],
        error: null,
    },
    extraReducers:{
        [getData.pending]:(state)=>{
            state.loading = true;
        },
        [getData.fulfilled]:(state,action)=>{
            state.mrs = action.payload
        },
        [getData.rejected]:(state,action)=>{
            state.error = action.payload
        },
    }
})

export default mrsSlice.reducer;