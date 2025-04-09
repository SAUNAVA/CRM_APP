import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import axios from "axios";



export const fetchDashboardStats = createAsyncThunk(
    "/dashboard/fetchStats",
    async(_,{rejectWithValue})=>{
        try {
            const token = Cookies.get('token')
            const res  = await axios.get('/dashboard/overview' , {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            return res.data
        } catch (error) {
            const message = error.response?.data?.message || "Something went wrong"
            return rejectWithValue(message)
        }
    }
)



const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        stats: {
            totalClients: 0,
            totalRevenue: 0,
            totalProjects: 0,
            recentProjects: []
        },
        loading: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchDashboardStats.pending , (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(fetchDashboardStats.fulfilled ,  (state,action)=>{
                state.loading = false
                state.stats = action.payload
            })
            .addCase(fetchDashboardStats.rejected , (state,action)=>{
                state.loading = false
                state.error = action.payload    
            })
    }
})

export default dashboardSlice.reducer