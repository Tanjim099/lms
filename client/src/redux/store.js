import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseSlice from './slices/courseSlice';
import razorpaySliceReducer from './slices/RazorpaySlice';
import lectureSliceReducer from './slices/LectureSlice';
import statSliceReducer from './slices/StatSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseSlice,
        razorpay: razorpaySliceReducer,
        lecture: lectureSliceReducer,
        stat: statSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
});

export default store