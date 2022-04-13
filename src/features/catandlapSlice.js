import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategories = createAsyncThunk(
    "catandlap/getCategories",
    async (arg,{getState}) => {
        const result = await axios({
            method: "get",
            url: "http://127.0.0.1:4000/admin/kategori",
            headers:{
                "authorization": "Bearer "+getState().auth.token
            },
        });
        return result.data;
    }
);
export const postCategories = createAsyncThunk(
    "catandlap/postCategories",
    async (data,{getState,dispatch}) => {
        try {
            const result = await axios({
                method: "post",
                url: "http://127.0.0.1:4000/admin/kategori",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {kategori:data},
            });
            dispatch(getCategories());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const deleteCategories = createAsyncThunk(
    "catandlap/deleteCategories",
    async (id,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "delete",
                url: "http://127.0.0.1:4000/admin/kategori",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:id},
            });
            dispatch(getCategories());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const updateCategories = createAsyncThunk(
    "catandlap/updateCategories",
    async (data,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "put",
                url: "http://127.0.0.1:4000/admin/kategori",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:data.id, data:{kategori:data.kategori}},
            });
            dispatch(getCategories());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const getJenisLaporan = createAsyncThunk(
    "catandlapcatandlap/getJenisLaporan",
    async (arg,{getState}) => {
        const result = await axios({
            method: "get",
            url: "http://127.0.0.1:4000/admin/jenis_laporan",
            headers:{
                "authorization": "Bearer "+getState().auth.token
            },
        });
        return result.data;
    }
);
export const postJenisLaporan = createAsyncThunk(
    "catandlapcatandlap/postJenisLaporan",
    async (data,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "post",
                url: "http://127.0.0.1:4000/admin/jenis_laporan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data:data
            });
            dispatch(getJenisLaporan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const deleteJenisLaporan = createAsyncThunk(
    "catandlapcatandlap/deleteJenisLaporan",
    async (id,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "delete",
                url: "http://127.0.0.1:4000/admin/jenis_laporan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data:{id:id}
            });
            dispatch(getJenisLaporan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const updateJenisLaporan = createAsyncThunk(
    "catandlapcatandlap/updateJenisLaporan",
    async (data,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "put",
                url: "http://127.0.0.1:4000/admin/jenis_laporan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:data.id, data:{nama:data.nama,color:data.color}},
            });
            dispatch(getJenisLaporan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);


const catandlapSlice = createSlice({
    name: "catandlap",
    initialState: {
        categories: [],
        jenisLaporan: [],
        message: "",
        status:null,
        loading: false,
        error: null,
    },
    reducers:{
        clearMsgAndStatus: (state) => {
            state.message = "";
            state.status = null;
        }
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [postCategories.pending]: (state) => {
            state.loading = true;
        },
        [postCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [postCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [deleteCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCategories.fulfilled]: (state, action) => {  
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [deleteCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [updateCategories.pending]: (state) => {
            state.loading = true;
        },
        [updateCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [updateCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [getJenisLaporan.pending]: (state) => {
            state.loading = true;
        },
        [getJenisLaporan.fulfilled]: (state, action) => {
            state.loading = false;
            state.jenisLaporan = action.payload;
        },
        [getJenisLaporan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [postJenisLaporan.pending]: (state) => {
            state.loading = true;
        },
        [postJenisLaporan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [postJenisLaporan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [deleteJenisLaporan.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteJenisLaporan.fulfilled]: (state, action) => {  
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [deleteJenisLaporan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [updateJenisLaporan.pending]: (state) => {
            state.loading = true;
        },
        [updateJenisLaporan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [updateJenisLaporan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        }

    }
})

export const {clearMsgAndStatus} = catandlapSlice.actions;

export default catandlapSlice.reducer;