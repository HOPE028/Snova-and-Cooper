import React from 'react'
import Navbar from '../Navbar'
import '../../Styling/Poem.css'

const Poem2: React.FC = () => {
  const poemTitle = '17 Years'

  const poemBody = `
  1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

That is how long it has been since I knew I couldn’t live without you.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

I have had a smile on my face, knowing you are beside me.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

Sometimes it’s really hard to resist crying when I see old videos of us.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

Because I know how thankful I am to have you, my princess.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

My eyes are watering up at the thought of losing you.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

I can’t bear a life without you.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

Thank you for everything Artemis.

1.25 years. 15 months. 459 days. 11016 hours. 660'960 minutes. 39'657'600 seconds.

I want to live the next 100 years with no body but you by my side. 

100 years. 1200 months. 36'500 days. 876'000 hours. 52'560'000 minutes. 3'153'600'000 seconds.

To go.
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

export default Poem2
