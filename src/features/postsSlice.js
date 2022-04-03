import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async ()=>{
    return null
})
// export const postPosts = createAsyncThunk("posts/postPosts", async (data)=>{
//     return null
// })
export const deletePosts = createAsyncThunk("posts/deletePosts", async (data)=>{
    return null
})
export const updatePosts = createAsyncThunk("posts/updatePosts", async (data)=>{
    return null
})
const postsSlice = createSlice({
    name:'posts',
    initialState:{
        posts:[],
        loading:false,
        error:null,
    },
    extraReducers:{
        [getPosts.pending]:(state,action)=>{
            state.loading = true;
        },
        [getPosts.fulfilled]:(state,action)=>{
            state.loading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [deletePosts.pending]:(state,action)=>{
            state.loading = true;
        },
        [deletePosts.fulfilled]:(state,action)=>{
            state.loading = false;
            state.posts = action.payload;
        },
        [deletePosts.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        },
        [updatePosts.pending]:(state,action)=>{
            state.loading = true;
        },
        [updatePosts.fulfilled]:(state,action)=>{
            state.loading = false;
            state.posts = action.payload;
        },
        [updatePosts.rejected]:(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        }
    }
})
export default postsSlice.reducer