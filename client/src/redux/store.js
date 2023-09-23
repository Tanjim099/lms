import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import courseSlice from './slices/courseSlice';
import razorpaySliceReducer from './slices/RazorpaySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        course: courseSlice,
        razorpay: razorpaySliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true
});

export default store