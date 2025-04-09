// pages/Dashboard.jsx
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardStats } from "../redux/dashboardSlice";

export default function Dashboard() {

  const dispatch =  useDispatch()
  // const navigate =  useNavigate()
  const{ stats , loading , error} = useSelector((state)=>state.dashboard)

  useEffect(()=>{
    dispatch(fetchDashboardStats())
  },[dispatch])

  if (loading) return <p className="text-center mt-8">Loading dashboard...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Simple CRM</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block text-gray-700 hover:text-blue-600">Dashboard</Link>
          <Link to="/clients" className="block text-gray-700 hover:text-blue-600">Clients</Link>
          <Link to="/projects" className="block text-gray-700 hover:text-blue-600">Projects</Link>
          <Link to="/settings" className="block text-gray-700 hover:text-blue-600">Settings</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div className="space-x-4">
          <Link to="/clients/add" className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow">
            Add Client
          </Link>
          <Logout/>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">{stats.totalClients}</h3>
            <p className="text-2xl font-bold text-gray-800">{stats.totalClients}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold text-gray-800">$0</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <h3 className="text-sm text-gray-500">Projects</h3>
            <p className="text-2xl font-bold text-gray-800">0</p>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Revenue</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
            {/* Chart Placeholder */}
            [Revenue Chart Here]
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Project A</h3>
            <p className="text-gray-500 text-sm">Client: Alpha Corp</p>
            <p className="text-gray-500 text-sm">Status: In Progress</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="font-semibold text-gray-700 mb-2">Project B</h3>
            <p className="text-gray-500 text-sm">Client: Beta Inc</p>
            <p className="text-gray-500 text-sm">Status: Completed</p>
          </div>
        </div>
      </main>
    </div>
  );
}
