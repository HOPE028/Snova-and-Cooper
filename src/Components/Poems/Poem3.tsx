import React from 'react'
import Navbar from '../Navbar'
import '../../Styling/Poem.css'

const Poem3: React.FC = () => {
  const poemTitle = 'Blip'

  const poemBody = `
  Happiness is the only emotion you emit

 I love the crap out of you, and that is the shit

 For real girlie, I will kill just for your clit

You will forever be the only girl for me, don’t you trip

My only question is, why did I get picked?

You are a 12/10, and that ain’t flipped

If anyone ever touched you, they would be clipped

I love you to the moon and back, and that is a fix
  `

  return (
    <>
      <Navbar />
      <div className='poemContainer'>
        <h1 className='poemTitle'>{poemTitle}</h1>
        <p className='poemBody'>{poemBody}</p>
      </div>
    </>
  )
}

export default Poem3
