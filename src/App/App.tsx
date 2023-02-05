import React from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

import Login from '../features/Login/Login'
import Navbar from '../features/Navbar/Navbar'
import NewPassword from '../features/NewPassword/NewPassword'
import NotFound from '../features/NotFound/NotFound'
import Profile from '../features/Profile/Profile'
import RecoveryPassword from '../features/RecoveryPassword/RecoveryPassword'
import SignUp from '../features/SignUp/SignUp'
import SuperComponents from '../features/SuperComponents/SuperComponents'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/recoveryPassword" element={<RecoveryPassword />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/testComponents" element={<SuperComponents />} />
      </Routes>
    </div>
  )
}

export default App
