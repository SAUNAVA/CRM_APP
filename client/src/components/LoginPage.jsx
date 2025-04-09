// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/authSlice'
const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const[error,setError] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, error, token } = useSelector((state) => state.auth)

    useEffect(() => {
        if (token) {
            alert("Login Successful")
            navigate("/dashboard")
        }
    }, [token, navigate])



    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
    }
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-50 px-6'>
            <div className='bg-white w-full max-w-md p-8 rounded-2xl shadow-xl'>
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Login To your Account</h2>
                {error && (
                    <div className='mb-4 text-red-600 text-center bg-red-100 p-2 rounded'>
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin} className='space-y-4'>
                    <div>
                        <label className='block text-gray-600' >Email:</label>
                        <input className='w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email" />
                    </div>
                    <div>
                        <label className='block text-gray-600' >Password:</label>
                        <input className='w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400' type="password"
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        // minLength={6} maxLength={20}
                        />
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                        {loading? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="mt-4 text-sm text-center text-gray-500">
                    Dont't have an account?{' '}
                    <Link to='/register' className="text-blue-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default LoginPage
