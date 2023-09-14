import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance"

const initialState = {
    courseList: []
}

export const getAllCourses = createAsyncThunk("/course/getAllCourses", async (data) => {
    try {
        const res = axiosInstance.post("/courses", data);
        toast.promise(res, {
            loading: "Wait! fetching all courses",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to load courses"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})



const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: () => {
    }
});

export default courseSlice.reducer;