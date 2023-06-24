import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import '../Styling/Logout.css' // Assuming you saved the CSS in Logout.css

const Logout: React.FC = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate('/')
    } catch {
      console.error('Failed to log out')
    }
  }

  return (
    <button className='logout-button' onClick={handleLogout}>
      Logout
    </button>
  )
}

export default Logout
