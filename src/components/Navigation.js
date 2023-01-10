import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Chat from './Chat';
import Login from './Login';

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </Router>
    )
}
