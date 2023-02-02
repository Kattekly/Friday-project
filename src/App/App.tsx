import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Profile from "../features/Profile/Profile";
import Login from "../features/Login/Login";
import SignUp from "../features/SignUp/SignUp";
import RecoveryPassword from "../features/RecoveryPassword/RecoveryPassword";
import NewPassword from "../features/NewPassword/NewPassword";
import NotFound from "../features/NotFound/NotFound";
import SuperComponents from "../features/SuperComponents/SuperComponents";
import Header from "../features/Header/Header";

function App() {
    return (
        <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/profile"/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/recoveryPassword" element={<RecoveryPassword/>}/>
                    <Route path="/newPassword" element={<NewPassword/>}/>
                    <Route path="/404" element={<NotFound/>}/>
                    <Route path="/testComponents" element={<SuperComponents/>}/>
                </Routes>
        </div>
    );
}

export default App;
