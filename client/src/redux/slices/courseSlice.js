import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance"

const initialState = {
    courseList: []
}

export const getAllCourses = createAsyncThunk("/course/getAllCourses", async (data) => {
    try {
        const res = axiosInstance.get("/courses", data);
        toast.promise(res, {
            loading: "Wait! fetching all courses",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to load courses"
        });
        return (await res).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})



const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            console.log(action.payload)
            if (action.payload) {
                state.courseData = [...action.payload]
            }
        })
    }
});

export default courseSlice.reducer;