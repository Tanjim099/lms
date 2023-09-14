import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../config/axiosInstance"

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {}
}

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res = axiosInstance.post("/user/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})


export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const response = axiosInstance.post("/user/login", data);

        toast.promise(response, {
            loading: "Wait! authentcating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to authentcate your account"
        });
        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const logout = createAsyncThunk("/auth/logout", async () => {
    try {
        const response = axiosInstance.post("user/logout");

        toast.promise(response, {
            loading: "Wait! logging out your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to logout your account"
        });
        return await response;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("data", JSON.stringify(action?.payload?.data));
                localStorage.setItem("isLoggedIn", true);
                localStorage.setItem("role", action?.payload?.data?.user?.role);
                state.isLoggedIn = true;
                state.data = action?.payload?.data?.user;
                state.role = action?.payload?.data?.user?.role;
            })
            .addCase(logout.fulfilled, (state) => {
                localStorage.clear();
                state.isLoggedIn = false;
                state.role = "";
                state.data = {};
            })
    }
});

export default authSlice.reducer;