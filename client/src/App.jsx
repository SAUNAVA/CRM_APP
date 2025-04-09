import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import './index.css'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'

function App() {
  

  return(
    <Router>
      {/* <div className='bg-red-300'>Tailwind reference</div> */}
      <Routes>
        
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App
