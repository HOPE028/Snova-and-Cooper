import React from 'react'
import Navbar from '../Navbar'
import '../../Styling/Poem.css'
import { Link } from 'react-router-dom'

const Poems: React.FC = () => {
  const poemTitle = 'A Place Only For My Baby'

  return (
    <>
      <Navbar />
      <div className='poemContainer'>
        <h1 className='poemTitle'>{poemTitle}</h1>
        <Link to='/Poems/Intense'>
          <p className='poemBody'>Intense</p>
        </Link>
        <Link to='/Poems/17-years'>
          <p className='poemBody'>17 Years</p>
        </Link>
        <Link to='/Poems/Blip'>
          <p className='poemBody'>A Blip</p>
        </Link>
      </div>
    </>
  )
}

export default Poems
