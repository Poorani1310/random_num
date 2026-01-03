import React from 'react'

const Random = ({randnum, gen_random}) => {
  return (
    <div className='App-header'>
       <h3>Random Number Generator</h3>
       <h4>(1 - 100)</h4>
       {randnum == 0 ? <h2>Yet to generate</h2> : <h2>{randnum}</h2>} 
       <button onClick={gen_random}>Generate</button>
       <p>Designed by Poorani Davidraj</p>
    </div>
  )
}

export default Random
