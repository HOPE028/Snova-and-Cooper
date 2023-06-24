import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import Logout from './Logout'
import '../Styling/Navbar.css'

const Navbar: React.FC = () => {
  const { currentUser } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  const closeMenu = () => {
    setShowMenu(false)
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav>
      <div className='menu-btn' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>
        <Link to='/' onClick={closeMenu}>
          Snova & Cooper
        </Link>
      </h1>
      <div className={showMenu ? 'nav-links open' : 'nav-links'}>
        <div className='nav-section'>
          {currentUser ? (
            <Logout />
          ) : (
            <Link to='/login' onClick={closeMenu}>
              Login
            </Link>
          )}
        </div>
        <div className='nav-section'>
          {currentUser ? (
            <Link to='/Upload' onClick={closeMenu}>
              Upload
            </Link>
          ) : (
            <div className='dummy-block'></div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
