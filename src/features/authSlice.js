import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import host from "./host";
export const login = createAsyncThunk("auth/login", async (data) => {
    const result = await axios.post(host+"/authentication/login_admin", data);
    if(result.data.token) localStorage.setItem("_ar_m_t", result.data.token);
    return result.data
})
export const servicesAuth = createAsyncThunk("auth/serviceAuth", async ()=>{
    const currentToken = localStorage.getItem("_ar_m_t");
    if(currentToken){
        let result = await axios({
            method: "GET",
            url:host+"/authentication/services_admn",
            headers: {
                'authorization': `Bearer ${currentToken}`,
            },
        });
        if(currentToken===result.data.token){
            localStorage.setItem('_ar_m_t',result.data.token)
            return result.data.token;
        }
        if(currentToken!=result.data.token){
            localStorage.removeItem('_ar_m_t')
            return {token:null}
        }
    }   
})
const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        loading: false,
        error: null,
    },
    reducers:{
        logout: (state) => {
            localStorage.removeItem('_ar_m_t')
            state.token = null
            window.location.replace('/')
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [servicesAuth.pending]: (state) => {
            state.loading = true;
        },
        [servicesAuth.fulfilled]: (state, action) => {
            state.loading = false;
            state.token = action.payload;
        },
        [servicesAuth.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
})
export const { logout } = authSlice.actions;
export default authSlice.reducer