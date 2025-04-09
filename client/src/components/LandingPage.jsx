import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='bg-gradient-to-b from-blue-200 to-gray-300 min-h-screen flex flex-col'>
      {/* Hero Section */}
      <div className='flex-grow flex flex-col justify-center items-center p-6'>
        <div className='w-full max-w-4xl text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to CRM Freelance</h1>
          <p className='text-lg text-gray-600 mb-6 text-center max-w-xl mx-auto'>
            Manage all your clients and projects in a single workspace
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div className='space-x-4 mb-8'>
          <Link className='px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow'
            to='/login'>Login</Link>
          <Link className='px-6 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 shadow'
            to='/register'>Register</Link>
        </div>

        {/* Features Section */}
        <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12'>
          <div className='p-4 bg-white rounded-lg shadow hover:bg-gray-50 hover:shadow-lg transition duration-300'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Client Management</h3>
            <p className='text-gray-600'>Easily organize and track your clients' information.</p>
          </div>
          <div className='p-4 bg-white rounded-lg shadow hover:bg-gray-50 hover:shadow-lg transition duration-300'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Project Tracking</h3>
            <p className='text-gray-600'>Stay on top of your projects with detailed tracking tools.</p>
          </div>
          <div className='p-4 bg-white rounded-lg shadow hover:bg-gray-50 hover:shadow-lg transition duration-300'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Dashboard</h3>
            <p className='text-gray-600'>Gain insights with powerful analytics and reporting.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='w-full bg-gray-200 py-4 text-center'>
        <div className='mb-2 text-sm space-x-4'>
          <Link to='/about' className='hover:underline'>About us</Link>
          <Link to='/about' className='hover:underline'>Privacy</Link>
          <Link to='/about' className='hover:underline'>Terms & Conditions</Link>
        </div>
        <p className='text-gray-600 text-sm'>
          © {new Date().getFullYear()} CRM Freelance. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default LandingPage
