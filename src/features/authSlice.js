import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const login = createAsyncThunk("auth/login", async (data) => {
    
    const result = await axios.post("http://127.0.0.1:4000/authentication/login_admin", data);
    if(result.data.token) localStorage.setItem("_ar_m_t", result.data.token);
    return result.data.token
    
})
export const servicesAuth = createAsyncThunk("auth/serviceAuth", async ()=>{
    const currentToken = localStorage.getItem("_ar_m_t");
    if(currentToken){
        let result = await axios({
            method: "GET",
            url:"http://127.0.0.1:4000/authentication/services_admn",
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
            state.token = action.payload;
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