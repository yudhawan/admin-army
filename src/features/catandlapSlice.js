import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "./host";
export const getSatuan = createAsyncThunk(
    "satuan/getSatuan",
    async (payload, {getState}) => {
        const response = await axios({
            method: "get",
            url:host+"/admin/satuan",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            }
        });
        return response.data;
    }
)
export const postSatuan = createAsyncThunk(
    "satuan/postSatuan",
    async (data, {getState,dispatch}) => {
        const response = await axios({
            method: "post",
            url:host+"/admin/satuan",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            },
            data:{satuan:data}
        });
        dispatch(getSatuan())
        return response.data;
    }
)
export const updateSatuan = createAsyncThunk(
    "satuan/updateSatuan",
    async (data, {getState,dispatch}) => {
        const response = await axios({
            method: "put",
            url:host+"/admin/satuan",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            },
            data:{id:data.id, data:{nama:data.satuan}}
        });
        dispatch(getSatuan())
        return response.data;
    }
)
export const deleteSatuan = createAsyncThunk(
    "satuan/deleteSatuan",
    async (data, {getState,dispatch}) => {
        const response = await axios({
            method: "delete",
            url:host+"/admin/satuan",
            headers:{
                "authorization":"Bearer "+getState().auth.token
            },
            data:{id:data}
        });
        dispatch(getSatuan())
        return response.data;
    }
)
export const getCategories = createAsyncThunk(
    "catandlap/getCategories",
    async (arg,{getState}) => {
        const result = await axios({
            method: "get",
            url: host+"/admin/kategori",
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
                url: host+"/admin/kategori",
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
                url: host+"/admin/kategori",
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
                url: host+"/admin/kategori",
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
            url: host+"/admin/jenis_laporan",
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
                url: host+"/admin/jenis_laporan",
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
                url: host+"/admin/jenis_laporan",
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
                url: host+"/admin/jenis_laporan",
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

export const getKeterangan = createAsyncThunk(
    "catandlap/getKeterangn",
    async (arg,{getState}) => {
        const result = await axios({
            method: "get",
            url: host+"/admin/keterangan",
            headers:{
                "authorization": "Bearer "+getState().auth.token
            },
        });
        return result.data;
    }
);
export const postKeterangan = createAsyncThunk(
    "catandlap/postKeterangn",
    async (data,{getState,dispatch}) => {
        try {
            const result = await axios({
                method: "post",
                url: host+"/admin/keterangan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {keterangan:data.ket, subketerangan:data.sub, status:data.status},
            });
            dispatch(getKeterangan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const deleteKeterangan = createAsyncThunk(
    "catandlap/deleteKeterangan",
    async (id,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "delete",
                url: host+"/admin/keterangan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:id},
            });
            dispatch(getKeterangan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const updateKeterangan = createAsyncThunk(
    "catandlap/updateKeterangan",
    async (data,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "put",
                url: host+"/admin/keterangan",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:data.id, data:{keterangan:data.ket}},
            });
            dispatch(getKeterangan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const getSubKeterangan = createAsyncThunk(
    "catandlap/getSubKeterangn",
    async (arg,{getState}) => {
        const result = await axios({
            method: "get",
            url: host+"/admin/keterangan/sub",
            headers:{
                "authorization": "Bearer "+getState().auth.token
            },
        });
        return result.data;
    }
);
export const postSubKeterangan = createAsyncThunk(
    "catandlap/postSubKeterangn",
    async (data,{getState,dispatch}) => {
        try {
            const result = await axios({
                method: "post",
                url: host+"/admin/keterangan/sub",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: data
            });
            dispatch(getSubKeterangan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const deleteSubKeterangan = createAsyncThunk(
    "catandlap/deleteSubKeterangan",
    async (id,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "delete",
                url: host+"/admin/keterangan/sub",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:id},
            });
            dispatch(getSubKeterangan());
            return result.data;
        } catch (error) {
            return error
        }
    }
);
export const updateSubKeterangan = createAsyncThunk(
    "catandlap/updateSubKeterangan",
    async (data,{dispatch,getState}) => {
        try {
            const result = await axios({
                method: "put",
                url: host+"/admin/keterangan/sub",
                headers:{
                    "authorization": "Bearer "+getState().auth.token
                },
                data: {id:data.id, data:{subketerangan:data.sub}},
            });
            dispatch(getSubKeterangan());
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
        satuan:[],
        keterangan:[],
        subKeterangan:[],
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
        [getSatuan.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getSatuan.fulfilled]: (state, action) => {
            state.loading = false;
            state.satuan = action.payload;
        },
        [getSatuan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [postSatuan.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [postSatuan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [postSatuan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = action.payload.status;
        },
        [deleteSatuan.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteSatuan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [deleteSatuan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = action.payload.status;
        },
        [updateSatuan.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [updateSatuan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [updateSatuan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = action.payload.status;
        },
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
        },
        [getKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [getKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.keterangan = action.payload;
        },
        [getKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [postKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [postKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [postKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [deleteKeterangan.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [deleteKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [updateKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [updateKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [updateKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [getSubKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [getSubKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.subKeterangan = action.payload;
        },
        [getSubKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [postSubKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [postSubKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [postSubKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [deleteSubKeterangan.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteSubKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [deleteSubKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        [updateSubKeterangan.pending]: (state) => {
            state.loading = true;
        },
        [updateSubKeterangan.fulfilled]: (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.status = action.payload.status;
        },
        [updateSubKeterangan.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.status = action.payload.status;
        },
        
    }
})

export const {clearMsgAndStatus} = catandlapSlice.actions;

export default catandlapSlice.reducer;