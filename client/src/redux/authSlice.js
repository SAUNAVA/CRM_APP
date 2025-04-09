import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import axios from "axios";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async({email,password} , {rejectWithValue})=>{
        try {
            const res = await axios.post('/user/login',{email,password})
            // console.log(res.data )
            Cookies.set('token',res.data.token,{expires:1})
            return res.data
        } catch (error) {
            const message = error.response?.data?.message || "Something went wrong"
            return rejectWithValue(message)
        }
    }
)





const authSlice = createSlice({
    name : 'auth',
    initialState : {
        user:null,
        token : Cookies.get('token') ||  null,
        loading : false,
        error : null,
    },
    reducers:{
        logout : (state)=>{
            state.token = null;
            state.user = null,
            Cookies.remove('token')
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading  = true
            state.error=null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false
            state.token = action.payload.token
            state.user = action.payload.user
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {logout} = authSlice.actions
export default authSlice.reducer