import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'
import Navbar from './Navbar'
import '../Styling/Login.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const { login } = useAuth()

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()

    try {
      await login(email, password)
      navigate('/') // Redirect to gallery page
    } catch (error) {
      setError('Error signing in with password and email')
      console.error('Error signing in with password and email', error)
    }
  }

  return (
    <>
      <Navbar />
      <form className='login-form' onSubmit={handleLogin}>
        <h1>Login</h1>
        {error && <div>{error}</div>}
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Log In' />
      </form>
    </>
  )
}

export default Login
