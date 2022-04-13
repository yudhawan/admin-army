import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import catandlapSlice from './features/catandlapSlice';
import usersReducer from './features/usersSlice';
import postsReducer from './features/postsSlice';
import personilReducer from './features/personilSlice';
export default configureStore({
    reducer:{
        auth:authReducer,
        catandlap:catandlapSlice,
        posts:postsReducer,
        users:usersReducer,
        personil:personilReducer
    }
})