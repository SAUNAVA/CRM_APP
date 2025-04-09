import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import Cookies from 'js-cookie'

import React from 'react'
import { useNavigate } from "react-router-dom";

const Logout = () => {

    const dispatch = useDispatch()
    const navigate =  useNavigate()

    const handleLogout = ()=>{
        console.log("Before",Cookies.get('token'))
        dispatch(logout())
        console.log("After",Cookies.get('token'))
        navigate('/login')
    }
    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
        >
            Logout
        </button>
    )
}

export default Logout
