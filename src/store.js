import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice';
import catandlapSlice from './features/catandlapSlice';
import usersReducer from './features/usersSlice';
import laporanReducer from './features/laporanSlice';
import personilReducer from './features/personilSlice';
import driveReducer from './features/driveSlice';
import intelReducer from './features/intelSlice';
import logReducer from './features/logSlice'
import opsReducer from './features/opsSlice'
import renReducer from './features/renSlice'
import materillReducer from './features/materillSlice'	
import mrsReducer from './features/mrsSlice'
export default configureStore({
    reducer:{
        auth:authReducer,
        catandlap:catandlapSlice,
        laporan:laporanReducer,
        users:usersReducer,
        personil:personilReducer,
        drive:driveReducer,
        intel:intelReducer,
        log:logReducer,
        ops:opsReducer,
        ren:renReducer,
        materill:materillReducer,
        mrs:mrsReducer,
    },
    devTools:false
})