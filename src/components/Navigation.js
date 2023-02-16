import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import Home from './Home';
import Login from './Login';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './login/RegisterScreen';
import Test from './Test';

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path='' element={<Home/>} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/register' element={<RegisterScreen />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </Router>
    )
}
