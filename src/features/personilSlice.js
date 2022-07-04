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
export const getPersonilPagination = createAsyncThunk("personil/getPersonilPagination", async (data,{getState})=>{
    const {personilPagination} = getState().personil
    const result = await axios({
        method: "get",
        url:host+"/admin/personilPagination",
        headers:{
            "authorization": "Bearer "+getState().auth.token
        },
        params:{page:data.page,limit:20,query:data.query}
    })
   return {data:[...new Set([...personilPagination, ...result.data.data.map(val => val)])], personilLength:result.data.personilLength}
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
        personilPagination:[],
        personil: [],
        personilLength:0,
        loading: false,
        error: null,
        status: null,
        message: null,
        files:[],
        dir:[],
    },
    reducers:{
        resetStatus: (state)=>{
            state.status = null
            state.loading = false;
        },
        resetPersonilPage: (state)=>{
            state.personilPagination=[]
        }
    },
    extraReducers:{
        [getPersonil.pending]: (state)=>{
            state.loading = true;
        },
        [getPersonil.fulfilled]:(state,action)=>{
            state.personil = action.payload
            state.loading = false;
        },
        [getPersonil.rejected]:(state,action)=>{
            state.error = action.error
            state.loading=false
        },
        [getPersonilPagination.pending]: (state)=>{
            state.loading = true;
        },
        [getPersonilPagination.fulfilled]:(state,action)=>{
            state.personilPagination =action.payload.data
            state.personilLength = action.payload.personilLength
            state.loading = false;
        },
        [getPersonilPagination.rejected]:(state,action)=>{
            state.error = action.error
            state.loading=false
        },
        [postPersonil.pending]: (state)=>{
            state.loading = true;
        },
        [postPersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
            state.loading = false;
        },
        [postPersonil.rejected]:(state,action)=>{
            state.error = action.error
            state.loading=false
        },
        [deletePersonil.pending]: (state)=>{
            state.loading = true;
        },
        [deletePersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
            state.loading = false;
        },
        [deletePersonil.rejected]:(state,action)=>{
            state.error = action.error
            state.loading=false
        },
        [updatePersonil.pending]: (state)=>{
            state.loading = true;
        },
        [updatePersonil.fulfilled]:(state,action)=>{
            state.status = action.payload.status
            state.message = action.payload.message
            state.loading = false;
        },
        [updatePersonil.rejected]:(state,action)=>{
            state.error = action.error
            state.loading=false
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
            state.loading=false
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
            state.loading=false
        }
    }
})
export const {resetStatus,resetPersonilPage} = personilSLice.actions
export default personilSLice.reducer;