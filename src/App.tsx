import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { useAuth } from './Contexts/AuthContext'
import Gallery from './Components/Gallery'
import Login from './Components/Login'
import Upload from './Components/Upload'
import ImageDetail from './Components/ImageDetail'
import Navbar from './Components/Navbar'

function App() {
  const { currentUser } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Gallery />} />
        <Route path='/image/:id' element={<ImageDetail />} />
        <Route
          path='/login'
          element={currentUser ? <Navigate replace to='/' /> : <Login />}
        />
        <Route
          path='/upload'
          element={currentUser ? <Upload /> : <Navigate replace to='/' />}
        />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
