import React from 'react'
import Navbar from './Navbar'
import '../Styling/Poem.css'

const Poem: React.FC = () => {
  const poemTitle = 'Love: noun - an intense feeling of deep affection'

  const poemBody = `
  Intense. You make me strive to be a better man.

  Intense. You make me feel ok being just a boy.

  Intense. The thought of life without you hurts every part of me.

  Intense. I care about you too much to put in words. 

  Intense. Your smile strengthens my heart.

  Intense. Your tears break my walls. 

  Intense. I miss you every second I am not with you.

  Intense. I pray I never go without you. 

  Intense. You have seen my worst. 

  Intense. You stick by me regardless.

  Intense. I hope to be like you one day.

  Intense. So that I can love you the way you love me. 

  Intense. Thank you Artemis.

  Intense. I didn’t know love could be this… Intense.`

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

export default Poem
