import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import host from './host'

export const getData = createAsyncThunk('materillSlice/getData', async (payload,{getState}) => {
    const response = await axios({
        method: 'get',
        url:`${host}/materill/admin`,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        }
    });
    return response.data;
})
export const getDataMaintenance = createAsyncThunk('materillSlice/getDataMaintenance', async (payload,{getState}) => {
    const response = await axios({
        method: 'get',
        url:`${host}/materill/admin/maintenance`,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        }
    });
    return response.data;
});

export const deleteData = createAsyncThunk('materillSlice/deleteData', async (payload,{getState,dispatch}) => {
    await axios({
        method: 'delete',
        url:`${host}/materill/admin`,
        headers: {
            'Authorization': `Bearer ${getState().auth.token}`
        },
        data:{id:payload}
    });
    dispatch(getData());
    return
});

const materillSlice = createSlice({
    name: 'materill',
    initialState: {
        loading: false,
        materill:[],
        maintenance:[],
        error: null,
    },
    extraReducers:{
        [getData.pending]:(state)=>{
            state.loading = true;
        },
        [getData.fulfilled]:(state,action)=>{
            state.materill = action.payload
        },
        [getData.rejected]:(state,action)=>{
            state.error = action.payload
        },
        [getDataMaintenance.pending]:(state)=>{
            state.loading = true
        },
        [getDataMaintenance.fulfilled]:(state,action)=>{
            state.maintenance = action.payload
        },
        [getDataMaintenance.rejected]:(state,action)=>{
            state.error = action.payload
        },
    }
})

export default materillSlice.reducer;