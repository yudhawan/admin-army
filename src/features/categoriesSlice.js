import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        return null
    }
);
export const postCategories = createAsyncThunk(
    "categories/postCategories",
    async (data) => {
        return null
    }
);
export const deleteCategories = createAsyncThunk(
    "categories/deleteCategories",
    async (id) => {
        return null
    }
);
export const updateCategories = createAsyncThunk(
    "categories/updateCategories",
    async (data) => {
        return null
    }
);


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loading: false,
        error: null,
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
        [postCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [postCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [postCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [deleteCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [deleteCategories.fulfilled]: (state, action) => {  
            state.loading = false;
            state.categories = action.payload;
        },
        [deleteCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
})

export default categoriesSlice.reducer;