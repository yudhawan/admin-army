import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "./host";

export const getLaporan = createAsyncThunk("laporan/getLaporan", async (arg,{getState})=>{
    const result = await axios({
        method: "get",
        url: host+"/admin/laporan",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
    })
    return result.data;
})
export const getLaporanKekuatan = createAsyncThunk("laporan/getLaporanKekuatan", async (arg,{getState})=>{
    const result = await axios({
        method: "get",
        url: host+"/admin/laporankekuatan",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
    })
    return result.data;
})
export const getLaporanKekuatanInDuty = createAsyncThunk("laporan/getLaporanKekuatanInDuty", async (arg,{getState})=>{
    const result = await axios({
        method: "get",
        url: host+"/admin/laporankekuatan/induty",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
    })
    return result.data;
})
export const deleteLaporan = createAsyncThunk("laporan/deleteLaporan", async (data)=>{
    return null
})
export const updateLaporan = createAsyncThunk("laporan/updateLaporan", async (data,{getState,dispatch})=>{
    const result = await axios({
        url:host+"/admin/laporan",
        method:"put",
        data:data,
        headers:{
            "authorization": "Bearer "+getState().auth.token
        }
    })
    dispatch(getLaporan())
    return result.data;
})
const laporanSlice = createSlice({
    name:'laporan',
    initialState:{
        laporan:[],
        laporankekuatan:[],
        laporankekuataninduty:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [getLaporan.pending]:(state,action)=>{
            state.loading = true;
        },
        [getLaporan.fulfilled]:(state,action)=>{
            state.loading = false;
            state.laporan = action.payload;
        },
        [getLaporan.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteLaporan.pending]:(state,action)=>{
            state.loading = true;
        },
        [deleteLaporan.fulfilled]:(state,action)=>{
            state.loading = false;
            state.laporan = action.payload;
        },
        [deleteLaporan.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [updateLaporan.pending]:(state,action)=>{
            state.loading = true;
        },
        [updateLaporan.fulfilled]:(state,action)=>{
            state.loading = false;
            state.laporan = action.payload;
        },
        [updateLaporan.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [getLaporanKekuatan.pending]:(state,action)=>{
            state.loading = true;
        },
        [getLaporanKekuatan.fulfilled]:(state,action)=>{
            state.loading = false;
            state.laporankekuatan = action.payload;
        },
        [getLaporanKekuatan.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [getLaporanKekuatanInDuty.pending]:(state,action)=>{
            state.loading = true;
        },
        [getLaporanKekuatanInDuty.fulfilled]:(state,action)=>{
            state.loading = false;
            state.laporankekuataninduty = action.payload;
        },
        [getLaporanKekuatanInDuty.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        }
    }
})
export default laporanSlice.reducer