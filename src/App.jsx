import React from 'react'
import Home from "./views/Home";
import Booking from './views/Booking';
import Contact from './views/Contact';
import Login from './views/Login';
import Register from './views/Register';
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatCircle from './components/HairCraftXAI/ChatCircle';
import { Toaster } from 'sonner';
import Dashboard from './views/Dashboard';
import AdminDashboard from './components/Dashboard/ADashboard/AdminDashboard'

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/Contact' element={<Contact /> } />
          <Route path='/Login' element={<Login /> } />
          <Route path='/register' element={<Register />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
      <ChatCircle />
      <Toaster theme='dark'/>
    </BrowserRouter>
     
  )
}

export default App
