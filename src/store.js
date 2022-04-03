import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import categoriesReducer from './features/categoriesSlice';
import usersReducer from './features/usersSlice';
import postsReducer from './features/postsSlice';
export default configureStore({
    auth:authReducer,
    categories:categoriesReducer,
    posts:postsReducer,
    users:usersReducer
})